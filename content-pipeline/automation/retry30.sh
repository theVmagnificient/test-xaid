#!/bin/zsh
# 30-minute auto-retry for the evening run, for TRANSIENT failures only
# (network blip / auth 403 / anything that is NOT a Claude usage-limit).
#
# Fires every 30 min (launchd com.xaid.content-evening-retry30, StartInterval).
# It is a no-op unless evening.sh armed it by dropping a dated marker
# (retry-30-YYYY-MM-DD.marker) on a non-limit failure. The marker's contents are
# the number of retries already attempted today; we stop after MAX_RETRIES and
# notify. evening.sh removes the marker on success, which ends the loop.
#
# Usage-limit failures are handled separately by retry.sh (23:05, after reset).
set -euo pipefail

export PATH="/opt/homebrew/bin:$HOME/.bun/bin:$HOME/.local/bin:$HOME/.nvm/versions/node/v24.14.0/bin:/usr/local/bin:/usr/bin:/bin"
REPO="/Users/anastasia/Projects/xAID/xaid-landing"
STATE="$REPO/content-pipeline/automation/state"
MARKER="$STATE/retry-30-$(date +%Y-%m-%d).marker"
LOG="$STATE/evening-$(date +%Y-%m-%d).log"
MAX_RETRIES=6   # ~3h of attempts at 30-min spacing, then give up for today

# Drop stale markers from previous days so a past failure never triggers a run.
find "$STATE" -name 'retry-30-*.marker' ! -name "retry-30-$(date +%Y-%m-%d).marker" -delete 2>/dev/null || true

[[ -f "$MARKER" ]] || exit 0            # nothing to retry today
[[ -d "$STATE/evening.lock" ]] && exit 0 # a run is already in progress — don't stack, don't burn an attempt

count=$(cat "$MARKER" 2>/dev/null || echo 0)
[[ "$count" =~ ^[0-9]+$ ]] || count=0

if (( count >= MAX_RETRIES )); then
  node "$REPO/content-pipeline/automation/notify-failure.mjs" \
    "Авто-ретрай сдался после ${MAX_RETRIES} попыток за сегодня — нужен ручной разбор" \
    "$LOG" --gaveup >> "$LOG" 2>&1 || true
  rm -f "$MARKER"
  exit 0
fi

echo $((count + 1)) > "$MARKER"   # consume one attempt (survives evening.sh re-touch)
export EVENING_IS_RETRY30=1
exec /bin/zsh "$REPO/content-pipeline/automation/evening.sh"
