# Full Site Audit — xaid.ai — 2026-07-02

Method: 4 parallel specialist audits of the LIVE site (34 pages) — visual design (Playwright screenshots 1440px+390px), technical SEO (all 34 pages programmatically), performance+accessibility (Lighthouse, axe-core, bundle analysis), content+functionality (full text extraction, link checks, form inspection). Today's canonical/sitemap/schema fix was independently re-verified: **PASS 34/34**.

Legend: 🔴 critical · 🟡 medium · 🟢 minor. "Owner": code = fixable in this repo; server = needs aurora admin (out of deploy-key scope); decision = needs Anastasia's call.

## 🔴 CRITICAL

| # | Issue | Evidence | Owner |
|---|---|---|---|
| C1 | **Prerender loses Helmet `<head>` on 25/34 pages** — identical default title on 25 pages, homepage description everywhere, **12/17 blog posts have ZERO structured data**. Race between react-snap and react-helmet-async (nondeterministic per route). ~75% of the site competes in search with one title. | 25 pages serve `xAID – Ready-to-Sign AI CT Reports…`; only 9 pages captured their Helmet output | code — extend `scripts/fix-html.mjs` to inject title/description/OG/schema per-route from a data map (same philosophy as canonical fix) |
| C2 | **Homepage Lighthouse Perf 25/100, LCP 23s (mobile).** Spline viewer (636KB, 10.5s CPU) loads on ALL 34 pages though 3D exists only on `/`; three report PNGs = 2.06MB (WebP would be ~300KB); reCAPTCHA loads eagerly (~830KB). | LH: home 25, pricing 56, blog post 78; main-thread 16.6s | code |
| C3 | **"xAID" renders as "XAID"** via CSS `uppercase` — 12 instances on 4 pages (`for-small-hospitals`, `for-outpatient-imaging-centers`, `for-teleradiology-companies` "WITH XAID" ×11; `how-ai-ct-reporting-works` ×1). Violates hard brand rule. Confirmed by 2 independent auditors with screenshots. | `text-…uppercase` on eyebrow labels containing "With xAID" | code |
| C4 | **Mojibake "$500Kâ$650K"** (double-encoded en-dash) live on 2 blog posts, 10 source spots incl. hero stat and JSON-LD. | `CtRadiologyCoverageCosts.tsx` (4), `RadiologistShortage2026.tsx` (6) | code |
| C5 | **llms.txt + pricing.md link to 9 URLs that 404** (7 never-built `/…-alternative` pages, 2 nonexistent blog posts); llms.txt missing the 6 newest posts; both say "Last updated: April 2026". These are AI-crawler entry points. | pricing.md, llms.txt in `public/` | code |
| C6 | **No custom 404**: nginx serves bare "404 Not Found / nginx"; `dist/404.html` exists but `error_page` isn't configured. | any nonexistent URL | **server** |

## 🟡 MEDIUM

