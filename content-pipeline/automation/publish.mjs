// Deterministic production publish of ONE approved article. No LLM involved.
// Usage: node publish.mjs <slug>
// Steps: ledger approve -> bun run build -> bun run guard -> bun run deploy -> git commit.
// The guard remains the mechanical gate: if it fails, nothing is deployed.
import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync } from 'node:fs';
import { resolve } from 'node:path';
import { ROOT, readPending, writePending } from './tg.mjs';

const slug = process.argv[2];
if (!slug) throw new Error('usage: node publish.mjs <slug>');

const pending = readPending();
const entry = pending.find((p) => p.slug === slug);
if (!entry) throw new Error(`slug not in pending.json: ${slug}`);
if (entry.status !== 'pending') throw new Error(`slug already ${entry.status}: ${slug}`);

const today = new Date().toISOString().slice(0, 10);
const run = (cmd) => execSync(cmd, { cwd: ROOT, stdio: 'inherit', timeout: 15 * 60 * 1000 });

// 1. Ledger: mark approved/published. This has to happen BEFORE the guard runs — the guard's
// approval gate red-flags any integrated article that is absent from ledger.published. But it means
// a gate failure would otherwise leave the ledger claiming an article is published when it is not
// (that happened to two articles on 2026-08-05/06). So snapshot it and restore on any failure below.
const ledgerPath = resolve(ROOT, 'content-pipeline/ledger.json');
const ledgerBefore = readFileSync(ledgerPath, 'utf8');
const ledger = JSON.parse(ledgerBefore);
// Upsert, not insert-if-absent: the generator sometimes pre-writes a `status: "pending-approval"`
// entry itself (it carried that over from the old manual flow). Skipping an existing entry left the
// status in place, the guard's approval gate blocked the deploy, and the run failed (2026-10-23).
const approved = `${today} founder-approved via telegram bot`;
const existing = ledger.published.find((p) => p.slug === slug);
if (existing) {
  delete existing.status;
  existing.approved = approved;
  existing.topic ||= entry.topic || entry.title;
  existing.source ||= entry.source || '';
  existing.date ||= entry.date;
} else {
  ledger.published.push({
    slug,
    topic: entry.topic || entry.title,
    source: entry.source || '',
    date: entry.date,
    approved,
  });
}
for (const s of ledger.seen) {
  if (entry.sourceUrl && s.url === entry.sourceUrl) {
    s.decision = `drafted -> ${slug}; PUBLISHED (founder-approved ${today} via telegram bot)`;
  }
}
writeFileSync(ledgerPath, JSON.stringify(ledger, null, 2) + '\n');

// 2. Build + guard + deploy. Any failure here means nothing was deployed, so the ledger claim from
// step 1 has to be undone before we rethrow — otherwise the ledger permanently lists an article that
// is not live, and the guard's NOT-IN-LEDGER / approval accounting drifts out of sync with prod.
try {
  run('bun run build');
  run('bun run guard');

  // 2b. Change-set guard (opt-in via NEW_FILES_MAX; used by the autonomous run). A one-article publish
  // adds exactly one new page to prod. If a deploy would add many more, that signals repo/prod drift or a
  // broken build — abort BEFORE overwriting the live site.
  // Count only NEW non-asset files. Every file "would transfer" (the dry-run has no times or checksums)
  // and every hashed asset under assets/ is renamed each build, so counting those measured the size of
  // the whole site: it grew 2 files per article, crossed the old 300-file cap on 2026-11-13 and halted
  // the pipeline. Pages dropped from the build are caught separately by scripts/predeploy-check.mjs.
  const maxNew = parseInt(process.env.NEW_FILES_MAX || '0', 10);
  if (maxNew > 0) {
    const dry = execSync(
      'rsync -rln -i --no-perms --no-times --no-owner --no-group --exclude ".DS_Store" dist/ aurora-xaid-landing-deploy:./',
      { cwd: ROOT, encoding: 'utf8', timeout: 5 * 60 * 1000 }
    );
    const added = dry.split('\n').filter((l) => /^<f\+{9} /.test(l) && !/^\S+ assets\//.test(l));
    console.log(`[change-set] ${added.length} new non-asset file(s) would deploy (cap ${maxNew}):`);
    added.slice(0, 60).forEach((l) => console.log('  ' + l));
    if (added.length > maxNew) {
      throw new Error(`change-set guard: ${added.length} new non-asset files (> ${maxNew}) — aborting deploy (possible drift / build issue).`);
    }
  }

  run('bun run deploy');
} catch (e) {
  writeFileSync(ledgerPath, ledgerBefore);
  console.error(`[publish] gate failed — ledger restored, ${slug} NOT marked published.`);
  throw e;
}

// 3. Commit the published state.
run('git add -A');
run(
  `git commit -m "Publish founder-approved article: ${slug}" -m "Approved via telegram bot ${today}." -m "Co-Authored-By: Claude Fable 5 <noreply@anthropic.com>"`
);

// 3b. Publish the commit. The laptop deploys the same web root, so GitHub has to
// be the shared truth — a commit that never leaves this box is a tree the other
// machine will overwrite. Non-fatal: the article is already live, and autorun's
// next pull --rebase will carry it.
try {
  run('git push origin main');
} catch {
  console.warn('[publish] git push failed — the article is live but this commit is only local. Push it before the laptop deploys.');
}

// 4. Mark done.
entry.status = 'published';
entry.publishedAt = new Date().toISOString();
writePending(pending);
console.log(`published: https://xaid.ai/blog/${slug}/`);
