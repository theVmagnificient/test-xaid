# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

Package manager: **bun** (lockfile present).

```bash
bun run dev          # Start dev server on port 8080
bun run build        # Production build
bun run build:dev    # Development build (keeps source maps etc.)
bun run lint         # Run ESLint
bun run test         # Run tests once (Vitest)
bun run test:watch   # Run tests in watch mode
bun run guard        # Visual-quality guard: contrast baseline + text-overflow, all pages (run after build, before deploy)
bun run deploy       # Deploy dist/ to /var/www/xaid.ai/ on aurora via rsync (see Deployment below)
```

Run a single test file:
```bash
bunx vitest run src/path/to/file.test.ts
```

## Architecture

This is a single-page marketing website for **xAID** — an AI-powered CT scan analysis product for medical imaging. It is a static React SPA with no backend.

**Routing** (`src/App.tsx` + `src/routes.tsx`): `/` (eager) plus ~33 code-split routes generated from the `routeImporters` map in `src/routes.tsx`, and `*` (404). **To add a page, register its importer in `src/routes.tsx`** — App.tsx generates `<Route>`s from the map. `main.tsx` preloads the current route's chunk before `hydrateRoot` so react-snap HTML hydrates cleanly; don't replace this with plain `React.lazy` in Routes. Navigation and Footer are rendered globally in App.tsx (NOT inside page components); page content is wrapped in `<main id="main-content">` by PageTransitionWrapper.

**Pages:**
- `src/pages/Index.tsx` — Main landing page, renders sections in order: Hero → WhoWeServe → Challenges → Process → Guarantee → Comparison → ReportExample → FAQ → CTA → Contact → LatestFromBlog
- `src/pages/PrivacyPolicy.tsx` — Static privacy policy

**Section components** (`src/components/`): Each section is a self-contained component. Scroll-triggered animations use `IntersectionObserver` with the `.fade-up` / `.fade-up.visible` CSS pattern (defined in `index.css`).

**Contact form** (`src/components/Contact.tsx`): Submits to Formspark (`https://submit-form.com/ADee6zSRu`) with Google reCAPTCHA v2 (invisible variant, `executeAsync` on submit). The widget mounts lazily on first form-field focus — do not make it eager again (it costs ~830KB on homepage load).

**UI components** (`src/components/ui/`): Full shadcn/ui component library — do not edit these manually; use the shadcn CLI if adding new ones.

## Styling

- Dark theme only (near-black `#0D0D0D` background)
- Custom design tokens defined as CSS variables in `src/index.css` under `:root`
- **UNIFIED single brand color** (founder decision 2026-07-03, prototype-anchored): `hsl(228 100% 64%)` = `#476CFF` for EVERYTHING blue — fills with white text, accents on dark, links. `--xaid-blue` and `--xaid-blue-strong` intentionally alias the same value (class names unchanged); hovers = 58%. **Do NOT reintroduce a second blue tone and do not "fix" contrast by darkening/lightening the color** — the founder explicitly accepted the formal contrast debt (~429 axe color-contrast nodes, all in the 3.6–4.5:1 near-miss band; everything else is 0) in exchange for brand unity. 64% is the mathematical equilibrium: white-on-it 4.32, it-on-#0D0D0D 4.50. Never Tailwind `blue-*` (off-brand 217° hue); `#B7C6FF` still allowed for tiny pills on tinted-dark cards. New content rules: on fills prefer ≥15px solid-white text (no white/60–80); avoid tiny brand-blue text on #EBEBEB. Other colors: `xaid-dark`, `xaid-gray`
- Custom utility classes in `index.css`: `.container-xaid`, `.section-padding`, `.heading-hero`, `.heading-section`, `.card-dark`, `.btn-primary`, `.btn-outline`, `.fade-up`
- Font: Poppins (Google Fonts; weights 300/400/500)
- Osano cookie consent widget styles are customized at the bottom of `index.css`

## Path Alias

`@/` maps to `src/` — used throughout for all imports.

## Tests

