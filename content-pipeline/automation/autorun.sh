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

# Sync with GitHub before generating anything. This box and the founder's laptop
# both rsync a full dist/ into the same web root, and sitemap.xml is overwritten
# whole — so building from a tree that is behind silently drops the other side's
# pages (happened 2026-08-20, in both directions in one day). Pull first so the
# build always reflects everything.
#
# Bail out rather than run stale: a skipped day costs one article, a stale deploy
# costs whatever the other machine shipped. Silence in the daily Telegram report
# is the existing dead-man signal.
# --rebase, not --ff-only: publish.mjs commits here, so this tree legitimately
# carries its own commits between runs.
#
# --autostash because the tree is legitimately dirty between runs too. A run that
# finds no publishable candidate still records "seen" entries in ledger.json, and
# only publish.mjs commits — so on a no-article day those edits sit uncommitted.
# Without autostash the next pull refuses ("You have unstaged changes") and the
# ABORT below turns one quiet day into a permanent stop. That cost 2026-08-23..27.
if ! git pull --rebase --autostash origin main >> "$LOG" 2>&1; then
  echo "ABORT: git pull failed — refusing to build from a possibly stale tree" >> "$LOG"
  exit 1
fi
node content-pipeline/automation/autorun.mjs >> "$LOG" 2>&1
echo "exit=$? $(date -u +%FT%TZ)" >> "$LOG"
