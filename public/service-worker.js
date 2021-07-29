console.log("Hello from service worker!")

const FILES_TO_CACHE = [
    // just '/filename' because of line 16 in server.js - everything to the public folder is set up
    '/icons/icon-192x192.png',
    '/icons/icon-512x512.png',
    '/index.html',
    '/manifest.webmanifest',
    '/styles.css',
];


const CACHE_NAME = "static-cache-v2";
const DATA_CACHE_NAME = "data-cache-v1";