// Refuses to deploy a build that would drop pages already live on production.
//
// Two machines rsync a full `dist/` into the same web root: this laptop and the
// pipeline VPS. Neither passes --delete, so stale HTML lingers, but sitemap.xml
// is overwritten wholesale — so a machine building from a tree that is behind the
// other silently drops the other's articles from the sitemap. That happened on
// 2026-08-20: a deploy from here cut 8 VPS articles out of the sitemap, and the
// VPS cron then overwrote a day of copy edits. Nothing conflicted in git; the
// trees had simply diverged.
//
// So: compare the sitemap we are about to ship against the one currently served.
// Any live URL missing from the new build means this tree is stale — stop.
//
// Run `git pull` (or sync the other machine) and rebuild. To deploy a genuine
// page removal, set ALLOW_SITEMAP_SHRINK=1.

import { readFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const LIVE_SITEMAP = 'https://xaid.ai/sitemap.xml';
const TIMEOUT_MS = 20000;

const locs = (xml) => new Set([...xml.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1].trim()));

let localXml;
try {
  localXml = readFileSync(resolve(root, 'dist/sitemap.xml'), 'utf8');
} catch {
  console.error('[predeploy] dist/sitemap.xml not found — run `bun run build` first.');
  process.exit(1);
}
const local = locs(localXml);

// The live sitemap is the only cheap read-back we have: the deploy key is
// write-only, so we cannot list the web root over rsync.
let live;
try {
  const res = await fetch(LIVE_SITEMAP, { signal: AbortSignal.timeout(TIMEOUT_MS) });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  live = locs(await res.text());
} catch (err) {
  // Prod unreachable is not a reason to block a deploy — say so and continue.
  console.warn(`[predeploy] could not read the live sitemap (${err.message}) — skipping the staleness check.`);
  process.exit(0);
}

const dropped = [...live].filter((u) => !local.has(u)).sort();

if (!dropped.length) {
  const added = [...local].filter((u) => !live.has(u)).length;
  console.log(`[predeploy] ok — ${local.size} pages, none of the ${live.size} live pages dropped${added ? `, ${added} new` : ''}.`);
  process.exit(0);
}

if (process.env.ALLOW_SITEMAP_SHRINK === '1') {
  console.warn(`[predeploy] ALLOW_SITEMAP_SHRINK=1 — deploying anyway, dropping ${dropped.length} live page(s):`);
  dropped.forEach((u) => console.warn(`  - ${u}`));
  process.exit(0);
}

console.error(`[predeploy] ABORTED: this build is missing ${dropped.length} page(s) that are live right now.`);
dropped.forEach((u) => console.error(`  - ${u}`));
console.error('\nThis tree is behind the other machine. Deploying would drop these from the sitemap.');
console.error('Fix: sync the trees (git pull / push to the VPS), rebuild, then deploy.');
console.error('If the removal is intentional: ALLOW_SITEMAP_SHRINK=1 bun run deploy');
process.exit(1);
