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
    "revision": "2f7ef52ff78c04b8ea6747bfbabe98aa"
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
    "revision": "bd89796030504e4a3e4719583e458bbd"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

workbox.routing.registerRoute(/^.*\.(html|jpg|png|gif|webp|ico|svg|woff2|woff|eot|ttf|otf|ttc|json)$/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
workbox.routing.registerRoute(/^https?:\/\/fonts\.googleapis\.com\/css/, new workbox.strategies.StaleWhileRevalidate(), 'GET');
