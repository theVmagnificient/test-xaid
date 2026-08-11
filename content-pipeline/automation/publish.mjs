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
if (!ledger.published.some((p) => p.slug === slug)) {
  ledger.published.push({
    slug,
    topic: entry.topic || entry.title,
    source: entry.source || '',
    date: entry.date,
    approved: `${today} founder-approved via telegram bot`,
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

  // 2b. Change-set guard (opt-in via CHANGESET_MAX; used by the autonomous run). A normal one-article
  // publish transfers only a handful of files. If a deploy would touch many more, that signals repo/prod
  // drift or a broken build — abort BEFORE overwriting the live site.
  const maxChanged = parseInt(process.env.CHANGESET_MAX || '0', 10);
  if (maxChanged > 0) {
    const dry = execSync(
      'rsync -rln -i --no-perms --no-times --no-owner --no-group --exclude ".DS_Store" dist/ aurora-xaid-landing-deploy:./',
      { cwd: ROOT, encoding: 'utf8', timeout: 5 * 60 * 1000 }
    );
    const changed = dry.split('\n').filter((l) => /^[<>]f/.test(l)); // files that would transfer
    console.log(`[change-set] ${changed.length} file(s) would deploy (cap ${maxChanged}):`);
    changed.slice(0, 60).forEach((l) => console.log('  ' + l));
    if (changed.length > maxChanged) {
      throw new Error(`change-set guard: ${changed.length} files would change (> ${maxChanged}) — aborting deploy (possible drift / build issue).`);
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

// 4. Mark done.
entry.status = 'published';
entry.publishedAt = new Date().toISOString();
writePending(pending);
console.log(`published: https://xaid.ai/blog/${slug}/`);