Tests live in `src/**/*.{test,spec}.{ts,tsx}` and use Vitest + jsdom + `@testing-library/react`. Setup file at `src/test/setup.ts` (includes `matchMedia` polyfill).

## Deployment (for AI agents)

**Production target:** `https://xaid.ai/` — static files served from `/var/www/xaid.ai/` on the `aurora` server.

### To deploy

```bash
bun run build && bun run guard && bun run deploy
```

That's it. The `deploy` script in `package.json` runs:
```
rsync -avr --exclude ".DS_Store" dist/ aurora-xaid-landing-deploy:./
```

### What's actually happening (so you don't get confused if something fails)

- **SSH host alias:** `aurora-xaid-landing-deploy` — defined in `~/.ssh/config.d/ai-diagnostic`. Resolves to `194.247.186.197`, user `xaid_landing_deploy`, identity `~/.ssh/id_ed25519_xaid_landing_deploy` (no passphrase). This alias is **deploy-only**.
- **Server-side lockdown:** The `xaid_landing_deploy` user's `authorized_keys` is wrapped with `command="/usr/bin/rrsync -wo /var/www/xaid.ai/",restrict`. This means:
  - The key can ONLY invoke rsync, write-only, chrooted to `/var/www/xaid.ai/`.
  - You **cannot** `ssh aurora-xaid-landing-deploy` to get a shell — it will refuse with `SSH_ORIGINAL_COMMAND does not run rsync`. Don't try.
  - You **cannot** `rsync` from the server back to local (write-only).
  - The remote path in the rsync command is always relative (`./`) because rrsync has already chrooted to `/var/www/xaid.ai/`. Do not change it to an absolute path like `:/var/www/xaid.ai/` — rrsync will prepend the chroot again and you'll end up writing to `/var/www/xaid.ai/var/www/xaid.ai/`.
- **rsync must be GNU rsync 3.2+**, not Apple's `openrsync`. On macOS, install with `brew install rsync` and ensure `/opt/homebrew/bin` is ahead of `/usr/bin` in `PATH`. Verify with `rsync --version` (should say `rsync version 3.x` with `protocol version 31+`). If you see `openrsync: protocol version 29`, the server will reject the connection.
- The deploy script targets `dist/` directly, so always run `bun run build` first. The build emits the SPA + static assets (including `/og-image.png` and `/favicon.ico` from `public/`).

### If deploy fails

1. **`SSH_ORIGINAL_COMMAND does not run rsync`** → you tried to ssh in directly. Don't. Use the deploy script.
2. **`invalid rsync-command syntax or options`** → you're using Apple's openrsync. Run `which rsync` — if it's `/usr/bin/rsync`, fix your PATH or install brew rsync.
3. **`Permission denied (publickey)`** → the key `~/.ssh/id_ed25519_xaid_landing_deploy` is missing or has wrong perms. It must be `0600`.
4. **Anything needing sudo or write access outside `/var/www/xaid.ai/`** → this user can't do it. That's the point. Use the regular `aurora` host alias (which uses your personal user) for anything administrative — but never bake that into automation.

### Do NOT

- Do not modify the `aurora-xaid-landing-deploy` SSH host block, the server-side `authorized_keys`, or the deploy user's group memberships without explicit user approval. The lockdown is intentional.
- Do not change the deploy script to use `aurora:` (the personal-user alias). That works but bypasses the least-privilege design.

## Notes

- **TypeScript strictness**: `strict`, `noImplicitAny`, and `strictNullChecks` are all `false` intentionally — keep it that way.
- **Spline 3D**: `Hero` renders `<spline-viewer>` web components and lazily injects the viewer script (unpkg, v1.12.61) on idle, homepage only, skipping prerender (NOT reduced-motion — that setting must not remove content; bug 2026-07-03). There is intentionally NO global viewer script in `index.html` and NO `@splinetool/*` npm deps — loading it globally cost every page 636KB/~10s CPU (homepage was Lighthouse 25). Don't re-add either.
- **Analytics**: Google Tag Manager (`GTM-K398M2F6`) is embedded in `index.html`. Do not remove it.
- **Formspark/reCAPTCHA keys**: Both are hardcoded in `Contact.tsx` (public-facing keys, not secrets).
- **lovable-tagger**: Vite plugin only active in dev mode — it instruments components for the Lovable visual editor. Do not remove it.

