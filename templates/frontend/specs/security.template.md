# Security Specification

> Frontend security requirements and best practices for {{PROJECT_NAME}}

---

## 🎯 Security Strategy

**CSP:** {{CSP_ENABLED}}
**XSS Prevention:** {{XSS_PREVENTION}}
**Secure Storage:** {{SECURE_STORAGE}}
**HTTPS:** {{HTTPS_ENFORCEMENT}}
**Dependency Scanning:** {{DEPENDENCY_SCANNING}}

---

## 🛡️ Content Security Policy (CSP)

### CSP Configuration

```html
<!-- index.html -->
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self' 'unsafe-inline' https://cdn.example.com;
  style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
  img-src 'self' data: https:;
  font-src 'self' https://fonts.gstatic.com;
  connect-src 'self' https://api.example.com;
  frame-ancestors 'none';
">
```

### Strict CSP (Recommended)

```html
<meta http-equiv="Content-Security-Policy" content="
  default-src 'self';
  script-src 'self';
  style-src 'self';
  img-src 'self' data: https:;
  font-src 'self';
  connect-src 'self' https://api.example.com;
  base-uri 'self';
  form-action 'self';
  frame-ancestors 'none';
  upgrade-insecure-requests;
">
```

---

## 🔒 XSS Prevention

### Input Sanitization

```typescript
// utils/sanitize.ts
import DOMPurify from 'dompurify';

export function sanitizeHtml(html: string): string {
  return DOMPurify.sanitize(html, {
    ALLOWED_TAGS: ['b', 'i', 'em', 'strong', 'a', 'p', 'br'],
    ALLOWED_ATTR: ['href'],
  });
}
```

### Safe HTML Rendering

```typescript
// React
<div dangerouslySetInnerHTML={{ __html: sanitizeHtml(userContent) }} />

// Vue
<div v-html="sanitizeHtml(userContent)" />
```

### URL Validation

```typescript
// utils/validateUrl.ts
export function isValidUrl(url: string): boolean {
  try {
    const parsed = new URL(url);
    return ['http:', 'https:'].includes(parsed.protocol);
  } catch {
    return false;
  }
}
```

---

## 🔐 Secure Storage

### Token Storage Strategy

**Option 1: httpOnly Cookies (Most Secure)**

```typescript
// Backend sets httpOnly cookie
// Frontend doesn't access token directly
// Token sent automatically with requests
```

**Option 2: Memory Storage**

```typescript
// utils/auth.ts
let authToken: string | null = null;

export function setToken(token: string): void {
  authToken = token; // Stored in memory only
}

export function getToken(): string | null {
  return authToken;
}

export function clearToken(): void {
  authToken = null;
}
```

**Option 3: localStorage (Less Secure)**

```typescript
// Only for non-sensitive data
// Never store sensitive tokens in localStorage
const PREFERENCE_KEY = 'user_preferences';

export function savePreferences(prefs: UserPreferences): void {
  localStorage.setItem(PREFERENCE_KEY, JSON.stringify(prefs));
}
```

---

## 🔒 HTTPS Enforcement

### Redirect HTTP to HTTPS

```typescript
// Redirect in production
if (location.protocol === 'http:' && location.hostname !== 'localhost') {
  location.replace(`https:${location.href.substring(location.protocol.length)}`);
}
```

### HSTS Headers (Server-side)

```
Strict-Transport-Security: max-age=31536000; includeSubDomains
```

---

## 🔍 Dependency Security

### Automated Scanning

```bash
# npm audit
npm audit

# Fix vulnerabilities
npm audit fix

# Snyk
npx snyk test

# Dependabot (GitHub)
# Automatically creates PRs for security updates
```

### Security Checklist

- [ ] Run `npm audit` regularly
- [ ] Keep dependencies updated
- [ ] Review security advisories
- [ ] Use Dependabot or similar
- [ ] Remove unused dependencies

---

## 🔗 Related Documents

- [Configuration](configuration.md) - Environment security
- [Error Handling](../docs/error-handling.md) - Security error handling

---

**Last Updated:** {{GENERATION_DATE}}

**Security Level:** {{SECURITY_LEVEL}}

