# Performance Optimization

> Performance optimization strategies and best practices for {{PROJECT_NAME}}

---

## 🎯 Performance Targets

**Core Web Vitals:**
- **LCP:** < {{LCP_TARGET}}s
- **FID/INP:** < {{FID_TARGET}}ms
- **CLS:** < {{CLS_TARGET}}

**Bundle Size:** < {{BUNDLE_SIZE_TARGET}}KB (gzipped)

---

## 📦 Bundle Optimization

### Code Splitting

```typescript
// Route-based splitting
const Dashboard = lazy(() => import('./pages/Dashboard'));
const Profile = lazy(() => import('./pages/Profile'));

// Component-based splitting
const HeavyChart = lazy(() => import('./components/HeavyChart'));
```

### Tree Shaking

```typescript
// ✅ Good - Tree shakeable
import { debounce } from 'lodash-es';

// ❌ Bad - Imports entire library
import _ from 'lodash';
```

### Bundle Analysis

```bash
# Analyze bundle size
npm run build -- --analyze

# Check bundle size in CI
npm run build && du -sh dist/*
```

---

## 🖼️ Image Optimization

### Next-gen Formats

```typescript
// Use WebP/AVIF with fallback
<picture>
  <source srcset="image.avif" type="image/avif" />
  <source srcset="image.webp" type="image/webp" />
  <img src="image.jpg" alt="Description" />
</picture>
```

### Lazy Loading

```typescript
// Native lazy loading
<img src="image.jpg" loading="lazy" alt="Description" />

// Intersection Observer
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
});
```

---

## ⚡ Performance Monitoring

### Core Web Vitals Tracking

```typescript
// utils/webVitals.ts
import { onCLS, onFID, onLCP } from 'web-vitals';

function sendToAnalytics(metric: Metric) {
  // Send to analytics service
  gtag('event', metric.name, {
    value: Math.round(metric.value),
    event_label: metric.id,
    non_interaction: true,
  });
}

onCLS(sendToAnalytics);
onFID(sendToAnalytics);
onLCP(sendToAnalytics);
```

### Performance Budgets

```javascript
// .lighthouserc.js
module.exports = {
  ci: {
    collect: {
      numberOfRuns: 3,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', { minScore: 0.9 }],
        'first-contentful-paint': ['error', { maxNumericValue: 2000 }],
        'largest-contentful-paint': ['error', { maxNumericValue: 2500 }],
        'cumulative-layout-shift': ['error', { maxNumericValue: 0.1 }],
      },
    },
  },
};
```

---

## 🔗 Related Documents

- [Operations](operations.md) - Performance monitoring setup
- [Build Configuration](../specs/configuration.md) - Build optimization

---

**Last Updated:** {{GENERATION_DATE}}

**Performance Targets:** LCP < {{LCP_TARGET}}s, FID < {{FID_TARGET}}ms, CLS < {{CLS_TARGET}}

