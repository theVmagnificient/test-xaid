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
bun run deploy       # Deploy dist/ to aurora:/var/www/xaid.ai/ via rsync
```

Run a single test file:
```bash
bunx vitest run src/path/to/file.test.ts
```

## Architecture

This is a single-page marketing website for **xAID** — an AI-powered CT scan analysis product for medical imaging. It is a static React SPA with no backend.

**Routing** (`src/App.tsx`): Three routes — `/` (landing page), `/privacy-policy`, and `*` (404). Wrapped with `QueryClientProvider`, `TooltipProvider`, and dual toast providers (shadcn + Sonner).

**Pages:**
- `src/pages/Index.tsx` — Main landing page, renders sections in order: Navigation → Hero → Challenges → Process → Guarantee → Comparison → ReportExample → FAQ → CTA → Contact → Footer
- `src/pages/PrivacyPolicy.tsx` — Static privacy policy

**Section components** (`src/components/`): Each section is a self-contained component. Scroll-triggered animations use `IntersectionObserver` with the `.fade-up` / `.fade-up.visible` CSS pattern (defined in `index.css`).

**Contact form** (`src/components/Contact.tsx`): Submits to Formspark (`https://submit-form.com/ADee6zSRu`) with Google reCAPTCHA v2 (checkbox variant).

**UI components** (`src/components/ui/`): Full shadcn/ui component library — do not edit these manually; use the shadcn CLI if adding new ones.

## Styling

- Dark theme only (near-black `#0D0D0D` background)
- Custom design tokens defined as CSS variables in `src/index.css` under `:root`
- Key custom Tailwind colors: `xaid-blue` (HSL 227 71% 68%), `xaid-dark`, `xaid-gray`
- Custom utility classes in `index.css`: `.container-xaid`, `.section-padding`, `.heading-hero`, `.heading-section`, `.card-dark`, `.btn-primary`, `.btn-outline`, `.fade-up`
- Font: Inter (Google Fonts)
- Osano cookie consent widget styles are customized at the bottom of `index.css`

## Path Alias

`@/` maps to `src/` — used throughout for all imports.

## Tests

Tests live in `src/**/*.{test,spec}.{ts,tsx}` and use Vitest + jsdom + `@testing-library/react`. Setup file at `src/test/setup.ts` (includes `matchMedia` polyfill).

## Notes

- **TypeScript strictness**: `strict`, `noImplicitAny`, and `strictNullChecks` are all `false` intentionally — keep it that way.
- **Spline 3D**: The `Hero` component uses `@splinetool/react-spline` for 3D visuals; the viewer script (v1.12.61) is also loaded globally in `index.html` — both are required.
- **Analytics**: Google Tag Manager (`GTM-K398M2F6`) is embedded in `index.html`. Do not remove it.
- **Formspark/reCAPTCHA keys**: Both are hardcoded in `Contact.tsx` (public-facing keys, not secrets).
- **lovable-tagger**: Vite plugin only active in dev mode — it instruments components for the Lovable visual editor. Do not remove it.