## Content pipeline (content-pipeline/ — merged from the former sibling "site-poster" repo, 2026-07-03)

The content brain now lives IN this repo under `content-pipeline/` (its own CLAUDE.md there covers article style/structure; the daily workflow script is `content-pipeline/workflows/daily-news-pipeline.mjs`). One repo, one context:

- **Blog articles** are generated by the content pipeline and integrated here via the 4-file contract (see `content-pipeline/CLAUDE.md`): a metadata entry in `src/data/blog-posts.ts`, a page component in `src/pages/blog/`, **a route importer in `src/routes.tsx`** (routes moved out of App.tsx), and a slug in `package.json`'s `reactSnap.include` — **in trailing-slash form** (`/blog/my-post/`), matching all internal links sitewide (the server 301s no-slash → slash; mixed forms make react-snap double-crawl and fail). Helmet rules for new pages: `<Helmet defer={false}>` (plain `<Helmet>` loses the head in prerender), title ≤60 chars, description 120–160 chars, no `og:url` needed (fix-html.mjs sets it to the canonical).
- **`public/sitemap.xml` is auto-generated — never hand-edit it.** `scripts/gen-sitemap.mjs` runs as the first step of `bun run build` and rebuilds the sitemap from `reactSnap.include` (the page list) + `blog-posts.ts` (per-article `dateIso` → `<lastmod>`). So the 4-file contract already keeps the sitemap current; there is no 5th step. The generator fails the build on drift (a routed article missing from `blog-posts.ts`, or vice versa). Bump `STATIC_LASTMOD` in the script only when a static (non-blog) page materially changes.
- **Google Search Console:** the sitemap is submitted once and Google re-crawls it on its own (driven by `<lastmod>`) — do **not** re-submit the sitemap after every article; it does nothing. The one manual step that helps a fresh post index faster is **URL Inspection → Request Indexing** on the new article URL.
- **`content-pipeline/ledger.json` is the shared source of truth for what is published** — read it before creating a new post so you don't duplicate an existing topic/slug. Add new posts there too.
- **`content-pipeline/sources.json`** — the news-source registry the pipeline ingests from.
- **Keyword research uses DataForSEO.** Credentials live in `.env` (`DATAFORSEO_AUTH_B64`, base64 of `login:password`) and are read only by tooling/agents at content-generation time. **They must NEVER be bundled into the site** — do not prefix with `VITE_`, do not reference them in any `src/` file, and keep `.env` gitignored. The static SPA makes no DataForSEO calls at runtime.
- Reusable end-of-article CTA component: `src/components/BlogCTA.tsx`.
- **HARD CLAIM RULE — who signs (legal, founder-flagged 2026-07-03): xAID NEVER signs reports.** The workflow is: AI drafts → xAID's in-house (European) radiologist REVIEWS the preliminary → delivered ready-to-sign → the CLIENT's US reading radiologist reviews and SIGNS the final. Forbidden phrasings in xAID-workflow context: "a radiologist reviews and signs" (ambiguous), "radiologist sign-off: yes", "signed report" as our deliverable. Correct patterns: "ready-to-sign", "your radiologist signs", "in-house review on every preliminary — final signature stays with your reading radiologist". Nuance: for the client side say simply "signs" — do NOT emphasize client-side re-review (undermines the time-saving value prop) and do NOT claim they don't review; established value phrases like "review and sign, not dictate" are fine. Study-context descriptions of published papers may say their readers signed.
- **Quality guard for daily articles**: `bun run guard` (after build) checks every sitemap page for (a) contrast combos not in the accepted baseline (`scripts/guard-baseline.json` — the unified-color debt is blessed there; a broken template or off-brand color turns red with exact location), (b) any structural axe violation, (c) text overflowing its box at 1440px and 390px. Standard-template articles pass without baseline updates. Refresh baseline ONLY after deliberate design changes: `node scripts/guard.mjs --update-baseline`.
