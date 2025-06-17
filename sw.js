
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('atrone-cache').then(cache => {
      return cache.addAll(['./', './index.html', './manifest.json', './sw.js']);
    })
  );
});
self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request).then(r => r || fetch(event.request)));
});
