# digitalbas — Interactive Book of Alternative Services (PWA)

An interactive, installable Progressive Web App (PWA) modeled on *The Book of Alternative Services (1985)* of the Anglican Church of Canada. Built for clergy, Lay Pastoral Assistants (LPAs), lay readers, and parish administrators to plan services aligned with the liturgical occasion, reorder or insert any liturgical element, and view or print a streamlined single-page service.

---

## Android PWA & GitHub Pages Subpath Configuration (`/digitalbas/`)

When multiple GitHub Pages repositories are hosted under the same domain (`https://<username>.github.io/<repo-name>/`), Android's WebAPK generator can treat them as the same app unless each app's manifest, links, and service worker are strictly scoped to its repository subpath.

All files in this repository are configured for the repository and app name **`digitalbas`** (`/digitalbas/`):

1. **Manifest Identity & Scope (`manifest.json` & `manifest.webmanifest`)**:
   - `"id": "/digitalbas/"` — Assigns a distinct WebAPK package identity on Android.
   - `"start_url": "/digitalbas/index.html"` — Launches directly into the `digitalbas` entry point.
   - `"scope": "/digitalbas/"` — Restricts navigation capture strictly to `/digitalbas/` rather than the root domain `/`.
   - `"name": "digitalbas"` & `"short_name": "digitalbas"`.
   - `"icons"`: Relative paths (`icons/icon-192.png`, `icons/icon-512.png`, `icons/icon.svg`) resolving inside `/digitalbas/icons/`.

2. **HTML Head & Relative Links (`index.html`)**:
   - `<title>digitalbas — Book of Alternative Services Interactive Liturgy</title>`
   - `<meta name="application-name" content="digitalbas">` and `<meta name="apple-mobile-web-app-title" content="digitalbas">`
   - `<link rel="manifest" href="manifest.json">` and relative icon/stylesheet/script paths with zero hardcoded root (`/`) asset paths.

3. **Scoped Service Worker (`sw.js` & `js/app.js`)**:
   - Registered in `js/app.js` with `navigator.serviceWorker.register('/digitalbas/sw.js', { scope: '/digitalbas/' })` (with automatic fallback to `./` on `localhost`).
   - Uses an isolated cache namespace (`digitalbas-pwa-v2`) and only purges caches prefixed with `digitalbas-`.

---

## Repository File Structure

```text
digitalbas/
├── index.html                   # Main PWA entry point (scoped to digitalbas)
├── manifest.json                # Web App Manifest (id, start_url, scope = /digitalbas/)
├── manifest.webmanifest         # Mirror Web App Manifest
├── sw.js                        # Scoped Service Worker (cache = digitalbas-pwa-v2)
├── digitalbas_standalone.html   # Single-file self-contained portable copy
├── css/
│   └── styles.css               # Liturgical rubric styling, lectern font sizes, and print rules
├── js/
│   ├── lectionary-data.js       # Lectionary database, Proper Prefaces, Rite templates, Custom blocks
│   └── app.js                   # Dynamic block sequencer, modal editor, rendering engine & /digitalbas/ SW registration
├── icons/
│   ├── icon-192.png             # 192x192 PNG icon (Android WebAPK)
│   ├── icon-512.png             # 512x512 PNG icon (Android WebAPK splash/install)
│   └── icon.svg                 # Scalable vector liturgical icon
├── LICENSE                      # MIT License
├── .gitignore                   # Standard Git ignore rules
└── README.md                    # Project & PWA documentation
```

---

## Deploying to GitHub Pages

1. Create or open your **`digitalbas`** repository on GitHub (`https://github.com/<your-username>/digitalbas`).
2. Upload the contents of the `digitalbas/` folder (`index.html`, `manifest.json`, `manifest.webmanifest`, `sw.js`, `digitalbas_standalone.html`, `css/`, `js/`, `icons/`, `README.md`, `LICENSE`, `.gitignore`) to the root of the `main` branch.
3. Enable **GitHub Pages** under **Settings → Pages** (Deploy from branch: `main` / `(root)`).
4. Visit `https://<your-username>.github.io/digitalbas/` in Chrome on Android and tap **Install app** / **Add to Home screen**.
