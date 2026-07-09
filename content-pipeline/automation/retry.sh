#!/bin/zsh
# Post-reset retry for the evening run. Fires at 23:05 (launchd), but only
# actually re-runs the pipeline if today's 18:00 run failed on the Claude
# usage limit — i.e. a dated retry marker is present. Any other outcome
# (success, or a non-limit failure) leaves no marker and this is a no-op.
set -euo pipefail

export PATH="/opt/homebrew/bin:$HOME/.bun/bin:$HOME/.local/bin:$HOME/.nvm/versions/node/v24.14.0/bin:/usr/local/bin:/usr/bin:/bin"
REPO="/Users/anastasia/Projects/xAID/xaid-landing"
STATE="$REPO/content-pipeline/automation/state"
MARKER="$STATE/retry-$(date +%Y-%m-%d).marker"

# Drop stale markers from previous days so a past failure never triggers a run.
find "$STATE" -name 'retry-*.marker' ! -name "retry-$(date +%Y-%m-%d).marker" -delete 2>/dev/null || true

[[ -f "$MARKER" ]] || exit 0   # nothing to retry today
rm -f "$MARKER"                # consume it — retry.sh runs the evening job once

export EVENING_IS_RETRY=1
exec /bin/zsh "$REPO/content-pipeline/automation/evening.sh"
