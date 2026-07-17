// "The brain": autonomous daily run-wrapper for the 2-week unattended test (added 2026-07-17).
// Flow: guardrails -> pick candidate (seed-queue first, else fresh pending) -> DEEP VERIFY (sandboxed
//       claude, web fact-check + house-rule audit + auto-fix) -> if CLEAN publish (deterministic
//       publish.mjs: guard + change-set gated) -> daily Telegram report.
// Publishes at most CAP_PER_DAY. Skips on ANY doubt (0/day is fine). No human in the loop.
// Requires env (set by autorun.sh): CLAUDE_CODE_OAUTH_TOKEN, PUPPETEER_EXECUTABLE_PATH.
// Reuses tg.mjs + publish.mjs. Deploy stays deterministic + guard-gated in publish.mjs.
import { execSync, execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { ROOT, STATE_DIR, loadEnv, tg, readPending, writePending } from './tg.mjs';

const CAP_PER_DAY = 1;
const DEAD_MAN_LIMIT = 2;              // consecutive failed runs -> HALT + alert
const CHANGESET_MAX = 40;              // deploy aborts if more files would change (drift/bug guard)
const AUTO = resolve(ROOT, 'content-pipeline/automation');
const SEED_FILE = resolve(AUTO, 'seed-queue.json');
const LEDGER = resolve(ROOT, 'content-pipeline/ledger.json');
const KILL_FILE = resolve(STATE_DIR, 'KILL');       // `touch` this on the VPS to stop the loop
const HALT_FILE = resolve(STATE_DIR, 'HALTED');     // set automatically by the dead-man switch
const FAIL_FILE = resolve(STATE_DIR, 'failcount');
const today = new Date().toISOString().slice(0, 10);

if (!existsSync(STATE_DIR)) mkdirSync(STATE_DIR, { recursive: true });
const { token, chatId } = loadEnv();
const report = [];
const say = (m) => { report.push(m); console.log(m); };
const send = async (text) => { try { await tg(token, 'sendMessage', { chat_id: chatId, text, disable_web_page_preview: true }); } catch (e) { console.error('tg failed:', e.message); } };
const readFail = () => (existsSync(FAIL_FILE) ? parseInt(readFileSync(FAIL_FILE, 'utf8'), 10) || 0 : 0);
const writeFail = (n) => writeFileSync(FAIL_FILE, String(n));
const sh = (cmd, opts = {}) => execSync(cmd, { cwd: ROOT, encoding: 'utf8', timeout: 20 * 60 * 1000, ...opts });

// ---- deep verification via a SANDBOXED claude run (no deploy/git allowed; writes a verdict file) ----
function deepVerify(slug, componentFile) {
  const verdictPath = resolve(STATE_DIR, `verdict-${slug}.json`);
  if (existsSync(verdictPath)) rmSync(verdictPath);
  const prompt = `You are the FINAL pre-publish gate for an AUTONOMOUS run of the xAID medical (YMYL) blog. No human will review this before it goes live — be maximally skeptical.

Article file: ${componentFile}

Do ALL of:
1. PROVE live web access first (curl -sI https://doi.org, or a WebFetch). If WebSearch, WebFetch AND curl are all unavailable, verdict MUST be REJECT (reason "no web").
2. Fact-check EVERY statistic, quote, study, author, date and DOI against the cited source and, where possible, the primary literature. Any unsupported / contradicted / unverifiable externally-sourced claim => NOT clean.
3. HARD signing rule: xAID NEVER signs reports. Forbidden in xAID-workflow context: "a radiologist reviews and signs" (as xAID's action), "xAID signs", "signed report" as our deliverable. Correct: "ready-to-sign", the CLIENT's radiologist "signs". Also do not over-repeat the ready-to-sign point (once per article is enough).
4. Competitors: no outbound links to rival AI-vendor sites (Viz.ai, Aidoc, RapidAI, Annalise, Lunit, Nanox, Gleamer, etc.).
5. Structure: <Helmet defer={false}>; exactly 3 application/ld+json blocks; on-page FAQ mirrors the FAQPage JSON-LD; <BlogCTA> present; NO <Footer> import/render; internal links trailing-slash and pointing to slugs present in content-pipeline/ledger.json "published".
6. AUTO-FIX only objectively-verifiable issues directly in the article file with the Edit tool (a misattributed value the source corrects, a signing-phrase fix, a competitor link, a meta-length trim, removing an unverifiable quote). Re-check after fixing. NEVER invent facts; do NOT change the article's substance or its topic.
7. You MUST NOT run any deploy, git, or rsync command, and MUST NOT edit any file other than the one article file above.

Then WRITE your verdict as JSON to EXACTLY this path (overwrite if present): ${verdictPath}
Schema: {"verdict":"CLEAN|HOLD|REJECT","summary":"one sentence","unresolved":["..."],"fixesApplied":["..."]}
CLEAN only if every externally-sourced claim is supported AND no signing/competitor/structure problem AND nothing left for a human to judge. Otherwise HOLD (minor/uncertain) or REJECT (fabrication/contradiction/no-web).`;

  try {
    // bypassPermissions = run tools unattended. The prompt forbids deploy/git; the real deploy is done
    // separately by publish.mjs, never here. --add-dir limits file access to the repo.
    execFileSync('claude', ['-p', prompt, '--permission-mode', 'bypassPermissions', '--add-dir', ROOT],
      { cwd: ROOT, encoding: 'utf8', timeout: 25 * 60 * 1000, stdio: ['ignore', 'inherit', 'inherit'] });
  } catch (e) {
    return { verdict: 'REJECT', summary: 'verify process errored: ' + String(e.message || '').slice(0, 140), unresolved: [], fixesApplied: [] };
  }
  if (!existsSync(verdictPath)) return { verdict: 'REJECT', summary: 'no verdict file produced', unresolved: [], fixesApplied: [] };
  try { return JSON.parse(readFileSync(verdictPath, 'utf8')); }
  catch { return { verdict: 'REJECT', summary: 'verdict file not parseable', unresolved: [], fixesApplied: [] }; }
}

async function finish() {
  writeFail(0);
  await send(`📋 xAID autorun ${today}\n` + report.join('\n'));
}

async function main() {
  if (existsSync(KILL_FILE)) { await send(`⛔️ xAID autorun ${today}: KILL-switch активен — прогон пропущен.`); return; }
  if (existsSync(HALT_FILE)) { await send(`⛔️ xAID autorun ${today}: HALTED (dead-man). Нужен ручной сброс: rm state/HALTED state/failcount.`); return; }

  const pubToday = readPending().filter((p) => p.status === 'published' && String(p.publishedAt || '').startsWith(today)).length;
  if (pubToday >= CAP_PER_DAY) { say(`уже опубликовано сегодня: ${pubToday}/${CAP_PER_DAY} — стоп.`); return finish(); }

  const seed = JSON.parse(readFileSync(SEED_FILE, 'utf8'));
  const rejected = new Set((seed.rejected || []).map((r) => r.slug));
  const ledger = JSON.parse(readFileSync(LEDGER, 'utf8'));
  const published = new Set(ledger.published.map((p) => p.slug));
  const next = (seed.queue || []).find((q) => !published.has(q.slug) && !rejected.has(q.slug));
  if (!next) { say('seed-очередь исчерпана; сегодня без публикации (fresh-генерация будет добавлена в следующей итерации мозга).'); return finish(); }

  say(`кандидат: ${next.slug} — ${next.title}`);
  const comp = resolve(ROOT, `src/pages/blog/${next.component}.tsx`);
  if (!existsSync(comp)) { say(`⚠️ компонент не найден: ${comp} — skip.`); return finish(); }

  let verdict;
  if (next.preVerified) { verdict = { verdict: 'CLEAN', summary: 'pre-verified by Claude', unresolved: [], fixesApplied: [] }; say('preVerified — пропускаю повторный веб-чек.'); }
  else { verdict = deepVerify(next.slug, comp); say(`verdict: ${verdict.verdict} — ${verdict.summary}`); if (verdict.fixesApplied?.length) say(`авто-фиксы: ${verdict.fixesApplied.join('; ')}`); }

  if (verdict.verdict !== 'CLEAN') {
    say(`НЕ публикую (${verdict.verdict}). Нерешённое: ${(verdict.unresolved || []).join('; ') || '—'}. Оставляю в очереди.`);
    return finish();
  }

  // publish.mjs needs the slug in pending.json with status 'pending'
  const pending = readPending();
  if (!pending.find((p) => p.slug === next.slug)) { pending.push({ slug: next.slug, title: next.title, date: today, status: 'pending' }); writePending(pending); }

  say('публикую: build → guard → change-set guard → deploy…');
  sh(`node content-pipeline/automation/publish.mjs ${next.slug}`, { stdio: 'inherit', env: { ...process.env, CHANGESET_MAX: String(CHANGESET_MAX) } });
  say(`✅ опубликовано: https://xaid.ai/blog/${next.slug}/`);
  try { sh(`node content-pipeline/automation/notify-indexing.mjs ${next.slug}`); } catch { /* indexing reminder is best-effort */ }
  return finish();
}

main().catch(async (e) => {
  const n = readFail() + 1; writeFail(n);
  const halted = n >= DEAD_MAN_LIMIT;
  if (halted) writeFileSync(HALT_FILE, `halted ${new Date().toISOString()} after ${n} consecutive failures`);
  await send(`❌ xAID autorun ${today} УПАЛ (${n}/${DEAD_MAN_LIMIT})${halted ? ' — HALTED, дальше не запускается до ручного сброса' : ''}\n${String(e.message || '').slice(0, 400)}\n${report.join('\n')}`);
  process.exit(1);
});
