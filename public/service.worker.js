self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('metronome-cache').then((cache) => {
            return cache.addAll([
                './',
                './index.html',
                './popup.css',
                './popup.js',
                './icons/play2.png',
                './icons/pause2.png',
                './icons/volume+.png',
                './icons/volume-.png',
                './icons/metronome-2.png',
                './icons/stick.png',
                './icons/cowbell.png',
                './icons/pulse.png'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});
