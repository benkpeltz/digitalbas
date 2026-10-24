# digitalbas — Interactive Book of Alternative Services (PWA)

An interactive, installable Progressive Web App (PWA) modeled on *The Book of Alternative Services (1985)* of the Anglican Church of Canada, configured specifically for deployment at **`https://benkpeltz.github.io/digitalbas/`** (`https://github.com/benkpeltz/digitalbas`).

---

## Android Chrome (WebAPK) Multi-PWA Isolation on `benkpeltz.github.io`

To ensure Android Chrome generates a distinct WebAPK package for `digitalbas` and never collides with or overwrites other PWAs hosted on `https://benkpeltz.github.io`:

1. **Manifest Scoping, Identity & WebAPK Hash (`manifest.json` & `manifest.webmanifest`)**:
   - `"id": "/digitalbas/"` — Assigns an explicit, unique WebAPK identity to this repository.
   - `"start_url": "/digitalbas/?pwa=1"` — Includes `?pwa=1` so Google's WebAPK server mints a fresh Android package hash.
   - `"scope": "/digitalbas/"` — Strictly scopes route capture to `/digitalbas/` (never `"/"` or `"."`).
   - `"name": "digitalbas"` and `"short_name": "digitalbas"`.
   - `"icons"`: Explicitly scoped to `"/digitalbas/icon-192.png"`, `"/digitalbas/icon-512.png"`, and `"/digitalbas/icon.svg"`.

2. **Cache-Busted Manifest Link & Scoped Head Tags (`index.html`)**:
   - `<link rel="manifest" href="/digitalbas/manifest.json?v=2">` forces Android Chrome and GitHub Pages' Fastly CDN to fetch the updated manifest immediately.
   - `<link rel="icon">`, `<link rel="apple-touch-icon">`, `<meta name="application-name" content="digitalbas">`, and `<meta name="apple-mobile-web-app-title" content="digitalbas">` are all explicitly scoped to `/digitalbas/`.

3. **Service Worker Scope & Cache Isolation (`index.html` & `sw.js`)**:
   - `index.html` registers `navigator.serviceWorker.register('/digitalbas/sw.js?v=2', { scope: '/digitalbas/', updateViaCache: 'none' })`.
   - `sw.js` prefixes its cache (`const CACHE_PREFIX = 'digitalbas-'; const CACHE_NAME = 'digitalbas-v2';`) and only deletes old caches matching `key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME` during `activate`.
   - `sw.js` ignores any `fetch` request outside `/digitalbas` (`if (!event.request.url.includes('/digitalbas')) return;`) and uses a **Network-First (with offline cache fallback)** strategy so `index.html` and `manifest.json` never serve stale cached versions.

---

## Repository File Structure

```text
digitalbas/
├── index.html                   # Main PWA entry point (with /digitalbas/manifest.json?v=2 & sw.js?v=2)
├── manifest.json                # WebAPK-isolated Manifest (id: /digitalbas/, start_url: /digitalbas/?pwa=1)
├── manifest.webmanifest         # Mirror Web App Manifest
├── sw.js                        # Network-First Service Worker (CACHE_PREFIX = 'digitalbas-')
├── icon-192.png                 # 192x192 PNG icon at /digitalbas/icon-192.png
├── icon-512.png                 # 512x512 PNG icon at /digitalbas/icon-512.png
├── icon.svg                     # Vector icon at /digitalbas/icon.svg
├── digitalbas_standalone.html   # Single-file portable copy
├── css/
│   └── styles.css               # Liturgical rubric styling, lectern font sizes, and print rules
├── js/
│   ├── lectionary-data.js       # Lectionary database, Proper Prefaces, Rite templates, Custom blocks
│   └── app.js                   # Dynamic block sequencer, modal editor, and rendering engine
├── icons/                       # Backup icon copies
├── LICENSE                      # MIT License
├── .gitignore                   # Standard Git ignore rules
└── README.md                    # Project & WebAPK configuration documentation
```
