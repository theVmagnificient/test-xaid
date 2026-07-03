# CLAUDE.md — content-pipeline (formerly the sibling "site-poster" repo; merged 2026-07-03)

This file guides Claude Code when working in this repository.

## What this is

**site-poster** is a (currently greenfield) content-automation tool for the **xAID** marketing
site. Its job is to turn source material into publish-ready blog articles on `xaid.ai`:

1. **LinkedIn → article** — take Kirill's LinkedIn posts and rewrite them into full SEO blog articles.
2. **Trending news → article** — pull trending radiology/AI-healthcare news and turn it into articles.

Both pipelines output into the **same destination**: the blog of the `xaid-landing` site.

> Status: design phase. Architecture not yet decided — do not assume a stack. We are designing
> the two pipelines together, step by step.

## The destination: `xaid-landing` blog (the integration contract)

The target site lives at `the repo root` (sibling dir). It is a **static** Vite + React 18 + TS +
shadcn/ui SPA, dark theme, **no backend**, prerendered at build time with `react-snap`, deployed via
`rsync` to the `aurora` server (`/var/www/xaid.ai/`). Package manager: **bun**. See
`../CLAUDE.md` for full build/deploy details.

**There is no CMS.** Each blog article is hand-coded across **four files**. Any tool that "posts" an
article must produce/modify all four:

1. **Metadata** — append an entry to `src/data/blog-posts.ts` (drives the `/blog` index + listing
   cards). Shape:
   ```ts
   { slug, title, excerpt, date /* "April 28, 2026" */, dateIso /* "2026-04-28" */,
     category, readingTime /* minutes, number */, keywords: string[] }
   ```
   Newest post goes **first** in the array — `blogPosts[0]` is rendered as the featured post.

2. **Article page** — create `src/pages/blog/<PascalCaseName>.tsx`. A self-contained React component,
   ~20–30 KB, with a rigid structure:
   - `<Helmet>` block: `<title>`, meta description, `<link rel="canonical">`, OG + Twitter tags, and
     **three `application/ld+json` schema blocks**: `BreadcrumbList`, `BlogPosting`, and `FAQPage`.
   - Body sections using **fixed Tailwind class patterns** (copy an existing post as the template):
     - Header section: `pt-32 md:pt-40 pb-10`, category pill `bg-xaid-blue/20 text-xaid-blue`, `<h1>`.
     - Optional "key stats" grid on `bg-white/5`.
     - `<article className="section-padding bg-[#EBEBEB]">` → white card `bg-white rounded-2xl`
       with `<h2 className="text-[28px] ...">` headings and `<p className="text-[#444] text-[15px]
       leading-[1.65] font-light mb-4">` body paragraphs (note: article body is **light theme**,
       unlike the rest of the dark site).
   - Ends with `<Footer />`.
   - Canonical URL, OG url, breadcrumb, and BlogPosting `url` all = `https://xaid.ai/blog/<slug>`.

3. **Route** — in `src/App.tsx`: add the `import` and a `<Route path="/blog/<slug>"
   element={<Component />} />` **above** the catch-all `<Route path="*" ...>`.

4. **Prerender** — add `/blog/<slug>` to the `reactSnap.include` array in `package.json`, or the page
   won't be statically generated for SEO/crawlers.

**Reference template:** `src/pages/blog/RadiologistShortage2026.tsx` is a clean, representative
example to clone. The FAQ JSON-LD questions must mirror real `<h2>`/Q&A content on the page.

## Product context (for tone & accuracy)

xAID is an **AI CT reporting** product: AI generates structured CT report drafts that a radiologist
reviews and signs. Audience: outpatient imaging centers, teleradiology companies, radiology groups,
small/community hospitals. Existing blog voice: evidence-led, specific numbers, cites AAMC/ACR/
Medscape, comparison-heavy, B2B, US market. Articles target SEO keywords. Medical claims must be
defensible — no invented statistics.

## Working agreement

- We are in **design phase**. Propose architecture and confirm before building.
- Do not modify `the repo root` without explicit approval — that is the live production site.
- Never invent clinical/statistical claims in generated articles. Source or omit.
