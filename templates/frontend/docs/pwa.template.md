# Progressive Web App (PWA)

> PWA features and offline capabilities for {{PROJECT_NAME}}
---
## 🎯 PWA Strategy

**Service Worker:** {{SERVICE_WORKER_ENABLED}}
**Caching Strategy:** {{CACHING_STRATEGY}}
**Install Prompt:** {{INSTALL_PROMPT}}
**Offline Support:** {{OFFLINE_SUPPORT}}
---
## 🔧 Service Worker

### Registration

```typescript
// registerServiceWorker.ts
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((registration) => {
        console.log('SW registered:', registration);
      })
      .catch((error) => {
        console.error('SW registration failed:', error);
      });
  });
}
```

### Service Worker Implementation

```javascript
// public/sw.js
const CACHE_NAME = 'app-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/app.js',
  '/assets/app.css',
];

// Install
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});

// Fetch (Cache-first strategy)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
```
---
## 📱 Web App Manifest

```json
// public/manifest.json
{
  "name": "{{PROJECT_NAME}}",
  "short_name": "{{PROJECT_SHORT_NAME}}",
  "description": "{{PROJECT_DESCRIPTION}}",
  "start_url": "/",
  "display": "standalone",
  "background_color": "#ffffff",
  "theme_color": "#000000",
  "icons": [
    {
      "src": "/icon-192.png",
      "sizes": "192x192",
      "type": "image/png"
    },
    {
      "src": "/icon-512.png",
      "sizes": "512x512",
      "type": "image/png"
    }
  ]
}
```
---
## 📲 Install Prompt

```typescript
// utils/installPrompt.ts
let deferredPrompt: BeforeInstallPromptEvent | null = null;

window.addEventListener('beforeinstallprompt', (e) => {
  e.preventDefault();
  deferredPrompt = e;
  showInstallButton();
});

export function showInstallPrompt() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted install');
      }
      deferredPrompt = null;
    });
  }
}
```
---
## 🔗 Related Documents

- [Performance](performance.md) - PWA performance
- [Operations](operations.md) - PWA deployment
---
**Last Updated:** {{GENERATION_DATE}}

**PWA Features:** {{PWA_FEATURES}}



