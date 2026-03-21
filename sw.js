var V='gildoumi-v2';
var F=['./','./parent.html','./index.html','./manifest.json'];
self.addEventListener('install',function(e){e.waitUntil(caches.open(V).then(function(c){return c.addAll(F)}));self.skipWaiting()});
self.addEventListener('activate',function(e){e.waitUntil(caches.keys().then(function(ks){return Promise.all(ks.filter(function(k){return k!==V}).map(function(k){return caches.delete(k)}))}))});
self.addEventListener('fetch',function(e){e.respondWith(fetch(e.request).catch(function(){return caches.match(e.request)}))});
