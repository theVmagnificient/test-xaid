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
bun run deploy       # Deploy dist/ to /var/www/xaid.ai/ on aurora via rsync (see Deployment below)
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

## Deployment (for AI agents)

**Production target:** `https://xaid.ai/` — static files served from `/var/www/xaid.ai/` on the `aurora` server.

### To deploy

```bash
bun run build && bun run deploy
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
- **Spline 3D**: The `Hero` component uses `@splinetool/react-spline` for 3D visuals; the viewer script (v1.12.61) is also loaded globally in `index.html` — both are required.
- **Analytics**: Google Tag Manager (`GTM-K398M2F6`) is embedded in `index.html`. Do not remove it.
- **Formspark/reCAPTCHA keys**: Both are hardcoded in `Contact.tsx` (public-facing keys, not secrets).
- **lovable-tagger**: Vite plugin only active in dev mode — it instruments components for the Lovable visual editor. Do not remove it.