| # | Issue | Owner |
|---|---|---|
| M1 | Duplicate meta description/OG/Twitter tags on the 9 "captured" pages (defaults from index.html not removed); `og:url` points at homepage on 25 pages and lacks trailing slash on the rest | code (falls out of C1 fix) |
| M2 | `https://www.xaid.ai/` broken — TLS cert is `CN=git.xaid.ai`, www unreachable over HTTPS | **server** |
| M3 | Stale 2025 site files still live (old `/privacy-policy` no-slash returns 200 with pre-redesign page; `/assets/img/lungs.png` from 2024) — deploy rsync has no `--delete` | **server** (or one-off approved `--delete` sync) |
| M4 | All 606 internal links lack trailing slash → sitewide 301 hop on every click/crawl | code |
| M5 | **Primary CTA buttons fail contrast sitewide** (white on xaid-blue = 3.03:1, need 4.5:1); also `text-white/30`/`white/40` metadata and form placeholders fail | code + light **decision** (button color shade) |
| M6 | Mobile comparison tables (pricing, how-it-works, for-small-hospitals) hide the xAID column behind undiscoverable horizontal scroll — the product column is off-screen at 390px | code |
| M7 | React hydration errors (#418×8, #425, #423) on every page load — react-snap/client mismatch; wasted CPU, content flash risk | code |
| M8 | Cross-page factual contradictions: teleradiology rate ($40–80 vs $40–160 vs $80–350), locum lead time (6–18 mo vs 2–8 wk vs 12+ mo), physician shortage (42,000+ vs 54,100–139,000 in one article), burnout (40% vs 44%), surcharge ($85–330K vs $90–300K), TAT (4–24 vs 1–24 vs 1–12 hrs) | **decision** (pick canonical numbers) + code |
| M9 | Broken comparison cells: "95%" missing → "or we reimburse" dangling (2 posts + 1 page); "95%" duplicated on how-it-works; nonsense "Full report" row value in homepage Comparison "Pathologies covered" | code |
| M10 | Contact form inputs: no labels (placeholder-only, fails a11y), no `name` attributes (hurts autofill); placeholder contrast 2.54:1 | code |
| M11 | HTTP/1.1 only, no brotli, no Cache-Control on HTML (est. ~1.9s savings; deploys may be picked up late) | **server** |
| M12 | No code splitting — every blog post ships the whole 960KB app bundle | code |
| M13 | 7 grammar errors ("in minutes of DICOM receipt", "What does X and Y mean", stray commas, payor/payer mix, near-duplicate checklist items) | code |
| M14 | pricing.md claims not present on the site ("90% no-edit guarantee", "62% more CT throughput") — AI-quotable inconsistency | **decision** + code |
| M15 | No `<main>` landmark / skip link on any page; Osano cookie banner fails contrast and renders in Russian for ru-locale visitors | code (+ **decision** on Osano locale) |
| M16 | No `prefers-reduced-motion` handling (fade-up, hero animations, Spline all animate unconditionally) | code |

## 🟢 MINOR (batch polish)

- Mobile nav menu: no backdrop; duplicate "Book a demo" stack (design F4)
- /privacy-policy/ + dist/404.html carry homepage `<title>` (F5)
- Sample-report image unreadable on mobile (~4px type) — needs lightbox/crop (F6)
- CTA label Title Case on for-teleradiology hero (F7); truncated vendor list on /integrations (F8)
- Stat-card sets differ across the 3 CT pages — confirm intentional (F9)
- Scroll-to-top button visually overlaps FAQ chevrons on mobile (F10)
- Privacy policy ~180 chars/line on desktop (F11)
- Title >65 chars on 5 pages (worst 117); descriptions out of range on 8 pages (worst 333)
- `/200.html`, `/404.html` indexable (X-Robots-Tag noindex would close it) — server
- Single shared og-image for all pages (per-post images = CTR win; needs design)
- Homepage h2→h4 skip; footer heading skip; FAQ buttons missing `aria-expanded` (pattern exists in FAQAccordion)
- Pricing.tsx absolute `https://xaid.ai/#contact-us` href (breaks staging, full reload)
- Reading time overstated on 1 post; H1 casing inconsistent between old/new posts; "grey" vs "gray"; AM/PM style mix; "$80–350" vs "$80–$350"; "Pol Radiol" → *Pol J Radiol*; glossary teaser promises an entry the page lacks
- 3 unused @splinetool npm deps (Hero uses the web component); GA4 possibly double-tagged (GTM + direct gtag) — verify
- unpkg.com is a hard runtime dependency for the viewer — self-host
- Project CLAUDE.md stale: says font Inter (actually Poppins), says reCAPTCHA checkbox (actually invisible v2)

## ✅ Verified clean

Canonical 34/34 · sitemap 34/34 (status, lastmod, completeness) · homepage 3 schemas · one H1 everywhere · real HTTP 404 for bad URLs (no soft-404) · robots.txt/meta robots correct · 0 broken internal links · all DOIs valid · rel=noopener 100% · 0/34 pages overflow @390px · grid/alignment/spacing consistent · CLS≈0 · alt texts present · "2–12 hours" (70×) and "95%" consistent · pilot wording consistent · blog integrity 17=17=17=17 · form works (not submitted) · all 70 CTAs resolve · dates fresh · no literal "XAID" strings (only the CSS cases) · Formspark+reCAPTCHA+GTM event wiring correct.

Screenshots/artifacts: session scratchpad `audit-screens/` (Lighthouse JSONs, axe results, page slices).
