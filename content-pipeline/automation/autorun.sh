#!/usr/bin/env bash
# Cron entrypoint for the autonomous run ("the brain"). Sets env, then runs autorun.mjs.
# Install (VPS): crontab -e -> 0 16 * * *  /home/xaid/xaid-landing/content-pipeline/automation/autorun.sh
set -uo pipefail
cd /home/xaid/xaid-landing || exit 1

export HOME="${HOME:-/home/xaid}"
export PATH="$HOME/.bun/bin:/usr/local/bin:/usr/bin:/bin"
# The Workflow tool runs in the background; headless `claude -p` otherwise terminates it after 600s.
# 0 = wait indefinitely for background tasks (the generation pipelines take longer than 10 min).
export CLAUDE_CODE_PRINT_BG_WAIT_CEILING_MS=0

# Chromium for react-snap prerender (bun skips puppeteer's own download).
CHROME="$(find "$HOME/.cache/ms-playwright" -name chrome -type f 2>/dev/null | head -1)"
export PUPPETEER_EXECUTABLE_PATH="$CHROME"

# Claude subscription token for headless verification.
set -a; . "$HOME/.pipeline-secrets/claude.env"; set +a

STATE="content-pipeline/automation/state"
mkdir -p "$STATE"

# Mutual exclusion: never let a cron run and a manual/overlapping run execute together
# (double claude / double deploy). mkdir is atomic.
LOCK="$STATE/autorun.lock"
if ! mkdir "$LOCK" 2>/dev/null; then
  echo "=== autorun SKIPPED $(date -u +%FT%TZ): another run holds the lock ===" >> "$STATE/autorun-$(date +%F).log"
  exit 0
fi
trap 'rmdir "$LOCK" 2>/dev/null' EXIT

LOG="$STATE/autorun-$(date +%F).log"
echo "=== autorun $(date -u +%FT%TZ) ===" >> "$LOG"
node content-pipeline/automation/autorun.mjs >> "$LOG" 2>&1
echo "exit=$? $(date -u +%FT%TZ)" >> "$LOG"
