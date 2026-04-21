self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("vars-app").then(cache => {
      return cache.addAll([
        "/VARS-University-Online-Education/"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});