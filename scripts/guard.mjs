#!/usr/bin/env node
// Visual-quality guard: contrast (axe-core) + text-overflow across every page
// in the sitemap. Designed for a site with a founder-ACCEPTED contrast debt
// (~430 near-miss nodes from the unified #476CFF brand color, 2026-07-03):
// instead of counting violations, it compares against a BASELINE of accepted
// color COMBINATIONS, so daily blog posts built from standard templates stay
// green, while anything genuinely new turns red:
//   🔴 a color pair not in the baseline (broken template, off-brand color)
//   🔴 any non-contrast axe violation (structure, ARIA, forms — baseline is zero)
//   🔴 text overflowing its box, or horizontal page scroll (1440px and 390px)
//
// Usage:
//   node scripts/guard.mjs                    # check dist/ against baseline
//   node scripts/guard.mjs --update-baseline  # re-bless current state (after a
//                                             # DELIBERATE design change only)
//
// Requires a fresh `bun run build` (serves ./dist locally). Deploy flow:
//   bun run build && bun run guard && bun run deploy

import { createServer } from 'node:http';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, extname, dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { chromium } from 'playwright';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dist = join(root, 'dist');
const BASELINE_PATH = join(__dirname, 'guard-baseline.json');
const UPDATE = process.argv.includes('--update-baseline');
const PORT = 4977;

const MIME = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.svg': 'image/svg+xml', '.ico': 'image/x-icon', '.xml': 'application/xml', '.txt': 'text/plain', '.json': 'application/json', '.md': 'text/plain' };

function serveDist() {
  return new Promise((ok) => {
    const srv = createServer((req, res) => {
      let p = decodeURIComponent(new URL(req.url, 'http://x').pathname);
      if (p.endsWith('/')) p += 'index.html';
      const file = join(dist, p);
      try {
        const body = readFileSync(file);
        res.writeHead(200, { 'content-type': MIME[extname(file)] ?? 'application/octet-stream' });
        res.end(body);
      } catch {
        res.writeHead(404); res.end('not found');
      }
    });
    srv.listen(PORT, () => ok(srv));
  });
}

// Quantize to tolerate ±rounding in alpha-composited backgrounds
const quant = (hex) => {
  const m = (hex || '').match(/[0-9a-f]{2}/gi);
  if (!m || m.length < 3) return hex;
  return '#' + m.slice(0, 3).map((c) => (Math.round(parseInt(c, 16) / 8) * 8).toString(16).padStart(2, '0')).join('');
};

const urls = readFileSync(join(root, 'public/sitemap.xml'), 'utf8')
  .match(/<loc>([^<]+)<\/loc>/g).map((m) => m.replace(/<\/?loc>/g, '').replace('https://xaid.ai', ''));

