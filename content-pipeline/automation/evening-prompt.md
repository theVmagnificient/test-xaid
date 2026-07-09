You are the unattended evening content run for the xaid-landing repo (you are already in the repo root). Work fully autonomously — no user is available. Follow the root CLAUDE.md and content-pipeline/CLAUDE.md rules exactly (4-file contract, signing hard rule, trailing-slash slugs).

1. Read `content-pipeline/automation/state/pending.json` if it exists. Entries with status "pending" are drafts still awaiting the founder's decision — do NOT re-draft or duplicate their topics, and leave their integration in place.

2. Run the Workflow tool with scriptPath `content-pipeline/workflows/daily-news-pipeline.mjs` (default args) and wait for completion.

2b. Run the Workflow tool with scriptPath `content-pipeline/workflows/evergreen-seo-pipeline.mjs` (default args — it drafts ONE evergreen SEO pillar article from `content-pipeline/keyword-backlog.json`). This article is the guaranteed daily SEO piece: it targets a real searched keyword (DataForSEO-verified volume), unlike the news drafts. It runs even if the news pipeline produced zero survivors — one good SEO article a day is the floor. If its result has `backlogLow: true`, mention in the digest note that the keyword backlog needs replenishing.

3. For every draft produced by EITHER pipeline (gate "ready" or "needs-human"):
   - Copy the draft from `content-pipeline/drafts/<slug>.tsx` to `src/pages/blog/<ComponentName>.tsx`.
   - Add its metadata entry at the TOP of `src/data/blog-posts.ts`, with `date`/`dateIso` set to TODAY (and update the same fields inside the page component to match).
   - Register the importer in `src/routes.tsx`.
   - Add `"/blog/<slug>/"` (trailing slash) to `reactSnap.include` in `package.json`.

4. Make sure `content-pipeline/ledger.json` `seen` has an entry for every news item the pipeline evaluated today (decision: drafted/skipped/rejected per the scoring), so tomorrow's run never re-scores them.

5. Validate: `npx vite build --mode development` must succeed. If one draft breaks the build and you cannot fix it trivially, revert that draft's 4 files, exclude it, and note the failure for the digest.

6. Deploy staging: `vercel --prod --yes`. Then verify each new `https://xaid-landing.vercel.app/blog/<slug>/` returns HTTP 200 to an anonymous curl.

7. Append one object per surviving draft to `content-pipeline/automation/state/pending.json` (create the file with `[]` if missing; never remove existing entries):
   `{ "slug", "title", "component", "gate", "factcheck", "stagingUrl", "note", "topic", "source", "sourceUrl", "date", "status": "pending" }`
   — `note` is a ONE-line summary in Russian of the human judgment call from QA (residualUncertainty), or "" if none; `sourceUrl` is the original news URL used in the ledger `seen` entry. For evergreen drafts use `topic` = the target keyword with its volume/KD (e.g. "teleradiology (2400/мес, KD1) — evergreen pillar"), `source` = "evergreen-seo (keyword backlog)", `sourceUrl` = "".

8. Send the digest: `node content-pipeline/automation/notify.mjs`. Run it even if zero drafts survived (it sends the "empty today" message).

HARD LIMITS — never do any of these in this run:
- NEVER `bun run deploy` (production) — production publishing happens only through the founder-approval poller.
- NEVER `git commit` or `git push` — the publish script commits after approval.
- NEVER edit `content-pipeline/automation/*.mjs` or launchd files.
- If something fails unrecoverably, still try to run notify.mjs so the founder learns tonight's run failed; also append the error to your final output.
