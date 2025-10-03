const CACHE_NAME = "client-app-v1";
const urlsToCache = ["/", "/index.html", "/manifest.json"];

// Install үед cache хийх
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(urlsToCache))
  );
});

// Fetch хийх үед offline ажиллуулах
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => response || fetch(event.request))
  );
});