navigator.serviceWorker.register('/service.js');

// service-worker.js
const CACHE_NAME = 'my-cache-v1';
const urlsToCache = [
    '/',
    '/app.html',
    '/manifest.json',
    '/icon.png', // Include your icons
    '/app.css',
    '/app.js',
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
        .then(response => {
            return response || fetch(event.request);
        })
    );
});