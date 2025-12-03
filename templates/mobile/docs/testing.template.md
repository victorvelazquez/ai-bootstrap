# Testing Strategy

> Testing approach for {{PROJECT_NAME}}

---

## 🎯 Testing Philosophy

**Goal:** Ship with confidence through comprehensive automated testing

**Principles:**
1. Test user behavior, not implementation
2. Write tests that give confidence
3. Fast feedback loops
4. Test on real devices

---

## 🏗️ Testing Pyramid

**Distribution:**
- **70%** Unit Tests
- **20%** Integration Tests
- **10%** E2E Tests

---

## 🧪 Testing Stack

**Unit Testing:** {{UNIT_TEST_FRAMEWORK}}

**Component Testing:** {{COMPONENT_TEST_LIBRARY}}

**E2E Testing:** {{E2E_FRAMEWORK}}

**Coverage Target:** {{TEST_COVERAGE_TARGET}}

---

## 📦 Unit Testing

### What to Test

✅ **DO test:**
- Business logic
- Utility functions
- State management logic
- Custom hooks

❌ **DON'T test:**
- Third-party libraries
- Framework internals
- Trivial code

### Examples

{{UNIT_TEST_EXAMPLES}}

---

## 🧩 Component/Screen Testing

### What to Test

✅ **DO test:**
- User interactions
- Component rendering
- Props handling
- Event handlers

### Examples

{{COMPONENT_TEST_EXAMPLES}}

---

## 🎭 E2E Testing

### What to Test

✅ **DO test:**
- Critical user flows
- Navigation flows
- Authentication flows
- Key features

### Examples

{{E2E_TEST_EXAMPLES}}

---

## 📱 Device Testing

**Strategy:** {{DEVICE_TESTING_STRATEGY}}

**Physical Devices:** {{PHYSICAL_DEVICES}}

**Emulators/Simulators:** {{EMULATORS_SIMULATORS}}

---

## 🎨 Snapshot Testing

**Strategy:** {{SNAPSHOT_TESTING_STRATEGY}}

{{SNAPSHOT_TESTING_DESCRIPTION}}

---

## ⚡ Performance Testing

**Strategy:** {{PERFORMANCE_TESTING_STRATEGY}}

{{PERFORMANCE_TESTING_DESCRIPTION}}

---

## ♿ Accessibility Testing

**Strategy:** {{ACCESSIBILITY_TESTING_STRATEGY}}

{{ACCESSIBILITY_TESTING_DESCRIPTION}}

---

## 🔄 CI/CD Integration

**CI/CD Strategy:** {{CICD_TESTING_STRATEGY}}

{{CICD_TESTING_DESCRIPTION}}

---

## ✅ Best Practices

1. **Test on Real Devices** - Not just simulators/emulators
2. **Test Offline Scenarios** - Handle offline gracefully
3. **Test Permission Flows** - Test all permission scenarios
4. **Test Platform Differences** - Test iOS and Android separately
5. **Maintain Test Coverage** - Keep coverage above target

---

**Last Updated:** {{LAST_UPDATED}}

