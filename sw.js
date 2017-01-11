var CACHE_NAME = 'todo'
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll([
        '/todo-rooms/index.html',
        '/todo-rooms/icons/favicon.ico',
        '/todo-rooms/icons/icon_google.png',
        '/todo-rooms/icons/android-icon-192x192.png',
        '/todo-rooms/icons/apple-icon-114x114.png',
        '/todo-rooms/manifest.webmanifest'
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