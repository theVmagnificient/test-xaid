// "The brain" v2: autonomous daily FRESH-article run for the 2-week unattended test (2026-07-17).
// Flow: guardrails -> generate + integrate ONE best fresh draft (claude -p; Workflow pipelines run under
//       bypassPermissions; sandboxed by claude-settings.json = no deploy/git/rsync) -> DEEP VERIFY that
//       draft (claude -p, adversarial web fact-check + house audit + auto-fix) -> if CLEAN publish via
//       publish.mjs (build -> guard -> change-set guard -> deploy -> commit) -> daily Telegram report.
// Cap 1/day. Skip on ANY doubt (0/day is fine). No human in the loop.
// Requires env (set by autorun.sh): CLAUDE_CODE_OAUTH_TOKEN, PUPPETEER_EXECUTABLE_PATH.
import { execSync, execFileSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import { resolve } from 'node:path';
import { ROOT, STATE_DIR, loadEnv, tg, readPending, writePending } from './tg.mjs';

const CAP_PER_DAY = 1;
const DEAD_MAN_LIMIT = 2;                 // consecutive failed runs -> HALT + alert
const CHANGESET_MAX = 300;                // deploy aborts only if it would touch MORE files than a normal
                                          // full rebuild (~130: react-snap re-emits every page's HTML +
                                          // Vite rehashes chunks each build). 300 = runaway/drift backstop.
const AUTO = resolve(ROOT, 'content-pipeline/automation');
const SETTINGS = resolve(AUTO, 'claude-settings.json');
const GEN_PROMPT = resolve(AUTO, 'autorun-gen-prompt.md');
const PICK_FILE = resolve(STATE_DIR, 'autorun-pick.json');
const KILL_FILE = resolve(STATE_DIR, 'KILL');       // `touch` on the VPS to stop the loop
const HALT_FILE = resolve(STATE_DIR, 'HALTED');     // set by the dead-man switch
const FAIL_FILE = resolve(STATE_DIR, 'failcount');
const today = new Date().toISOString().slice(0, 10);

if (!existsSync(STATE_DIR)) mkdirSync(STATE_DIR, { recursive: true });
const { token, chatId } = loadEnv();
const report = [];
const say = (m) => { report.push(m); console.log(m); };
const send = async (t) => { try { await tg(token, 'sendMessage', { chat_id: chatId, text: t, disable_web_page_preview: true }); } catch (e) { console.error('tg failed:', e.message); } };
const readFail = () => (existsSync(FAIL_FILE) ? parseInt(readFileSync(FAIL_FILE, 'utf8'), 10) || 0 : 0);
const writeFail = (n) => writeFileSync(FAIL_FILE, String(n));

// One headless claude call, sandboxed. bypassPermissions clears the Workflow review-gate; claude-settings
// still denies deploy/git/rsync as a hard safety net (deny wins). --add-dir limits file access to the repo.
function claude(prompt) {
  execFileSync('claude', ['-p', prompt, '--permission-mode', 'bypassPermissions', '--settings', SETTINGS, '--add-dir', ROOT],
    { cwd: ROOT, encoding: 'utf8', timeout: 70 * 60 * 1000, stdio: ['ignore', 'inherit', 'inherit'] });
}

const firstLine = (e) => String(e?.message || e || '').split('\n')[0].slice(0, 160);

// De-integrate an article (4-file contract + ledger) so the working tree is clean for the next run.
// Used both for a non-CLEAN verdict and for a publish that a gate rejected.
function rollback(slug, why) {
  try {
    execSync(`node content-pipeline/automation/reject.mjs ${slug}`, { cwd: ROOT, stdio: 'inherit' });
    say(`черновик де-интегрирован (${why}) — база остаётся чистой к завтрашнему прогону.`);
  } catch (e) {
    say(`⚠️ reject не отработал (${firstLine(e)}) — дерево может быть грязным, проверь вручную.`);
  }
}

// Presentation-only repair pass after a gate rejection. Deliberately narrow: the article's claims
// were already fact-checked by deepVerify, so this pass must not touch substance, and must never
// re-bless the guard baseline (that would hide a broken template site-wide).
function guardFixPrompt(componentFile) {
  return `The pre-publish visual-quality gate rejected an article. Fix it, changing NOTHING but presentation.

Article file: ${componentFile}

1. Run: bun run build && bun run guard
2. Read the guard output. It reports (a) text OVERFLOW — an element wider than its box at 1440px or 390px, (b) a contrast combination outside the accepted baseline, (c) a structural axe violation.
3. Fix ONLY issues whose location is ${componentFile}, and ONLY by changing layout/markup: add "break-words" to a stat tile whose text overflows, shorten an over-long label, restore a class the standard template uses. The usual cause is a long unbreakable word in a "key stats" tile (e.g. "Top-comprehensiveness", "Hundreds") inside a 4-column grid.
4. HARD LIMITS: never run "--update-baseline"; never edit scripts/guard-baseline.json; never change the article's facts, numbers, claims, headings or meaning; never edit any file other than ${componentFile}; never run any deploy, git or rsync command.
5. Re-run "bun run build && bun run guard". Stop when it passes, or when the only remaining failures are NOT in ${componentFile} — in that case leave them alone and stop.`;
}

function generateAndPick() {
  if (existsSync(PICK_FILE)) rmSync(PICK_FILE);
  claude(readFileSync(GEN_PROMPT, 'utf8').replaceAll('{{TODAY}}', today));
  if (!existsSync(PICK_FILE)) return null;
  try { const p = JSON.parse(readFileSync(PICK_FILE, 'utf8')); return p && p.slug ? p : null; } catch { return null; }
}

function deepVerify(slug, componentFile) {
  const vp = resolve(STATE_DIR, `verdict-${slug}.json`);
  if (existsSync(vp)) rmSync(vp);
  const prompt = `You are the FINAL pre-publish gate for an AUTONOMOUS run of the xAID medical (YMYL) blog. No human will review this before it goes live — be maximally skeptical.

Article file: ${componentFile}

Do ALL of:
1. PROVE live web access first (curl -sI https://doi.org, or a WebFetch). If WebSearch, WebFetch AND curl are all unavailable, verdict MUST be REJECT (reason "no web").
2. Fact-check EVERY statistic, quote, study, author, date and DOI against the cited source and, where possible, the primary literature. Any unsupported / contradicted / unverifiable externally-sourced claim => NOT clean.
3. HARD signing rule: xAID NEVER signs reports. Forbidden in xAID-workflow context: "a radiologist reviews and signs" (as xAID's action), "xAID signs", "signed report" as our deliverable. Correct: "ready-to-sign", the CLIENT's radiologist "signs". Also flag over-repetition (once per article is enough).
4. Competitors: no outbound links to rival AI-vendor sites (Viz.ai, Aidoc, RapidAI, Annalise, Lunit, Nanox, Gleamer, etc.).
5. Structure: <Helmet defer={false}>; exactly 3 application/ld+json blocks; on-page FAQ mirrors the FAQPage JSON-LD; <BlogCTA> present; NO <Footer> import/render; internal links trailing-slash and pointing to slugs present in content-pipeline/ledger.json "published".
6. AUTO-FIX only objectively-verifiable issues directly in the article file with the Edit tool (a misattributed value the source corrects, a signing-phrase fix, a competitor link, a meta-length trim, removing an unverifiable quote). Re-check after fixing. NEVER invent facts; do NOT change the article's substance or topic.
7. You MUST NOT run any deploy, git, or rsync command, and MUST NOT edit any file other than the one article file above.

Then WRITE your verdict as JSON to EXACTLY this path (overwrite if present): ${vp}
Schema: {"verdict":"CLEAN|HOLD|REJECT","summary":"one sentence","unresolved":["..."],"fixesApplied":["..."]}
CLEAN only if every externally-sourced claim is supported AND no signing/competitor/structure problem AND nothing left for a human to judge. Otherwise HOLD (minor/uncertain) or REJECT (fabrication/contradiction/no-web).`;
  try { claude(prompt); } catch (e) { return { verdict: 'REJECT', summary: 'verify process errored: ' + String(e.message || '').slice(0, 140), unresolved: [], fixesApplied: [] }; }
  if (!existsSync(vp)) return { verdict: 'REJECT', summary: 'no verdict file produced', unresolved: [], fixesApplied: [] };
  try { return JSON.parse(readFileSync(vp, 'utf8')); } catch { return { verdict: 'REJECT', summary: 'verdict file not parseable', unresolved: [], fixesApplied: [] }; }
}

async function finish() { writeFail(0); await send(`📋 xAID autorun ${today}\n` + report.join('\n')); }

async function main() {
  if (existsSync(KILL_FILE)) { await send(`⛔️ xAID autorun ${today}: KILL-switch активен — прогон пропущен.`); return; }
  if (existsSync(HALT_FILE)) { await send(`⛔️ xAID autorun ${today}: HALTED (dead-man). Ручной сброс: rm state/HALTED state/failcount.`); return; }

  const pubToday = readPending().filter((p) => p.status === 'published' && String(p.publishedAt || '').startsWith(today)).length;
  if (pubToday >= CAP_PER_DAY) { say(`уже опубликовано сегодня: ${pubToday}/${CAP_PER_DAY} — стоп.`); return finish(); }

  say('генерация свежего драфта (пайплайны news + evergreen)…');
  const pick = generateAndPick();
  if (!pick) { say('сегодня генерация не дала кандидата к публикации (0 — это норм).'); return finish(); }
  say(`кандидат: ${pick.slug} — ${pick.title || ''} (gate ${pick.gate || '?'}, factcheck ${pick.factcheck || '?'})`);
  if (pick.note) say(`нюанс от QA: ${pick.note}`);

  const comp = resolve(ROOT, `src/pages/blog/${pick.component}.tsx`);
  if (!existsSync(comp)) { say(`⚠️ компонент не найден: ${comp} — skip.`); return finish(); }

  const v = deepVerify(pick.slug, comp);
  say(`deep-verify: ${v.verdict} — ${v.summary || ''}`);
  if (v.fixesApplied?.length) say(`авто-фиксы: ${v.fixesApplied.join('; ')}`);

  if (v.verdict !== 'CLEAN') {
    say(`НЕ публикую (${v.verdict}). Нерешённое: ${(v.unresolved || []).join('; ') || '—'}.`);
    rollback(pick.slug, 'reject');
    return finish();
  }

  const pend = readPending();
  if (!pend.find((p) => p.slug === pick.slug)) { pend.push({ slug: pick.slug, title: pick.title || pick.slug, date: today, status: 'pending' }); writePending(pend); }

  const publish = () => execSync(`node content-pipeline/automation/publish.mjs ${pick.slug}`,
    { cwd: ROOT, stdio: 'inherit', env: { ...process.env, CHANGESET_MAX: String(CHANGESET_MAX) } });

  say('публикую: build → guard → change-set guard → deploy…');
  try {
    publish();
  } catch (e1) {
    // A gate (build / guard / change-set) rejected the article. This MUST NOT leave the article
    // integrated: an integrated-but-unpublished article fails every LATER run's guard too, so the
    // dead-man switch was guaranteed to halt the pipeline within two days and it stayed halted
    // until a human intervened (2026-07-29 and again 2026-08-05, ~12 lost days between them).
    // One auto-fix attempt for the mechanical cases (text overflow is the common one), then roll
    // the integration back either way so tomorrow's run starts from a clean tree.
    say(`⚠️ гейт отклонил статью: ${firstLine(e1)}`);
    say('пробую авто-починку вёрстки (1 попытка)…');
    try {
      claude(guardFixPrompt(comp));
      publish();
    } catch (e2) {
      say(`после авто-починки всё ещё не проходит: ${firstLine(e2)}`);
      rollback(pick.slug, 'publish failed');
      throw new Error(`publish gate rejected ${pick.slug}, integration rolled back: ${firstLine(e1)}`);
    }
    say('авто-починка помогла — статья прошла гейты со второй попытки.');
  }
  say(`✅ опубликовано: https://xaid.ai/blog/${pick.slug}/`);
  try { execSync(`node content-pipeline/automation/notify-indexing.mjs ${pick.slug}`, { cwd: ROOT }); } catch { /* best-effort */ }
  return finish();
}

main().catch(async (e) => {
  const n = readFail() + 1; writeFail(n);
  const halted = n >= DEAD_MAN_LIMIT;
  if (halted) writeFileSync(HALT_FILE, `halted ${new Date().toISOString()} after ${n} consecutive failures`);
  await send(`❌ xAID autorun ${today} УПАЛ (${n}/${DEAD_MAN_LIMIT})${halted ? ' — HALTED, дальше не запускается до ручного сброса' : ''}\n${String(e.message || '').slice(0, 400)}\n${report.join('\n')}`);
  process.exit(1);
});
