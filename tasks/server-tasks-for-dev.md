# Server tasks for xaid.ai (aurora) — from the 2026-07-02 site audit

These require shell/root on aurora — the locked-down `xaid_landing_deploy` rsync key can't do them.
All code-level audit fixes are already deployed; this is the remaining server-side batch.

## 1. Custom 404 page (nginx) — HIGH

Nonexistent URLs currently return nginx's bare default "404 Not Found" page.
A branded `/404.html` (with correct title + noindex) is already deployed to the web root.

```nginx
# in the xaid.ai server block
error_page 404 /404.html;
```

## 2. www.xaid.ai TLS is broken — HIGH

`https://www.xaid.ai/` presents the cert `CN=git.xaid.ai` → SAN mismatch, connection refused
for users and crawlers. (`http://www.` correctly 301s to the apex.)

- Add `www.xaid.ai` to the cert (SAN) — e.g. `certbot --expand -d xaid.ai -d www.xaid.ai`
- 301 `https://www.xaid.ai/*` → `https://xaid.ai/*`

## 3. HTTP/2 + compression + HTML cache headers — MEDIUM (perf)

Server currently speaks HTTP/1.1 only, no brotli, and HTML is served without Cache-Control
(browsers apply heuristic caching → deploys may be picked up late). Lighthouse estimates
~1.9s savings from modern HTTP alone.

```nginx
listen 443 ssl http2;            # or the http2 on; directive on newer nginx
brotli on; brotli_types text/html text/css application/javascript application/json image/svg+xml;
# (or at least gzip_static / gzip on)

location = /index.html { add_header Cache-Control "no-cache"; }
location / { add_header Cache-Control "no-cache"; }              # HTML
location /assets/ { add_header Cache-Control "public, max-age=31536000, immutable"; }  # already OK, keep
```

Also add charset: `charset utf-8;` (HTML is served as `text/html` without charset).

## 4. Stale pre-redesign files in /var/www/xaid.ai/ — MEDIUM

The deploy rsync has no `--delete`, so July-2025 site files are still live:

- `/var/www/xaid.ai/privacy-policy` (a FILE, no extension) — serves the old 2025 privacy page
  at `https://xaid.ai/privacy-policy` (no trailing slash) with old GTM and no canonical.
  The current page lives at `privacy-policy/index.html`. Delete the stale file.
- `/var/www/xaid.ai/assets/img/` (old images, e.g. `lungs.png`, dated 2024) — delete.
- Old hashed bundles in `/assets/` from previous deploys accumulate; safe to clean anything
  not referenced by the current HTML (or run one supervised `rsync --delete` sync).

Careful: do NOT delete `og-image.png`, `favicon.ico`, `llms.txt`, `pricing.md`, `robots.txt`,
`sitemap.xml` at the root — those are current.

## Verification after the changes

```bash
curl -I  https://xaid.ai/nonexistent-xyz          # → 404 with branded HTML
curl -sI https://www.xaid.ai/ | head -3           # → 301 https://xaid.ai/
curl -sI --http2 https://xaid.ai/ | head -3       # → HTTP/2
curl -sI https://xaid.ai/privacy-policy           # → 301 to /privacy-policy/ (stale file gone)
curl -sI -H "Accept-Encoding: br" https://xaid.ai/assets/<current>.js | grep -i encoding  # → br
```
