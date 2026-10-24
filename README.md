# Book of Alternative Services (BAS) – Interactive Liturgy Builder & PWA (v2)

An interactive, installable Progressive Web App (PWA) modeled on *The Book of Alternative Services (1985)* of the Anglican Church of Canada. Built for clergy, Lay Pastoral Assistants (LPAs), lay readers, and parish administrators to plan services aligned with the liturgical occasion, reorder or insert any liturgical element, and view or print a streamlined single-page service.

---

## Android PWA & GitHub Pages Subpath Scoping

When multiple GitHub Pages repositories are hosted under the same domain (`https://<username>.github.io/<repo-name>/`), Android's WebAPK generator can mistakenly treat them as the same app unless each app's manifest, links, and service worker are strictly scoped to its repository subpath.

This repository is pre-configured for the subpath **`/bas-interactive-liturgy/`**:

1. **Manifest Identity & Scope (`manifest.json` & `manifest.webmanifest`)**:
   - `"id": "/bas-interactive-liturgy/"` — Assigns a unique WebAPK application ID on Android.
   - `"start_url": "/bas-interactive-liturgy/index.html"` — Launches directly into this repository's entry point.
   - `"scope": "/bas-interactive-liturgy/"` — Prevents the app from capturing routes outside this repository.
   - `"name": "Book of Alternative Services - Interactive Liturgy"` & `"short_name": "BAS Liturgy"`.
   - `"icons"`: Relative paths (`icons/icon-192.png`, `icons/icon-512.png`, `icons/icon.svg`) so icons resolve inside `/bas-interactive-liturgy/icons/` rather than the root domain `/`.

2. **HTML Head & Asset Links (`index.html`)**:
   - `<link rel="manifest" href="manifest.json">` and all icon/stylesheet/script references use relative subpath links with zero hardcoded root (`/`) asset paths.
   - Includes `<meta name="application-name" content="BAS Liturgy">`, `<meta name="apple-mobile-web-app-title" content="BAS Liturgy">`, and `<meta name="theme-color" content="#1c1917">`.

3. **Scoped Service Worker (`sw.js` & `js/app.js`)**:
   - Registered in `js/app.js` with `navigator.serviceWorker.register('/bas-interactive-liturgy/sw.js', { scope: '/bas-interactive-liturgy/' })`.
   - Uses an isolated cache namespace (`bas-interactive-liturgy-pwa-v2`) and only deletes its own prefix on activation, leaving other GitHub Pages PWAs on your domain untouched.

> **Important Note if You Name Your GitHub Repository Something Different:**
> If your GitHub repository name is not `bas-interactive-liturgy` (for example, if you name it `bas-app`), update `/bas-interactive-liturgy/` to `/<your-repo-name>/` in two places:
> 1. `manifest.json` (and `manifest.webmanifest`): `"id"`, `"start_url"`, and `"scope"`.
> 2. `js/app.js`: `const REPO_SCOPE = '/<your-repo-name>/';` at the bottom of the file.

---

## Repository File Structure

```text
bas-interactive-liturgy/
├── index.html                          # Main PWA entry point (subpath-scoped head & manifest links)
├── manifest.json                       # Subpath-scoped Web App Manifest (id, start_url, scope)
├── manifest.webmanifest                # Mirror Web App Manifest for strict MIME-type servers
├── sw.js                               # Subpath-scoped Service Worker with isolated cache prefix
├── bas_service_builder_standalone.html # Single-file self-contained copy
├── css/
│   └── styles.css                      # Liturgical rubric styling, lectern font sizes, and print rules
├── js/
│   ├── lectionary-data.js              # Lectionary database, Proper Prefaces, Rite templates, Custom blocks
│   └── app.js                          # Dynamic block sequencer, modal editor, rendering engine & SW registration
├── icons/
│   ├── icon-192.png                    # 192x192 PNG icon (required by Android WebAPK)
│   ├── icon-512.png                    # 512x512 PNG icon (required by Android WebAPK splash/install)
│   └── icon.svg                        # Scalable vector liturgical icon
├── LICENSE                             # MIT License
├── .gitignore                          # Standard Git ignore rules
└── README.md                           # Project & PWA configuration documentation
```
