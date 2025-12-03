# AI Instructions - Mobile

> **CRITICAL:** Every AI assistant MUST read and follow this document before any work.

---

## 🎯 Project Overview

**Name:** {{PROJECT_NAME}}

**Description:** {{PROJECT_DESCRIPTION}}

**Purpose:** {{PROBLEM_STATEMENT}}

**Target Users:** {{TARGET_USERS}}

---

## 🏗️ Tech Stack

### Mobile Platform

- **Platforms:** {{PLATFORMS}}
- **Framework:** {{FRAMEWORK}} {{FRAMEWORK_VERSION}}
- **Language:** {{LANGUAGE}} {{LANGUAGE_VERSION}}
- **Minimum iOS:** {{MIN_IOS_VERSION}}
- **Minimum Android:** {{MIN_ANDROID_VERSION}} (API {{MIN_ANDROID_API}})

### Navigation

- **Navigation Library:** {{NAVIGATION_LIBRARY}}
- **Navigation Pattern:** {{NAVIGATION_PATTERN}}
- **Deep Linking:** {{DEEP_LINKING_STRATEGY}}

### State Management

- **State Solution:** {{STATE_MANAGEMENT}}
- **Data Fetching:** {{DATA_FETCHING}}
- **Storage:** {{STORAGE_SOLUTION}}
- **Offline Strategy:** {{OFFLINE_STRATEGY}}

### Native Features

- **Permissions:** {{PERMISSIONS_LIST}}
- **Native Modules:** {{NATIVE_MODULES_LIST}}
- **Third-Party SDKs:** {{THIRD_PARTY_SDKS}}

### Testing

- **Unit Testing:** {{UNIT_TEST_FRAMEWORK}}
- **Component Testing:** {{COMPONENT_TEST_LIBRARY}}
- **E2E Testing:** {{E2E_FRAMEWORK}}
- **Coverage Target:** {{TEST_COVERAGE_TARGET}}

### Build & Deployment

- **CI/CD:** {{CICD_PLATFORM}}
- **Code Signing:** {{CODE_SIGNING_STRATEGY}}
- **Versioning:** {{VERSIONING_STRATEGY}}
- **Analytics:** {{ANALYTICS_TOOL}}
- **Crash Reporting:** {{CRASH_REPORTING_TOOL}}

---

## 🏛️ Architecture

**Architecture Pattern:** {{ARCHITECTURE_PATTERN}}

{{ARCHITECTURE_DESCRIPTION}}

**File Organization:** {{FILE_ORGANIZATION}}

**Folder Structure:**
```
{{FOLDER_STRUCTURE}}
```

---

## ❌ NEVER Rules

**YOU MUST NEVER:**

### Performance

- ❌ Render large lists without virtualization - Use FlatList (React Native), ListView.builder (Flutter)
- ❌ Forget to dispose resources - Remove listeners, cancel timers, close streams
- ❌ Use heavy operations on main thread - Use background threads for heavy work
- ❌ Load all data at once - Implement pagination and lazy loading

### Memory

- ❌ Create memory leaks - Always dispose listeners, subscriptions, timers
- ❌ Hold references to large objects - Use weak references when appropriate
- ❌ Forget to release native resources - Close cameras, file handles, etc.

### Network

- ❌ Make requests without error handling - Always handle network errors gracefully
- ❌ Ignore offline scenarios - Handle offline state, show cached data
- ❌ Forget to cancel requests - Cancel requests when component unmounts

### Permissions

- ❌ Request permissions without explanation - Explain why permission is needed
- ❌ Request all permissions at once - Request just-in-time
- ❌ Ignore permission denial - Handle gracefully, show alternatives

### Platform Differences

- ❌ Assume iOS and Android are identical - Handle platform-specific code
- ❌ Use platform-specific APIs without checks - Check platform before using
- ❌ Ignore platform guidelines - Follow iOS Human Interface Guidelines and Material Design

---

## ✅ ALWAYS Rules

**YOU MUST ALWAYS:**

### Code Quality

- ✅ Use TypeScript/Dart strict mode
- ✅ Follow naming conventions: {{FILE_NAMING_CONVENTION}}
- ✅ Write unit tests for business logic
- ✅ Handle errors gracefully
- ✅ Use proper error boundaries (React Native) or error handlers (Flutter)

### Performance

- ✅ Optimize images - Use appropriate formats and sizes
- ✅ Implement lazy loading for screens and components
- ✅ Use memoization for expensive computations
- ✅ Monitor app performance - Track FPS, memory usage, battery

### User Experience

- ✅ Show loading states - Use skeleton screens or spinners
- ✅ Handle offline gracefully - Show cached data, queue updates
- ✅ Request permissions just-in-time - Explain why needed
- ✅ Follow platform design guidelines - iOS HIG and Material Design

### Security

- ✅ Store sensitive data securely - Use secure storage (Keychain/Keystore)
- ✅ Validate all user input
- ✅ Use HTTPS for all network requests
- ✅ Implement certificate pinning for production

### Testing

- ✅ Test on physical devices - Not just simulators/emulators
- ✅ Test on multiple screen sizes
- ✅ Test offline scenarios
- ✅ Test permission flows

---

## 📱 Mobile-Specific Guidelines

### iOS

- ✅ Follow iOS Human Interface Guidelines
- ✅ Use native iOS navigation patterns
- ✅ Support Dark Mode
- ✅ Handle Safe Area insets
- ✅ Use SF Symbols for icons

### Android

- ✅ Follow Material Design guidelines
- ✅ Use Material Components
- ✅ Support different screen densities
- ✅ Handle system bars (status bar, navigation bar)
- ✅ Use Material Icons

### Cross-Platform

- ✅ Use platform-specific code when needed
- ✅ Test on both platforms
- ✅ Handle platform differences gracefully
- ✅ Use platform detection utilities

---

## 🔄 Development Workflow

1. **Read this file first** - Understand tech stack and rules
2. **Check existing code** - Follow established patterns
3. **Write tests** - Unit tests for logic, integration tests for flows
4. **Test on devices** - Not just simulators
5. **Handle errors** - Graceful error handling
6. **Optimize performance** - Monitor and optimize

---

## 📚 Key Documentation

- `AGENT.md` - Universal AI context
- `docs/architecture.md` - System architecture
- `docs/navigation.md` - Navigation patterns
- `docs/state-management.md` - State management
- `docs/offline-strategy.md` - Offline handling
- `docs/permissions.md` - Permissions handling
- `docs/testing.md` - Testing strategy
- `docs/app-store.md` - App Store deployment

---

**Last Updated:** {{LAST_UPDATED}}

**Version:** {{PROJECT_VERSION}}

