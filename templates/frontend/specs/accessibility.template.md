# Accessibility Specification

> Accessibility requirements and WCAG compliance for {{PROJECT_NAME}}

---

## 🎯 Accessibility Target

**WCAG Level:** {{A11Y_COMPLIANCE}}
**Screen Reader Testing:** {{SCREEN_READER_TESTING}}
**Keyboard Navigation:** {{KEYBOARD_NAVIGATION}}

---

## ♿ WCAG Compliance

### Level AA Requirements

- **Color Contrast:** 4.5:1 for normal text, 3:1 for large text
- **Keyboard Accessible:** All functionality available via keyboard
- **Focus Indicators:** Visible focus indicators
- **Alt Text:** Images have descriptive alt text
- **Semantic HTML:** Proper use of semantic elements

### Level AAA Requirements (if applicable)

- **Color Contrast:** 7:1 for normal text, 4.5:1 for large text
- **Sign Language:** Sign language interpretation for audio
- **Extended Audio Description:** Extended audio descriptions

---

## ⌨️ Keyboard Navigation

### Focus Management

```typescript
// Focus trap in modals
function trapFocus(element: HTMLElement) {
  const focusableElements = element.querySelectorAll(
    'a[href], button, textarea, input, select, [tabindex]:not([tabindex="-1"])'
  );
  
  const firstElement = focusableElements[0] as HTMLElement;
  const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

  element.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    }
  });
}
```

### Skip Links

```html
<a href="#main-content" class="skip-link">Skip to main content</a>
```

---

## 🗣️ Screen Reader Support

### ARIA Labels

```typescript
// Descriptive labels
<button aria-label="Close dialog">×</button>

// Live regions
<div aria-live="polite" aria-atomic="true">
  {notification}
</div>
```

### Semantic HTML

```html
<!-- ✅ Good -->
<nav>
  <ul>
    <li><a href="/">Home</a></li>
  </ul>
</nav>

<!-- ❌ Bad -->
<div>
  <div><span>Home</span></div>
</div>
```

---

## 🔗 Related Documents

- [Styling](../docs/styling.md) - Accessibility in styling
- [Components](../docs/components.md) - Accessible components

---

**Last Updated:** {{GENERATION_DATE}}

**WCAG Level:** {{A11Y_COMPLIANCE}}

