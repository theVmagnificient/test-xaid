# Server tasks for xaid.ai (aurora)

**All closed as of 2026-08-21**, verified against production. Kept as a record of what
changed, and of why brotli was deliberately left alone.

These needed shell/root on aurora — the locked-down `xaid_landing_deploy` rsync key can't do them.

## Status

| # | Task | Status |
|---|------|--------|
| 1 | Branded 404 page | ✅ done |
| 2 | `www.xaid.ai` TLS | ✅ done |
| 3 | HTTP/2 + HTML cache headers | ✅ done |
| 3b | Brotli | ⛔ **declined — see below, please don't reopen** |
| 4 | Stale pre-redesign files | ✅ done |
| 5 | `/xaid-free` returning 404 to live traffic | ✅ done |

Verified on prod 2026-08-21:

```
HTTP/2 200                          # was HTTP/1.1
cache-control: no-cache             # on HTML; previously absent
cache-control: public, immutable    # on /assets/, max-age=31536000
/xaid-free            -> 301 https://xaid.ai/     # was 404
/assets/js/main.js    -> 404                      # stale 2025 file, deleted
/assets/img/lungs.png -> 404                      # stale 2025 file, deleted
/privacy-policy       -> 301 /privacy-policy/     # stale extension-less file gone
```

HTTP/2 was the one that mattered here: the site is split into ~33 route chunks that
HTTP/1.1 was serialising. Thanks for turning it round quickly.

---

## 3b. Brotli — declined, deliberately

`ngx_brotli` is a compiled nginx module rather than a config flag, so switching it on means
rebuilding or replacing nginx on the live box.

Measured payoff: the main JS bundle is 439 KB raw and **139 KB over gzip**; brotli would put
it around 115–120 KB, so roughly 20 KB per first load plus a similar slice off HTML and CSS.

Not worth touching a working web server for. **Decision by the dev and the founder,
2026-08-21.** Only worth folding in if nginx is being rebuilt for some other reason anyway.

gzip is confirmed working on both HTML and JS, and every real browser sends
`Accept-Encoding: br, gzip, deflate`, so nothing is served uncompressed. Requesting `br`
alone returns no encoding — that is how you confirm brotli is absent, not a fault.

---

## Background: what `/xaid-free` was

The **xAID Free** page on the pre-React site — a research programme offering free AI tools,
project support and grants in exchange for publishing a study (last Wayback snapshot
2026-02-14, footer "© 2025 xAID"). It exists nowhere in the current repo or its git history;
it was simply not carried across.

The programme is closed, so it redirects to the homepage rather than being rebuilt —
deliberately the homepage and **not** `/#contact-us`, since someone searching for free
research access is not looking for the paid pilot form.

It had been drawing 928 impressions at position 7.5 in Search Console while returning 404.

---

## Re-verification, if ever needed

```bash
curl -sI --http2 https://xaid.ai/ -o /dev/null -w '%{http_version}\n'          # 2
curl -sI https://xaid.ai/ | grep -i cache-control                             # no-cache
curl -sI https://xaid.ai/xaid-free | head -1                                  # 301
curl -s -o /dev/null -w '%{http_code}\n' https://xaid.ai/assets/img/lungs.png  # 404
```
