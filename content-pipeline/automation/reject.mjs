// Deterministic removal of ONE rejected draft from the working tree.
// Usage: node reject.mjs <slug>
// Reverts the 4-file integration (page, blog-posts.ts, routes.tsx, reactSnap)
// and records the rejection in the ledger. Draft stays in content-pipeline/drafts/.
import { readFileSync, writeFileSync, unlinkSync, existsSync } from 'node:fs';
import { resolve } from 'node:path';
import { ROOT, readPending, writePending } from './tg.mjs';

const slug = process.argv[2];
if (!slug) throw new Error('usage: node reject.mjs <slug>');

const pending = readPending();
const entry = pending.find((p) => p.slug === slug);   // may be undefined (the autonomous run integrates without a pending.json entry)

const today = new Date().toISOString().slice(0, 10);

// Resolve the page component name: from pending if present, else from the routes.tsx importer line.
let component = entry?.component;
if (!component) {
  const routesSrc = readFileSync(resolve(ROOT, 'src/routes.tsx'), 'utf8');
  const m = routesSrc.match(new RegExp(`'/blog/${slug}':[^\\n]*?pages/blog/([A-Za-z0-9_]+)`));
  component = m ? m[1] : null;
}

// 1. Delete the page component (if known).
const page = component ? resolve(ROOT, `src/pages/blog/${component}.tsx`) : null;
if (page && existsSync(page)) unlinkSync(page);

// 2. Remove the metadata block from blog-posts.ts (lines from "  {" of the
// entry containing our slug through its matching "  },").
const bpPath = resolve(ROOT, 'src/data/blog-posts.ts');
const lines = readFileSync(bpPath, 'utf8').split('\n');
const slugIdx = lines.findIndex((l) => l.includes(`slug: '${slug}'`));
if (slugIdx !== -1) {
  let start = slugIdx;
  while (start > 0 && lines[start].trim() !== '{') start--;
  let end = slugIdx;
  while (end < lines.length - 1 && lines[end].trim() !== '},') end++;
  lines.splice(start, end - start + 1);
  writeFileSync(bpPath, lines.join('\n'));
}

// 3. Remove the route importer line.
const routesPath = resolve(ROOT, 'src/routes.tsx');
writeFileSync(
  routesPath,
  readFileSync(routesPath, 'utf8')
    .split('\n')
    .filter((l) => !l.includes(`'/blog/${slug}'`))
    .join('\n')
);

// 4. Remove the reactSnap include.
const pkgPath = resolve(ROOT, 'package.json');
const pkg = JSON.parse(readFileSync(pkgPath, 'utf8'));
pkg.reactSnap.include = pkg.reactSnap.include.filter((p) => p !== `/blog/${slug}/`);
writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n');

// 5. Ledger: record the rejection.
const ledgerPath = resolve(ROOT, 'content-pipeline/ledger.json');
const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'));

// 5a. Drop any "published" claim for this slug. publish.mjs has to write the ledger before the guard
// runs (the guard red-flags integrated articles missing from it) and restores it on a gate failure —
// but if that process is killed in between, the claim survives and the ledger lies about what is live.
// We are de-integrating the article, so it is by definition not published.
const phantom = ledger.published.findIndex((p) => p.slug === slug);
if (phantom !== -1) {
  ledger.published.splice(phantom, 1);
  console.log(`ledger: removed stale published entry for ${slug} (article is not live)`);
}

for (const s of ledger.seen) {
  if ((entry?.sourceUrl && s.url === entry.sourceUrl) || (s.decision && s.decision.includes(`-> ${slug}`) && !s.decision.includes('REJECTED'))) {
    s.decision = `drafted -> ${slug}; REJECTED ${today} (autorun deep-verify HOLD/REJECT — draft kept in drafts/)`;
  }
}
writeFileSync(ledgerPath, JSON.stringify(ledger, null, 2) + '\n');

if (entry) {
  entry.status = 'rejected';
  entry.rejectedAt = new Date().toISOString();
  writePending(pending);
}
console.log(`rejected: ${slug} — integration reverted${component ? ' (' + component + ')' : ''}`);
