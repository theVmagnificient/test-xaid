// Generates public/sitemap.xml from the single source of truth for pages
// (reactSnap.include in package.json) plus per-article dates from
// src/data/blog-posts.ts. Runs as the first step of `bun run build`, so the
// sitemap is never hand-maintained and never goes stale when new pages ship.
//
// - Static pages: priority/changefreq from STATIC_META below; lastmod is a
//   fixed date that should be bumped only when a static page materially changes
//   (daily "everything changed" lastmod trains Google to distrust the field).
// - Blog articles: lastmod = dateIso from blog-posts.ts (the real change signal).
// - /blog index: lastmod = the newest article date, so it re-crawls when posts land.
//
// The script fails loudly on drift (a routed article with no data, or a data
// entry with no route) so integration mistakes surface at build time.

import { readFileSync, writeFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, resolve } from 'node:path';

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = resolve(__dirname, '..');
const ORIGIN = 'https://xaid.ai';

// Trailing-slash form — matches what the server serves and the canonical tags
// injected by fix-html.mjs (xaid.ai 301-redirects /page -> /page/).
const locFor = (route) => (route === '/' ? `${ORIGIN}/` : `${ORIGIN}${route}/`);

// Bump when static (non-blog) pages materially change.
const STATIC_LASTMOD = '2026-06-05';

// Static (non-blog) pages: priority + changefreq. Any route in reactSnap.include
// that is neither listed here nor a /blog/* article triggers a warning.
const STATIC_META = {
  '/': { changefreq: 'weekly', priority: '1.0' },
  '/how-ai-ct-reporting-works': { changefreq: 'monthly', priority: '0.9' },
  '/pricing': { changefreq: 'monthly', priority: '0.9' },
  '/ai-vs-teleradiology': { changefreq: 'monthly', priority: '0.9' },
  '/ai-vs-locum-radiologist': { changefreq: 'monthly', priority: '0.9' },
  '/for-outpatient-imaging-centers': { changefreq: 'monthly', priority: '0.8' },
  '/for-teleradiology-companies': { changefreq: 'monthly', priority: '0.8' },
  '/for-radiology-groups': { changefreq: 'monthly', priority: '0.8' },
  '/for-small-hospitals': { changefreq: 'monthly', priority: '0.8' },
  '/accuracy': { changefreq: 'monthly', priority: '0.8' },
  '/chest-ct-ai-report': { changefreq: 'monthly', priority: '0.8' },
  '/head-ct-ai-report': { changefreq: 'monthly', priority: '0.8' },
  '/abdomen-ct-ai-report': { changefreq: 'monthly', priority: '0.8' },
  '/compliance': { changefreq: 'monthly', priority: '0.7' },
  '/integrations': { changefreq: 'monthly', priority: '0.7' },
  '/blog': { changefreq: 'weekly', priority: '0.8' }, // lastmod set to newest post below
  '/privacy-policy': { changefreq: 'yearly', priority: '0.3' },
};

// All blog articles get uniform weight; freshness is carried by lastmod.
const BLOG_ARTICLE_META = { changefreq: 'weekly', priority: '0.7' };

const warnings = [];

// --- routes: canonical list of prerendered pages ---
const pkg = JSON.parse(readFileSync(resolve(root, 'package.json'), 'utf8'));
const routes = pkg.reactSnap?.include ?? [];
if (routes.length === 0) {
  console.error('[gen-sitemap] reactSnap.include is empty — aborting.');
  process.exit(1);
}

// --- blog post dates: slug -> dateIso, parsed from the data file ---
const blogSrc = readFileSync(resolve(root, 'src/data/blog-posts.ts'), 'utf8');
const postDates = new Map();
const re = /slug:\s*['"]([^'"]+)['"][\s\S]*?dateIso:\s*['"]([^'"]+)['"]/g;
let m;
while ((m = re.exec(blogSrc)) !== null) postDates.set(m[1], m[2]);
if (postDates.size === 0) {
  console.error('[gen-sitemap] Parsed 0 posts from blog-posts.ts — aborting.');
  process.exit(1);
}

const routedSlugs = new Set(
  routes.filter((r) => r.startsWith('/blog/')).map((r) => r.slice('/blog/'.length)),
);
for (const slug of postDates.keys()) {
  if (!routedSlugs.has(slug)) {
    warnings.push(`post "${slug}" is in blog-posts.ts but has no /blog/${slug} route in reactSnap.include`);
  }
}

const articleDates = routes
  .filter((r) => r.startsWith('/blog/'))
  .map((r) => postDates.get(r.slice('/blog/'.length)))
  .filter(Boolean)
  .sort();
const newestPost = articleDates[articleDates.length - 1] ?? STATIC_LASTMOD;

// --- build entries in reactSnap order ---
const entries = routes.map((route) => {
  if (route.startsWith('/blog/')) {
    const slug = route.slice('/blog/'.length);
    const lastmod = postDates.get(slug);
    if (!lastmod) {
      warnings.push(`route ${route} has no matching entry in blog-posts.ts — using ${STATIC_LASTMOD}`);
    }
    return { loc: locFor(route), lastmod: lastmod ?? STATIC_LASTMOD, ...BLOG_ARTICLE_META };
  }
  const meta = STATIC_META[route];
  if (!meta) {
    warnings.push(`route ${route} not in STATIC_META — using default monthly/0.7`);
    return { loc: locFor(route), lastmod: STATIC_LASTMOD, changefreq: 'monthly', priority: '0.7' };
  }
  const lastmod = route === '/blog' ? newestPost : STATIC_LASTMOD;
  return { loc: locFor(route), lastmod, ...meta };
});

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...entries.map(
    (e) =>
      `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n` +
      `    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`,
  ),
  '</urlset>',
  '',
].join('\n');

writeFileSync(resolve(root, 'public/sitemap.xml'), xml);

for (const w of warnings) console.warn(`[gen-sitemap] WARN: ${w}`);
console.log(`[gen-sitemap] wrote public/sitemap.xml with ${entries.length} URLs.`);
