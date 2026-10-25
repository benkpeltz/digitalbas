# digitalbas — Interactive Book of Alternative Services (1985) Liturgy Builder

An interactive Progressive Web App (PWA) for preparing, customizing, sequencing, and printing services from the *Book of Alternative Services (1985)* of the Anglican Church of Canada.

## Live URL
- **Custom Subdomain**: `https://digitalbas.benpeltz.ca/`

## Flat Root Structure (Easy GitHub Upload)
All files are placed in the root directory so you can upload them in a single step using GitHub's **"Add file" → "Upload files" → "choose your files"** picker without needing any subfolders:
- `CNAME` (`digitalbas.benpeltz.ca` — keeps your custom domain active on GitHub Pages)
- `index.html` (Main application shell, PWA metadata, and Service Worker registration)
- `styles.css` (Liturgical rubric styling, responsive layout, and print stylesheet)
- `lectionary-data.js` (Lectionary readings, propers, prefaces, custom templates, and Rite sequences)
- `app.js` (Interactive sequencer, modal editor, and export logic)
- `manifest.json` & `manifest.webmanifest` (Root-scoped PWA manifest for `digitalbas.benpeltz.ca`)
- `sw.js` (Network-First Service Worker with offline cache fallback)
- `icon-192.png`, `icon-512.png`, `icon.svg` (PWA home screen & WebAPK icons)
