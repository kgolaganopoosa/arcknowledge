const CACHE_NAME = 'arcknowledge-v1';
const ASSETS = [
  './',
  './index.html', // change to your filename if different
  './manifest.json'
];

// Install Service Worker
self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// Activate Service Worker
self.addEventListener('activate', (e) => {
  console.log('Service Worker Activated');
});

// Fetch Listener (Required for PWA Install Prompt)
self.addEventListener('fetch', (e) => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
