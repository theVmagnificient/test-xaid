# Server tasks for xaid.ai (aurora)

Updated **2026-08-20**, statuses re-verified against production the same day.

These need shell/root on aurora — the locked-down `xaid_landing_deploy` rsync key can't do them.
All code-level fixes are already deployed; this is the remaining server-side batch.

## Status since the 2026-07-02 audit

| # | Task | Status |
|---|------|--------|
| 1 | Branded 404 page | ✅ done |
| 2 | `www.xaid.ai` TLS | ✅ done |
| 3 | HTTP/2 + brotli + HTML cache headers | ❌ open — **do this first** |
| 4 | Stale pre-redesign files | ⚠️ partly done |
| 5 | `/xaid-free` returns 404 to real traffic | 🆕 new |


Tasks 1 and 2 verified fixed: nonexistent URLs return a real `404` with
`<title>Page not found – xAID</title>`, and `https://www.xaid.ai/` now serves a valid
`CN=xaid.ai` certificate and `301`s to the apex.

---

## 3. HTTP/2 + compression + HTML cache headers — HIGH (perf, affects every page)

Still open as of 2026-08-20. Current state, measured:

- `http_version: 1.1` — no HTTP/2
- `Content-Encoding: gzip` only — no brotli
- HTML served with **no `Cache-Control`** header at all (only `ETag`/`Last-Modified`)
- `charset=utf-8` is now present ✅

This matters more than it did in July: the site is now route-code-split into ~33 chunks,
and HTTP/1.1 serialises those requests. Core Web Vitals are a ranking factor.

```nginx
listen 443 ssl;
http2 on;                        # nginx ≥ 1.25.1 (older: `listen 443 ssl http2;`)

brotli on;
brotli_types text/html text/css application/javascript application/json image/svg+xml;
# if the brotli module isn't built in, at minimum keep gzip on

location / { add_header Cache-Control "no-cache"; }                                   # HTML
location /assets/ { add_header Cache-Control "public, max-age=31536000, immutable"; } # already OK
```

`no-cache` on HTML means "revalidate before reuse" — not "don't cache". It's what makes a
deploy visible immediately while still allowing 304s. Hashed assets under `/assets/` are
already served correctly with `max-age=31536000, immutable` — keep as is.

---

## 5. `/xaid-free` returns 404 to live search traffic — LOW 🆕

Found in Google Search Console (Performance export, last 3 months):

```
https://xaid.ai/xaid-free   928 impressions   5 clicks   avg position 7.5
```

Google ranks this URL on page 1 and it has been sending people to an error page.

It was the **xAID Free** page on the previous site — a research programme offering free AI
tools, project support and grants to research teams in exchange for publishing their study
(last Wayback snapshot: 2026-02-14, footer "© 2025 xAID"). It exists nowhere in the current
repo or its git history; it was simply not carried over to the React site.

**The programme is closed** (confirmed by the founder, 2026-08-20), so the page is not coming
back — redirect it to the homepage:

```nginx
location = /xaid-free { return 301 https://xaid.ai/; }
```

Homepage, deliberately — **not** `/#contact-us`. Someone searching for free research access
is not looking for the paid pilot form, and dropping them straight onto a sales form is a
worse experience than a general landing.

Verify: `curl -sI https://xaid.ai/xaid-free | head -1` → `301`.

---

## 4. Stale pre-redesign files in `/var/www/xaid.ai/` — MEDIUM

The deploy rsync has no `--delete`, so files from the July-2025 site are still live.
Partly cleaned since July. Re-verified today:

- ✅ `/privacy-policy` (the extension-less FILE) — gone, now correctly `301`s to `/privacy-policy/`
- ❌ `/assets/img/lungs.png` — still `200`, dated 2024, referenced by nothing in the current build
- ❌ `/assets/js/main.js` — still `200`, old bundle, not referenced by current HTML
- Old hashed bundles in `/assets/` accumulate with every deploy

Safe cleanup: delete `/assets/img/` and `/assets/js/main.js`, plus any hashed bundle not
referenced by the current HTML. One supervised `rsync --delete` sync would handle all of it.

**Do NOT delete** at the web root: `og-image.png`, `favicon.ico`, `llms.txt`, `pricing.md`,
`robots.txt`, `sitemap.xml`, `404.html`, `200.html` — all current and in use.

---

## Verification after the changes

```bash
curl -sI https://xaid.ai/xaid-free | head -1                    # → 301
curl -sI --http2 https://xaid.ai/ -o /dev/null -w '%{http_version}\n'   # → 2
curl -sI -H "Accept-Encoding: br" https://xaid.ai/ | grep -i encoding   # → br
curl -sI https://xaid.ai/ | grep -i cache-control              # → no-cache
curl -s -o /dev/null -w '%{http_code}\n' https://xaid.ai/assets/img/lungs.png  # → 404
```