// Approval gate: a pipeline article whose ledger status is still "pending-approval"
// must never reach a deployable build (incident 2026-07-03: three pending articles
// were deployed because they were already integrated into the 4-file contract).
const approvalFlags = [];
try {
  const ledger = JSON.parse(readFileSync(join(root, 'content-pipeline/ledger.json'), 'utf8'));
  const pending = new Set((ledger.published ?? []).filter((p) => p.status === 'pending-approval').map((p) => p.slug));
  const known = new Set((ledger.published ?? []).map((p) => p.slug));
  for (const u of urls) {
    if (!u.startsWith('/blog/') || u === '/blog/') continue;
    const slug = u.replace(/^\/blog\//, '').replace(/\/$/, '');
    if (pending.has(slug)) approvalFlags.push(`PENDING-APPROVAL  ${u}  — ledger says this article is not approved yet; get founder approval (flip ledger status) or pull it from the 4-file contract before deploying`);
    else if (!known.has(slug)) approvalFlags.push(`NOT-IN-LEDGER  ${u}  — article is integrated but absent from content-pipeline/ledger.json; register it (and get approval) before deploying`);
  }
} catch { /* ledger optional */ }

const axeSource = readFileSync(join(root, 'node_modules/axe-core/axe.min.js'), 'utf8');

const CALM_CSS = '.osano-cm-window{display:none!important} .fade-up{opacity:1!important;transform:none!important;transition:none!important} *{animation:none!important} html{scroll-behavior:auto!important}';

async function scrollThrough(page) {
  await page.evaluate(async () => {
    for (let y = 0; y < document.body.scrollHeight; y += 700) { window.scrollTo(0, y); await new Promise((r) => setTimeout(r, 25)); }
  });
  await page.waitForTimeout(150);
}

const OVERFLOW_JS = () => {
  const out = [];
  if (document.documentElement.scrollWidth > window.innerWidth + 1) {
    out.push({ kind: 'PAGE-HSCROLL', by: document.documentElement.scrollWidth - window.innerWidth, html: '' });
  }
  for (const el of document.querySelectorAll('body *')) {
    if (el.tagName === 'SPLINE-VIEWER' || el.closest('spline-viewer')) continue;
    if (el.closest('.table-scroll') || el.closest('[class*="overflow-x-auto"]')) continue;
    if (el.closest('[class*="osano"]')) continue;
    const cs = getComputedStyle(el);
    if (cs.display === 'none' || cs.visibility === 'hidden' || cs.overflowX !== 'visible') continue;
    const over = el.scrollWidth - el.clientWidth;
    if (over <= 3) continue;
    // Flag the element that OWNS the overflowing text: either direct text nodes,
    // or an inline(-block) text child wider than this container (span-in-div case).
    const ownText = [...el.childNodes].some((n) => n.nodeType === 3 && n.textContent.trim().length > 0);
    const inlineKidOverflow = [...el.children].some((k) => {
      const kd = getComputedStyle(k).display;
      return kd.startsWith('inline') && k.textContent.trim().length > 0 && k.getBoundingClientRect().width > el.clientWidth + 3;
    });
    if (!ownText && !inlineKidOverflow) continue;
    const r = el.getBoundingClientRect();
    if (r.width === 0 || r.height === 0) continue;
    out.push({ kind: 'TEXT-OVERFLOW', by: over, html: (el.outerHTML || '').slice(0, 110).replace(/\s+/g, ' ') });
  }
  return out;
};

const server = await serveDist();
const browser = await chromium.launch();

const contrastCombos = {};        // key -> {ratio, example, count}
const redFlags = [];              // hard failures
let acceptedCount = 0;

const baseline = !UPDATE && existsSync(BASELINE_PATH)
  ? JSON.parse(readFileSync(BASELINE_PATH, 'utf8'))
  : null;
if (!UPDATE && !baseline) {
  console.error('guard: no baseline found — run with --update-baseline first.');
  process.exit(2);
}

for (const [vpName, vp, runAxe] of [['desktop', { width: 1440, height: 900 }, true], ['mobile', { width: 390, height: 844 }, false]]) {
  const page = await browser.newPage({ viewport: vp });
  for (const u of urls) {
    await page.goto(`http://localhost:${PORT}${u}`, { waitUntil: 'networkidle' });
    await page.addStyleTag({ content: CALM_CSS });
    await scrollThrough(page);

    for (const f of await page.evaluate(OVERFLOW_JS)) {
      redFlags.push(`OVERFLOW  ${vpName} ${u}  +${f.by}px  ${f.html || '(page hscroll)'}`);
    }

    if (runAxe) {
      await page.addScriptTag({ content: axeSource });
      const res = await page.evaluate(() => axe.run(document, { runOnly: ['wcag2a', 'wcag2aa'] }));
      for (const v of res.violations) for (const n of v.nodes) {
        if (v.id !== 'color-contrast') {
          redFlags.push(`AXE:${v.id}  ${u}  ${n.html.slice(0, 90).replace(/\s+/g, ' ')}`);
          continue;
        }
        const d = (n.any[0] && n.any[0].data) || {};
        const key = quant(d.fgColor) + '|' + quant(d.bgColor);
        const ratio = d.contrastRatio ?? null;
        if (!contrastCombos[key]) contrastCombos[key] = { ratio, example: `${u} :: ${n.html.slice(0, 80).replace(/\s+/g, ' ')}`, count: 0 };
        contrastCombos[key].count++;
        if (baseline) {
          if (baseline.acceptedContrastCombos[key]) acceptedCount++;
          else redFlags.push(`NEW-CONTRAST-COMBO  ${key}  ratio=${ratio}  ${u}  ${n.html.slice(0, 80).replace(/\s+/g, ' ')}`);
        }
      }
    }
  }
  await page.close();
}
await browser.close();
server.close();

if (UPDATE) {
  const accepted = {};
  for (const [k, v] of Object.entries(contrastCombos)) accepted[k] = { ratio: v.ratio, example: v.example, count: v.count };
  writeFileSync(BASELINE_PATH, JSON.stringify({
    note: 'Accepted contrast combos for the unified #476CFF brand color (founder decision 2026-07-03). Regenerate ONLY after a deliberate design change: node scripts/guard.mjs --update-baseline',
    generatedAt: new Date().toISOString(),
    pages: urls.length,
    acceptedContrastCombos: accepted,
  }, null, 2) + '\n');
  const nodes = Object.values(contrastCombos).reduce((s, v) => s + v.count, 0);
  console.log(`guard: baseline written — ${Object.keys(contrastCombos).length} accepted combos (${nodes} nodes) across ${urls.length} pages.`);
  if (redFlags.length) {
    console.log(`guard: NOTE — ${redFlags.length} non-combo issues exist right now (overflow / non-contrast axe). They are NOT baselined:`);
    for (const f of redFlags) console.log('  ' + f);
    process.exit(1);
  }
  process.exit(0);
}

redFlags.unshift(...approvalFlags);
if (redFlags.length) {
  console.error(`\n🔴 GUARD FAILED — ${redFlags.length} new issue(s) not in the accepted baseline:\n`);
  for (const f of redFlags) console.error('  ' + f);
  console.error('\nFix the issue(s), or — ONLY for a deliberate design change — refresh the baseline with --update-baseline.');
  process.exit(1);
}
console.log(`✅ guard: clean. ${urls.length} pages × 2 viewports; ${acceptedCount} nodes matched the accepted baseline; 0 new combos; 0 overflow; 0 structural axe issues.`);
