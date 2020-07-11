/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("workbox-v4.3.1/workbox-sw.js");
workbox.setConfig({modulePathPrefix: "workbox-v4.3.1"});

workbox.core.setCacheNameDetails({prefix: "eleventy-plugin-pwa"});

workbox.core.skipWaiting();

workbox.core.clientsClaim();

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "about/index.html",
    "revision": "837115f1cdd9c2d5c626109ca47e7c72"
  },
  {
    "url": "beers.svg",
    "revision": "c1490c3ea054f9217325f72ada98f680"
  },
  {
    "url": "blocks.svg",
    "revision": "376f50fcebc5ee046f8bcc9799c4aade"
  },
  {
    "url": "calendar.svg",
    "revision": "64e092a2c8f45a884eb8af19e8a3fbaa"
  },
  {
    "url": "chat.svg",
    "revision": "16832434a6a59f1673092a4231ec8bd2"
  },
  {
    "url": "computer.svg",
    "revision": "358086d381b1c786e96a0114ac2d336a"
  },
  {
    "url": "credit-card.svg",
    "revision": "7b6e3c9dbb72ab8b48b192e589e9765d"
  },
  {
    "url": "devices.svg",
    "revision": "d3963fb8b2b5532da71438cfa83de820"
  },
  {
    "url": "favicon.svg",
    "revision": "930e508ef2bff0271a712f755ca9cda9"
  },
  {
    "url": "gear.svg",
    "revision": "f40e837f9cec2afb292a715f23e01e37"
  },
  {
    "url": "hero-polygon-1.svg",
    "revision": "c0f18eb574f57152d949d7098ad7ddac"
  },
  {
    "url": "hero-polygon-2.svg",
    "revision": "0c1c62cad4145ae9d48131e2a0a433fe"
  },
  {
    "url": "icon-close.svg",
    "revision": "5a59208a50a8e194019a1d3bd34e1cff"
  },
  {
    "url": "icons/icon-144x144.png",
    "revision": "ee14f71c760b17d99968238a4b7d3ed6"
  },
  {
    "url": "icons/icon-192x192.png",
    "revision": "2fcdb05e444a0c5ddcd52e71747e8f48"
  },
  {
    "url": "icons/icon-256x256.png",
    "revision": "46247641d850fba41805cae0744acd50"
  },
  {
    "url": "icons/icon-384x384.png",
    "revision": "844a6ed2d9a1e379d36c6ee2b6b67a8e"
  },
  {
    "url": "icons/icon-48x48.png",
    "revision": "ea24a8e6e8b9c1e1a5e45555a22141e5"
  },
  {
    "url": "icons/icon-512x512.png",
    "revision": "17f50e0737ed7cea2f2629a6f18227f4"
  },
  {
    "url": "icons/icon-72x72.png",
    "revision": "0015db44f0dd39ddc372c6507f37bafc"
  },
  {
    "url": "icons/icon-96x96.png",
    "revision": "531bb12898f961579051bcdf219a2917"
  },
  {
    "url": "index.html",
    "revision": "fe0caf8ecf8138bb3290f2971270edfc"
  },
  {
    "url": "location.svg",
    "revision": "77c191c686b227d1e3d88467d602364b"
  },
  {
    "url": "logo.svg",
    "revision": "ed348005cc5fb875a00f809758053ff6"
  },
  {
    "url": "paint.svg",
    "revision": "9effa7b13a11706ae1a88169c62e5418"
  },
  {
    "url": "pencil.svg",
    "revision": "66b66183a19d3d364e557570da2bd65b"
  },
  {
    "url": "photograph.svg",
    "revision": "ad3de9ae404895faeb9f93aa8530728a"
  },
  {
    "url": "power/index.html",
    "revision": "9e46cfe409902fd87ea0e893afc7ca68"
  },
  {
    "url": "privacy/index.html",
    "revision": "f4d20a2da3915ae5131105c8fac91913"
  },
  {
    "url": "services/index.html",
    "revision": "35bc6e2202f092252c87e90caa32bdf4"
  },
  {
    "url": "stars.svg",
    "revision": "455b0c020f886b711722c87fc92c6a37"
  },
  {
    "url": "terms/index.html",
    "revision": "e0e09ab0942a587b989fce36573c1bf2"
  },
  {
    "url": "uploads/blocks/checklist.jpg",
    "revision": "957087d9994a4bcc3db5df471a2c9ab6"
  },
  {
    "url": "uploads/blocks/customer-in-cafe-224.jpg",
    "revision": "ab06d0638f938aa54a857d27e7642062"
  },
  {
    "url": "uploads/blocks/customer-in-cafe-3419.jpg",
    "revision": "2f4058c23c04bc78619d44fa5005f7aa"
  },
  {
    "url": "uploads/blocks/customer-in-cafe-448.jpg",
    "revision": "40ecbb4e545f14131004c42783b3ad24"
  },
  {
    "url": "uploads/blocks/customer-in-cafe-896.jpg",
    "revision": "40a6687a1efc3a8d6f6cc386cd812eca"
  },
  {
    "url": "uploads/blocks/customer-in-cafe.jpg",
    "revision": "2f4058c23c04bc78619d44fa5005f7aa"
  },
  {
    "url": "uploads/blocks/mobile-website-finished-224.jpg",
    "revision": "09685214dd3e891611ac32fc8d2f43ce"
  },
  {
    "url": "uploads/blocks/mobile-website-finished-3561.jpg",
    "revision": "8f3d0f5fa32d2f80bbe51eb5dddfd72f"
  },
  {
    "url": "uploads/blocks/mobile-website-finished-448.jpg",
    "revision": "ba92a8723efb24e63eb3f98997e48d75"
  },
  {
    "url": "uploads/blocks/mobile-website-finished-896.jpg",
    "revision": "9316249c68855592bd1c4e0efe874147"
  },
  {
    "url": "uploads/blocks/mobile-website-finished.jpg",
    "revision": "8f3d0f5fa32d2f80bbe51eb5dddfd72f"
  },
  {
    "url": "uploads/blocks/programming-source-code-224.jpg",
    "revision": "4d1238b1e3352599c1c72b6a70a9c695"
  },
  {
    "url": "uploads/blocks/programming-source-code-3840.jpg",
    "revision": "4e079083baf752956eb2e100c47168ef"
  },
  {
    "url": "uploads/blocks/programming-source-code-448.jpg",
    "revision": "76e929f0b7b52e8d608c80ad3706ad27"
  },
  {
    "url": "uploads/blocks/programming-source-code-896.jpg",
    "revision": "4fa76bdcb14b18557cd9fd552a2f53e3"
  },
  {
    "url": "uploads/blocks/programming-source-code.jpg",
    "revision": "4e079083baf752956eb2e100c47168ef"
  },
  {
    "url": "uploads/blocks/server-room-2220.jpg",
    "revision": "26c29f56624746010f6112fa5a33efa7"
  },
  {
    "url": "uploads/blocks/server-room-224.jpg",
    "revision": "1154c2ae362bab9386dd58248c574339"
  },
  {
    "url": "uploads/blocks/server-room-448.jpg",
    "revision": "3d2060f742cee7b8359147f9c0ca4ac4"
  },
  {
    "url": "uploads/blocks/server-room-896.jpg",
    "revision": "d781c24df68a57e98e6108897f6ac90a"
  },
  {
    "url": "uploads/blocks/server-room.jpg",
    "revision": "26c29f56624746010f6112fa5a33efa7"
  },
  {
    "url": "uploads/blocks/tony-224.jpg",
    "revision": "78a233ee20fb48d33af33e532b0a7661"
  },
  {
    "url": "uploads/blocks/tony-3000.jpg",
    "revision": "cf9eb627cbcf31b9276b254a9f3dba7c"
  },
  {
    "url": "uploads/blocks/tony-448.jpg",
    "revision": "794bcf192b5d33d91d6f2ecf7af9878a"
  },
  {
    "url": "uploads/blocks/tony-896.jpg",
    "revision": "68a3d5e86320604a9555b412abc184e0"
  },
  {
    "url": "uploads/blocks/tony.jpg",
    "revision": "cf9eb627cbcf31b9276b254a9f3dba7c"
  },
  {
    "url": "uploads/blocks/video-call-224.jpg",
    "revision": "af3f5b7aa57387201236140c6107c563"
  },
  {
    "url": "uploads/blocks/video-call-448.jpg",
    "revision": "ff802ee7031126447fec411b33ff3aee"
  },
  {
    "url": "uploads/blocks/video-call-4912.jpg",
    "revision": "37541e3781ef49fc3a377058b36a4a52"
  },
  {
    "url": "uploads/blocks/video-call-896.jpg",
    "revision": "2295f92b3c54651051a74eddb160d59b"
  },
  {
    "url": "uploads/blocks/website-analytics-224.jpg",
    "revision": "1157ec15c1c875904fbbd08383c3af0a"
  },
  {
    "url": "uploads/blocks/website-analytics-3778.jpg",
    "revision": "11cd8bbcb7841ced6ff726e2ba227243"
  },
  {
    "url": "uploads/blocks/website-analytics-448.jpg",
    "revision": "49d129b9b2c603152c78f5732417a1f3"
  },
  {
    "url": "uploads/blocks/website-analytics-896.jpg",
    "revision": "5af6a1e54021e10df299dea2262c9734"
  },
  {
    "url": "uploads/blocks/website-analytics.jpg",
    "revision": "11cd8bbcb7841ced6ff726e2ba227243"
  },
  {
    "url": "uploads/blocks/website-design-224.jpg",
    "revision": "9e497734ff9cf5f22e9ff753567adc29"
  },
  {
    "url": "uploads/blocks/website-design-448.jpg",
    "revision": "ba0e197abbad411d597e0be1ebe9e463"
  },
  {
    "url": "uploads/blocks/website-design-4912.jpg",
    "revision": "7fa91889d37659ed84f63219d5de6345"
  },
  {
    "url": "uploads/blocks/website-design-896.jpg",
    "revision": "8b0165e93bf635cf82171c2b571c2069"
  },
  {
    "url": "uploads/blocks/website-design-sketch-224.jpg",
    "revision": "f548d8a0d8b5c629d4c359b3678c1076"
  },
  {
    "url": "uploads/blocks/website-design-sketch-2667.jpg",
    "revision": "c2a29601d1aff444b76cd293ebd9ce00"
  },
  {
    "url": "uploads/blocks/website-design-sketch-448.jpg",
    "revision": "5c3ea531919853b973d4ca5fc27c4336"
  },
  {
    "url": "uploads/blocks/website-design-sketch-896.jpg",
    "revision": "57f11593cb43f545efc4c0ccf10d15fc"
  },
  {
    "url": "uploads/blocks/website-design-sketch.jpg",
    "revision": "c2a29601d1aff444b76cd293ebd9ce00"
  },
  {
    "url": "uploads/blocks/website-design.jpg",
    "revision": "7fa91889d37659ed84f63219d5de6345"
  },
  {
    "url": "website.svg",
    "revision": "2b21a17668a47ec8cdb30f54a9a806c7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
