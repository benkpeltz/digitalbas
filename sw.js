/**
 * Service Worker for digitalbas on https://benkpeltz.github.io/digitalbas/
 * - Cache-isolated with CACHE_PREFIX = 'digitalbas-'
 * - Ignores any request outside '/digitalbas'
 * - Uses Network-First (with offline cache fallback) so index.html and manifest.json never serve stale versions
 */

const CACHE_PREFIX = 'digitalbas-';
const CACHE_NAME = 'digitalbas-v2';

const PRECACHE_URLS = [
  '/digitalbas/',
  '/digitalbas/index.html',
  '/digitalbas/manifest.json?v=2',
  '/digitalbas/css/styles.css',
  '/digitalbas/js/lectionary-data.js',
  '/digitalbas/js/app.js',
  '/digitalbas/icon-192.png',
  '/digitalbas/icon-512.png',
  '/digitalbas/icon.svg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.map((key) => {
          if (key.startsWith(CACHE_PREFIX) && key !== CACHE_NAME) {
            return caches.delete(key);
          }
          return null;
        })
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  if (!event.request.url.includes('/digitalbas')) return;

  event.respondWith(
    fetch(event.request)
      .then((networkResponse) => {
        if (networkResponse && networkResponse.status === 200) {
          const responseClone = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseClone);
          });
        }
        return networkResponse;
      })
      .catch(() =>
        caches.match(event.request).then((cachedResponse) => {
          return cachedResponse || caches.match('/digitalbas/index.html');
        })
      )
  );
});
