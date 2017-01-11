var CACHE_NAME = 'todo'
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        '/index.html',
        '/icons/favicon.ico',
        '/icons/icon_google.png',
        '/icons/android-icon-192x192.png',
        '/icons/apple-icon-114x114.png',
        '/manifest.webmanifest',
        '/styles/styles.scss',
        '/styles/_app_variables.scss',
        '/styles/_bootstrap_variables.scss',
        '/styles/_imports.scss',
        '/styles/_mixins.scss'
      ])
        .then(() => {
          console.log('registerd');
          self.skipWaiting()
        }
        )
        .catch(() => {
          console.log('failed to register');
        })
    }))
});

self.addEventListener('activate', event => {
  event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});