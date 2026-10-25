/**
 * Service Worker for digitalbas on https://digitalbas.benpeltz.ca/
 * - Configured for dedicated custom subdomain origin (root scope '/')
 * - Uses Network-First (with offline cache fallback) so index.html and manifest.json never serve stale versions
 */

const CACHE_PREFIX = 'digitalbas-';
const CACHE_NAME = 'digitalbas-v3';

const PRECACHE_URLS = [
  '/',
  '/index.html',
  '/manifest.json?v=3',
  '/styles.css',
  '/lectionary-data.js',
  '/app.js',
  '/icon-192.png',
  '/icon-512.png',
  '/icon.svg'
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
  if (!event.request.url.startsWith(self.location.origin)) return;

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
          return cachedResponse || caches.match('/index.html');
        })
      )
  );
});
