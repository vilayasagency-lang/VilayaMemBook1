// MemoryFlip Ultra — Service Worker
const CACHE_NAME = 'memoryflip-v5';
const STATIC_ASSETS = [
    '/', '/index.html', '/style.css', '/app.js',
    '/auth.js', '/subscription.js', '/manifest.json'
];

self.addEventListener('install', event => {
    console.log('[SW] Installing...');
    event.waitUntil(
        caches.open(CACHE_NAME).then(cache => {
            return cache.addAll(STATIC_ASSETS).catch(() => {});
        })
    );
    self.skipWaiting();
});

self.addEventListener('activate', event => {
    console.log('[SW] Activating...');
    event.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k)))
        )
    );
    self.clients.claim();
});

self.addEventListener('fetch', event => {
    // Skip Firebase, external APIs
    const url = event.request.url;
    if (url.includes('firebase') || url.includes('googleapis') ||
        url.includes('open-meteo') || url.includes('nominatim') ||
        url.includes('transparenttextures') || url.includes('leaflet')) {
        return;
    }
    event.respondWith(
        caches.match(event.request).then(cached => {
            if (cached) return cached;
            return fetch(event.request).then(response => {
                if (!response || response.status !== 200 || response.type !== 'basic') return response;
                const clone = response.clone();
                caches.open(CACHE_NAME).then(cache => cache.put(event.request, clone));
                return response;
            }).catch(() => caches.match('/index.html'));
        })
    );
});
