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
    "revision": "a944e04c7584aee10b22067fe41391da"
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
    "url": "hero-background-2.svg",
    "revision": "9d94c2ef059ce8d5055b6b19273d1a65"
  },
  {
    "url": "hero-background-portrait.svg",
    "revision": "41f08df4b4eaf70862335899f214c218"
  },
  {
    "url": "hero-background.svg",
    "revision": "9d94c2ef059ce8d5055b6b19273d1a65"
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
    "revision": "9d9ee550cae8563a0c80831d48aace35"
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
    "revision": "9fbf3a2073ddca43d43cfbde7903ac4d"
  },
  {
    "url": "privacy/index.html",
    "revision": "cfe5b0c8b5ef12de72c3d16eca7eeedc"
  },
  {
    "url": "services/index.html",
    "revision": "2c924a8ff1ba5c23cd9882bf436add61"
  },
  {
    "url": "stars.svg",
    "revision": "455b0c020f886b711722c87fc92c6a37"
  },
  {
    "url": "terms/index.html",
    "revision": "4d32b7de518417438c0b8e0167a6b5f0"
  },
  {
    "url": "uploads/blocks/checklist.jpg",
    "revision": "957087d9994a4bcc3db5df471a2c9ab6"
  },
  {
    "url": "website.svg",
    "revision": "2b21a17668a47ec8cdb30f54a9a806c7"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
