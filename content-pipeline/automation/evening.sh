#!/bin/zsh
# Evening content run: drafts news articles, deploys staging, sends TG digest.
# Scheduled by launchd (com.xaid.content-evening). Safe to run manually.
set -euo pipefail

export PATH="/opt/homebrew/bin:$HOME/.bun/bin:$HOME/.local/bin:$HOME/.nvm/versions/node/v24.14.0/bin:/usr/local/bin:/usr/bin:/bin"
REPO="/Users/anastasia/Projects/xAID/xaid-landing"
STATE="$REPO/content-pipeline/automation/state"
LOG="$STATE/evening-$(date +%Y-%m-%d).log"
RETRY_MARKER="$STATE/retry-$(date +%Y-%m-%d).marker"        # quota failure → 23:05 retry.sh
RETRY30_MARKER="$STATE/retry-30-$(date +%Y-%m-%d).marker"   # transient failure → 30-min retry30.sh
cd "$REPO"

# Mutual exclusion: never let the 17:00 run, a 30-min retry, the 23:05 retry, or a
# manual invocation run concurrently (double claude / double staging deploy). mkdir is atomic.
LOCK="$STATE/evening.lock"
if ! mkdir "$LOCK" 2>/dev/null; then
  echo "=== evening run SKIPPED $(date): another run holds the lock ===" >> "$LOG"
  exit 0
fi
trap 'rmdir "$LOCK" 2>/dev/null' EXIT

echo "=== evening run $(date) ===" >> "$LOG"
claude -p "$(cat content-pipeline/automation/evening-prompt.md)" \
  --permission-mode acceptEdits \
  --settings content-pipeline/automation/claude-settings.json \
  >> "$LOG" 2>&1 \
  || {
    echo "evening run FAILED $(date)" >> "$LOG"
    if grep -qiE "session limit|usage limit|hit your (session|usage) limit" "$LOG"; then
      # Quota hit. If this IS the post-reset retry, give up for today; otherwise
      # drop a marker so the 23:05 retry job re-runs once the quota resets.
      if [[ "${EVENING_IS_RETRY:-}" == "1" ]]; then
        node content-pipeline/automation/notify-failure.mjs "Даже после сброса лимита прогон не прошёл" "$LOG" --gaveup >> "$LOG" 2>&1 || true
      else
        touch "$RETRY_MARKER"
        node content-pipeline/automation/notify-failure.mjs "Лимит Claude исчерпан на вечернем прогоне" "$LOG" --retry >> "$LOG" 2>&1 || true
      fi
    else
      # Non-limit failure (transient network / auth 403 / etc.). Arm the 30-min
      # retry: create the marker with attempt count 0 if this is the first failure;
      # a re-touch here must NOT reset a counter retry30.sh already incremented.
      [[ -f "$RETRY30_MARKER" ]] || echo 0 > "$RETRY30_MARKER"
      # Notify only on the first (non-retry) failure — don't spam the bot every 30 min.
      if [[ "${EVENING_IS_RETRY30:-}" != "1" ]]; then
        node content-pipeline/automation/notify-failure.mjs "Вечерний прогон упал (сеть/авторизация?) — включил авто-ретрай каждые 30 мин" "$LOG" >> "$LOG" 2>&1 || true
      fi
    fi
    exit 1
  }
# Success — cancel any pending retries for today (both quota and transient).
rm -f "$RETRY_MARKER" "$RETRY30_MARKER"
echo "=== done $(date) ===" >> "$LOG"
