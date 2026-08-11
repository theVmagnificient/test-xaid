You are the unattended AUTONOMOUS daily run for the xaid-landing repo (you are already in the repo root). No human is available. Follow root CLAUDE.md and content-pipeline/CLAUDE.md exactly: the 4-file contract, the HARD signing rule (xAID NEVER signs — "ready-to-sign", the client's radiologist signs; state it once, don't over-repeat), trailing-slash slugs, no competitor links, and NO invented statistics.

GOAL: produce and integrate exactly ONE fresh, publish-ready article for TODAY ({{TODAY}}), then STOP. Do NOT deploy, do NOT git, do NOT run vercel or any staging.

1. Run the Workflow tool with scriptPath `content-pipeline/workflows/evergreen-seo-pipeline.mjs` (default args) and wait for completion — it drafts one evergreen SEO pillar into `content-pipeline/drafts/`. Then run the Workflow tool with scriptPath `content-pipeline/workflows/daily-news-pipeline.mjs` (default args) and wait — it drafts up to 3 news articles into `content-pipeline/drafts/` and updates `ledger.json` seen. (The Workflow tool is permitted in this run.)

2. From ALL drafts produced today across both pipelines, choose the SINGLE best candidate to publish: require fact-check not failed; prefer gate "ready" with factcheck "pass"; break ties by relevance to xAID (AI CT reporting) and SEO value. If every draft is gate "reject" / fabrication-flagged / has no live-web fact-check, choose NONE.

2b. DISQUALIFIER — competitor airtime (founder rule, 2026-08-11). Never choose a draft whose SUBJECT is a competitor's or competitor-adjacent vendor's partnership, alliance, funding round or product launch (Viz.ai, Aidoc, RapidAI, Annalise, Lunit, Nanox, Gleamer, Blackford, Azra AI, and the like). An article built around someone else's deal gives them the airtime, and it stays disqualified even if every fact in it checks out. Skip it and take the next-best draft; publishing NOTHING is better than publishing one of these. This does NOT restrict neutral market, policy, regulatory, clinical-evidence or workflow topics — a peer-reviewed study is not a vendor announcement.

3. For the chosen draft ONLY, do the full 4-file integration with date = TODAY ({{TODAY}}):
   - copy `content-pipeline/drafts/<slug>.tsx` to `src/pages/blog/<ComponentName>.tsx`,
   - add its metadata entry at the TOP of `src/data/blog-posts.ts` (date/dateIso = {{TODAY}}; update the same fields inside the page component to match),
   - register the importer in `src/routes.tsx`,
   - add `"/blog/<slug>/"` (trailing slash) to `reactSnap.include` in `package.json`.
   Leave ALL OTHER drafts in `content-pipeline/drafts/` un-integrated (do not touch the 4 files for them).

3b. LAYOUT SAFETY for the "key stats" band (a 4-column grid, so each tile is only ~140px wide at 1440px). The visual guard fails the publish on any text wider than its box, and that failure used to stall the whole pipeline:
   - use the shared component — `import KeyStats from '@/components/KeyStats';` then `<KeyStats items={[{ stat, label, sub }, …]} />`. Do NOT copy the raw grid markup out of an older article: the 40 pre-2026-08-11 articles carry inlined copies and must not gain a 41st;
   - keep `stat` short — a number, percentage, ratio or date (`37.1%`, `68.1% vs 50%`, `77,626`, `Aug 5, 2026`). Never a long single word like `Hundreds` or `Nationwide`; write `100s+` or move the idea into `label`;
   - keep `label` under ~28 characters and avoid unbreakable compounds like `Top-comprehensiveness` — prefer `Rated most comprehensive`.

4. Ensure `content-pipeline/ledger.json` "seen" has an entry for every item evaluated today (decision drafted/skipped/rejected) so tomorrow never re-scores them.

5. Validate the build compiles: `npx vite build --mode development` must succeed. If the chosen draft breaks it and you cannot trivially fix, revert that draft's 4 files and pick the next-best draft (or NONE).

6. Write `content-pipeline/automation/state/autorun-pick.json` with EXACTLY this shape (overwrite if present):
   `{"slug":"<slug>","component":"<ComponentName>","title":"<title>","gate":"ready|needs-human","factcheck":"pass|fix-needed","note":"<one-line Russian residual-uncertainty, or empty string>"}`
   If you chose none, write `{"slug":null,"reason":"<short why>"}`.

HARD LIMITS — never in this run: `bun run deploy`, `rsync`, `git commit`, `git push`, `vercel`, or editing `content-pipeline/automation/*.mjs`. Production deploy + an independent final fact-check happen AFTER you, in a separate step. If something fails unrecoverably, still write autorun-pick.json with `{"slug":null,"reason":"..."}` and append the error to your final output.
