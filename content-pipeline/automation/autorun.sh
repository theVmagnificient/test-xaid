#!/usr/bin/env bash
# Cron entrypoint for the autonomous run ("the brain"). Sets env, then runs autorun.mjs.
# Install (VPS): crontab -e -> 0 16 * * *  /home/xaid/xaid-landing/content-pipeline/automation/autorun.sh
set -uo pipefail
cd /home/xaid/xaid-landing || exit 1

export HOME="${HOME:-/home/xaid}"
export PATH="$HOME/.bun/bin:/usr/local/bin:/usr/bin:/bin"

# Chromium for react-snap prerender (bun skips puppeteer's own download).
CHROME="$(find "$HOME/.cache/ms-playwright" -name chrome -type f 2>/dev/null | head -1)"
export PUPPETEER_EXECUTABLE_PATH="$CHROME"

# Claude subscription token for headless verification.
set -a; . "$HOME/.pipeline-secrets/claude.env"; set +a

STATE="content-pipeline/automation/state"
mkdir -p "$STATE"
LOG="$STATE/autorun-$(date +%F).log"
echo "=== autorun $(date -u +%FT%TZ) ===" >> "$LOG"
node content-pipeline/automation/autorun.mjs >> "$LOG" 2>&1
echo "exit=$? $(date -u +%FT%TZ)" >> "$LOG"
