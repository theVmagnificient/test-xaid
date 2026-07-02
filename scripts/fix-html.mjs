// Post-build HTML normalizer. Runs as the LAST step of `bun run build`, after
// react-snap has prerendered every route into dist/<route>/index.html.
//
// It makes canonical tags a single, deterministic, build-time concern instead of
// scattering them across ~30 Helmet components + a static index.html template
// (which produced duplicate/conflicting canonicals on every subpage). For each
// prerendered page it:
//   1. strips any pre-existing canonical tag(s), then
//   2. inserts exactly one self-referential canonical in the trailing-slash form
//      the server actually serves (xaid.ai 301-redirects /page -> /page/).
//
// It also injects the homepage JSON-LD (Organization/SoftwareApplication/FAQ)
// into dist/index.html, because react-snap does not capture Helmet <head> output
// for the root "/" route. Schemas live in src/data/homepageSchema.json — one
// source of truth, no duplication with any React component.

import { readFileSync, writeFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve, relative, join, sep } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const dist = resolve(root, 'dist');
const ORIGIN = 'https://xaid.ai';

const CANONICAL_RE = /\s*<link\b[^>]*\brel=(["'])canonical\1[^>]*>/gi;

// Collect every prerendered page (index.html files only — skip 200.html/404.html).
function findIndexHtml(dir, acc = []) {
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) findIndexHtml(full, acc);
    else if (entry.name === 'index.html') acc.push(full);
  }
  return acc;
}

// dist/index.html -> "/", dist/pricing/index.html -> "/pricing/", etc.
function canonicalPathFor(file) {
  const dir = dirname(relative(dist, file)); // "." | "pricing" | "blog/foo"
  if (dir === '.') return '/';
  return '/' + dir.split(sep).join('/') + '/';
}

const schemas = JSON.parse(readFileSync(resolve(root, 'src/data/homepageSchema.json'), 'utf8'));
const schemaTags = schemas
  .map((s) => `<script type="application/ld+json">${JSON.stringify(s)}</script>`)
  .join('');

const files = findIndexHtml(dist);
if (files.length === 0) {
  console.error('[fix-html] No index.html files found in dist — did react-snap run? Aborting.');
  process.exit(1);
}

// Remove template-default meta tags that a page's Helmet output supersedes.
// A tag is "default" when it lacks data-rh="true"; for every (property|name) key
// that has a data-rh version on the page, the default duplicate is dropped —
// otherwise crawlers see two conflicting descriptions/og:titles per page.
function dedupeMeta(html) {
  const metaRe = /<meta\b[^>]*>/gi;
  const keyOf = (tag) => {
    const m = tag.match(/\b(?:property|name)=(["'])([^"']+)\1/i);
    return m ? m[2].toLowerCase() : null;
  };
  const helmetKeys = new Set();
  for (const m of html.match(metaRe) ?? []) {
    if (/data-rh=(["'])true\1/i.test(m)) {
      const k = keyOf(m);
      if (k) helmetKeys.add(k);
    }
  }
  if (helmetKeys.size === 0) return html;
  return html.replace(metaRe, (tag) => {
    if (/data-rh=(["'])true\1/i.test(tag)) return tag;
    const k = keyOf(tag);
    return k && helmetKeys.has(k) ? '' : tag;
  });
}

const OG_URL_RE = /\s*<meta\b[^>]*\bproperty=(["'])og:url\1[^>]*>/gi;
const TW_URL_RE = /\s*<meta\b[^>]*\bname=(["'])twitter:url\1[^>]*>/gi;

let injectedSchema = false;
for (const file of files) {
  let html = readFileSync(file, 'utf8');
  const path = canonicalPathFor(file);
  const url = ORIGIN + path;
  const canonical = `<link rel="canonical" href="${url}"/>`;

  html = html.replace(CANONICAL_RE, '');
  html = dedupeMeta(html);
  // og:url/twitter:url must equal the canonical — strip all variants, re-inject.
  html = html.replace(OG_URL_RE, '').replace(TW_URL_RE, '');

  let head = canonical + `<meta property="og:url" content="${url}"/><meta name="twitter:url" content="${url}"/>`;
  if (path === '/') {
    head += schemaTags;
    injectedSchema = true;
  }

  if (!html.includes('</head>')) {
    console.error(`[fix-html] No </head> in ${relative(dist, file)} — skipping (unexpected).`);
    continue;
  }
  html = html.replace('</head>', head + '</head>');
  writeFileSync(file, html);
}

// 200.html / 404.html: SPA fallbacks — must never be indexed. 404 also gets a real title.
for (const name of ['200.html', '404.html']) {
  const file = join(dist, name);
  try {
    let html = readFileSync(file, 'utf8');
    html = html.replace(CANONICAL_RE, '');
    html = html.replace(/<meta\b[^>]*name=(["'])robots\1[^>]*>/gi, '');
    if (name === '404.html') {
      html = html.replace(/<title[^>]*>[^<]*<\/title>/i, '<title>Page not found – xAID</title>');
    }
    html = html.replace('</head>', '<meta name="robots" content="noindex, nofollow"/></head>');
    writeFileSync(file, html);
  } catch {
    console.warn(`[fix-html] ${name} not found — skipped.`);
  }
}

if (!injectedSchema) {
  console.error('[fix-html] dist/index.html was not processed — homepage schema NOT injected. Aborting.');
  process.exit(1);
}

console.log(`[fix-html] normalized canonical on ${files.length} pages; injected ${schemas.length} JSON-LD schemas into homepage.`);
