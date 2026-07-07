#!/bin/zsh
# Evening content run: drafts news articles, deploys staging, sends TG digest.
# Scheduled by launchd (com.xaid.content-evening). Safe to run manually.
set -euo pipefail

export PATH="/opt/homebrew/bin:$HOME/.bun/bin:$HOME/.local/bin:$HOME/.nvm/versions/node/v24.14.0/bin:/usr/local/bin:/usr/bin:/bin"
REPO="/Users/anastasia/Projects/xAID/xaid-landing"
LOG="$REPO/content-pipeline/automation/state/evening-$(date +%Y-%m-%d).log"
cd "$REPO"

echo "=== evening run $(date) ===" >> "$LOG"
claude -p "$(cat content-pipeline/automation/evening-prompt.md)" \
  --permission-mode acceptEdits \
  --settings content-pipeline/automation/claude-settings.json \
  >> "$LOG" 2>&1 \
  || {
    echo "evening run FAILED $(date)" >> "$LOG"
    # Best-effort failure ping so the silence doesn't go unnoticed.
    node content-pipeline/automation/notify-failure.mjs "Вечерний прогон упал — смотри $LOG" >> "$LOG" 2>&1 || true
    exit 1
  }
echo "=== done $(date) ===" >> "$LOG"
