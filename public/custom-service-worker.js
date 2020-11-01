importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js"
);
if (!workbox) {
  console.log(`Boo! Workbox didn't load 😬`);
}
const { routing, strategies } = workbox;
const { registerRoute } = routing;
const { StaleWhileRevalidate } = strategies;

registerRoute(new RegExp("/images/.*"), new StaleWhileRevalidate());
