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

// 1. Ledger: mark approved/published.
const ledgerPath = resolve(ROOT, 'content-pipeline/ledger.json');
const ledger = JSON.parse(readFileSync(ledgerPath, 'utf8'));
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

// 2. Build + guard + deploy (guard failure aborts before deploy).
run('bun run build');
run('bun run guard');
run('bun run deploy');

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
