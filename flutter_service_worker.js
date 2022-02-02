'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "fa9a0aa7b622b4edc8d7939bb69c76e5",
"assets/assets/fonts/bahnshrift/BAHNSCHRIFT%25201.TTF": "b3483ec650bba4a4416d39c4d6030a99",
"assets/assets/fonts/bahnshrift/BAHNSCHRIFT%252010.TTF": "b3483ec650bba4a4416d39c4d6030a99",
"assets/assets/fonts/bahnshrift/BAHNSCHRIFT%252011.TTF": "b3483ec650bba4a4416d39c4d6030a99",
"assets/assets/fonts/bahnshrift/BAHNSCHRIFT%252012.TTF": "b3483ec650bba4a4416d39c4d6030a99",
"assets/assets/fonts/bahnshrift/BAHNSCHRIFT%252013.TTF": "b3483ec650bba4a4416d39c4d6030a99",
"assets/assets/fonts/bahnshrift/BAHNSCHRIFT%252014.TTF": "b3483ec650bba4a4416d39c4d6030a99",
"assets/assets/fonts/bahnshrift/BAHNSCHRIFT%25202.TTF": "b3483ec650bba4a4416d39c4d6030a99",
"assets/assets/fonts/bahnshrift/BAHNSCHRIFT%25203.TTF": "b3483ec650bba4a4416d39c4d6030a99",
"assets/assets/fonts/bahnshrift/BAHNSCHRIFT%25204.TTF": "b3483ec650bba4a4416d39c4d6030a99",
"assets/assets/fonts/bahnshrift/BAHNSCHRIFT%25205.TTF": "b3483ec650bba4a4416d39c4d6030a99",
"assets/assets/fonts/bahnshrift/BAHNSCHRIFT%25206.TTF": "b3483ec650bba4a4416d39c4d6030a99",
"assets/assets/fonts/bahnshrift/BAHNSCHRIFT%25207.TTF": "b3483ec650bba4a4416d39c4d6030a99",
"assets/assets/fonts/bahnshrift/BAHNSCHRIFT%25208.TTF": "b3483ec650bba4a4416d39c4d6030a99",
"assets/assets/fonts/bahnshrift/BAHNSCHRIFT%25209.TTF": "b3483ec650bba4a4416d39c4d6030a99",
"assets/assets/fonts/bahnshrift/BAHNSCHRIFT.TTF": "b3483ec650bba4a4416d39c4d6030a99",
"assets/assets/logo/female-logo.png": "0b39ec50548b6dda8b84abed0e34323a",
"assets/assets/logo/male-logo.png": "5e68b4279d0701461c3e618166d4f8d2",
"assets/assets/logo/svg_icons/download.svg": "7c68f037c6ac4da771222e673288d308",
"assets/assets/logo/svg_icons/print.svg": "3343a404d821604a877ca0294fb139bf",
"assets/assets/logo/svg_icons/report.svg": "1a4cb0a5087267699404e344bac5d2d2",
"assets/assets/logo/Vento%2520Logo%2520BT%2520I.png": "b20e27287289d9d311af40a25fcf6e0c",
"assets/assets/logo/Vento%2520Logo%2520BT.png": "51a850aa8ba78974363559237644c2e4",
"assets/assets/logo/VM%2520Txt.png": "d9f7193fb05999adce526c72fa2b7101",
"assets/assets%255Cfonts%255Ccandara%255CCandara.ttf": "cd3ba5878c3e6dccd56dfd41d85b96d5",
"assets/assets%255Cfonts%255Ccandara%255CCandara_Bold.ttf": "3f3af05d64ffb12ed719ae541d70facf",
"assets/assets%255Cfonts%255Ccandara%255CCandara_Bold_Italic.ttf": "27f9b92e7c536fd4768cf078c5ae63a9",
"assets/assets%255Cfonts%255Ccandara%255CCandara_Italic.ttf": "2e9b79237607c5723444e9b978198c70",
"assets/assets%255Cfonts%255Clora%255CLora-Italic-VariableFont_wght.ttf": "fd66db567c00ec17273d45b729a36ead",
"assets/assets%255Cfonts%255Clora%255CLora-VariableFont_wght.ttf": "337fa370c6ba675d1c9d3ba0d1444145",
"assets/assets%255Cfonts%255Clora%255Cstatic%255CLora-Bold.ttf": "eec9b1b134bfc16624d240b70db7ed59",
"assets/assets%255Cfonts%255Clora%255Cstatic%255CLora-BoldItalic.ttf": "1ad2aded60e9b2fa80315e8aab0e0a5d",
"assets/assets%255Cfonts%255Clora%255Cstatic%255CLora-Italic.ttf": "ab2098e1bf41df6b514fdf1f3d4f30b0",
"assets/assets%255Cfonts%255Clora%255Cstatic%255CLora-Medium.ttf": "c3e2f11036e070e9ea5a4cc2c1169165",
"assets/assets%255Cfonts%255Clora%255Cstatic%255CLora-MediumItalic.ttf": "f281d9bb9a974ed59f13104278dd1868",
"assets/assets%255Cfonts%255Clora%255Cstatic%255CLora-Regular.ttf": "c684a3de5c014a61d5139d5b97da99fc",
"assets/assets%255Cfonts%255Clora%255Cstatic%255CLora-SemiBold.ttf": "6c384a752b937ec93378fe87c2494234",
"assets/assets%255Cfonts%255Clora%255Cstatic%255CLora-SemiBoldItalic.ttf": "c4d0098ab3fd2e0968cb946a99c92071",
"assets/FontManifest.json": "bc284e35699382d021a768d0b41c124b",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "ba53481c92609e3663afae3f60d31bc4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b788b35b220ee53f2d17ca38ea35469b",
"/": "b788b35b220ee53f2d17ca38ea35469b",
"main.dart.js": "5d65ea562745a528ed5b292c25ebb5b5",
"manifest.json": "16a48e117bebaccb74b54511577b95d0",
"version.json": "5cd4ccd2ff407d87b68f1b9b321b9941"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
