self.addEventListener("install", e => {
  e.waitUntil(
    caches.open("vars-app").then(cache => {
      return cache.addAll([
        "./",
        "./index.html",
        "./Final_LMS_DashboardFixed_Full.html"
      ]);
    })
  );
});

self.addEventListener("fetch", e => {
  e.respondWith(
    caches.match(e.request).then(res => res || fetch(e.request))
  );
});
