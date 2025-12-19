# Phase 5: Code Standards & Best Practices

**Duration:** 15-20 minutes
**Questions:** ~10 questions
**Output:** docs/code-standards.md, parts of ai-instructions.md
---
## 🎯 Objective

Define coding conventions and standards for your mobile app:

1. File and component naming conventions
2. Code formatting and linting rules
3. Import organization
4. Commit message standards
5. Mobile-specific best practices
---
## 📋 Questions

### Question 5.1: File Naming Convention

**How will you name your files?**

**If React Native:**

- A) ⭐ **PascalCase for components** (Recommended)
  - Components: `UserProfile.tsx`, `Button.tsx`
  - Screens: `HomeScreen.tsx`, `ProfileScreen.tsx`
  - Hooks: `useAuth.ts`, `useLocalStorage.ts`
  - Utils: `formatDate.ts`, `apiClient.ts`

- B) **kebab-case for all files**
  - Components: `user-profile.tsx`, `button.tsx`

**If Flutter:**

- A) ⭐ **snake_case** (Dart convention)
  - Files: `user_profile.dart`, `home_screen.dart`
  - Classes: `UserProfile`, `HomeScreen`

**If Native iOS:**

- A) ⭐ **PascalCase** (Swift convention)
  - Files: `UserProfile.swift`, `HomeViewController.swift`

**If Native Android:**

- A) ⭐ **PascalCase for classes, camelCase for files** (Kotlin convention)
  - Files: `UserProfile.kt`, `HomeActivity.kt`

**Your answer:**
---
### Question 5.2: Component/Screen Naming Convention

**How will you name components and screens?**

**If React Native:**

- A) ⭐ **PascalCase** (Recommended)
  - Components: `<UserProfile />`, `<Button />`
  - Screens: `<HomeScreen />`, `<ProfileScreen />`

**If Flutter:**

- A) ⭐ **PascalCase for widgets**
  - Widgets: `UserProfile`, `HomeScreen`

**If Native:**

- A) ⭐ **PascalCase for classes**
  - iOS: `UserProfileViewController`
  - Android: `UserProfileActivity`

**Your answer:**

**Named exports vs default exports?**

**If React Native:**

- A) ⭐ **Named exports** (Recommended)

  ```typescript
  export const Button = () => { ... }
  // Usage: import { Button } from './Button'
  ```

- B) **Default exports**
  ```typescript
  export default function Button() { ... }
  ```

**Your answer:**
---
### Question 5.3: Linting & Formatting

**What linting/formatting tools will you use?**

**If React Native:**

- A) ⭐ **ESLint + Prettier** (Recommended)
  - ESLint: Code quality rules
  - Prettier: Code formatting

- B) **Biome** (All-in-one, faster)

**If Flutter:**

- A) ⭐ **dart format** (Built-in)
- B) **dart analyze** (Linting)

**If Native iOS:**

- A) ⭐ **SwiftLint** (Recommended)
- B) **SwiftFormat**

**If Native Android:**

- A) ⭐ **ktlint** (Recommended)
- B) **Detekt**

**Your answer:**

**ESLint config (if React Native):**

- A) ⭐ **@react-native-community/eslint-config**
- B) **eslint-config-airbnb**
- C) **Custom config**
---
### Question 5.4: Import Organization

**How will you organize imports?**

**If React Native:**

```typescript
// 1. External libraries
import React from 'react';
import { useQuery } from '@tanstack/react-query';

// 2. Internal modules
import { Button } from '@/components/Button';
import { useAuth } from '@/hooks/useAuth';

// 3. Relative imports
import { UserCard } from './UserCard';

// 4. Types
import type { User } from '@/types';
```

**If Flutter:**

```dart
// 1. Dart SDK
import 'dart:async';

// 2. External packages
import 'package:flutter/material.dart';
import 'package:provider/provider.dart';

// 3. Internal modules
import 'package:myapp/models/user.dart';
import 'package:myapp/services/auth_service.dart';
```

**Your answer:**

**Import alias for src/?**

- `@/` (React Native)
- `~/` (Alternative)
- No alias (relative paths only)
---
### Question 5.5: TypeScript/Dart Strictness

**How strict should TypeScript/Dart be?**

**If React Native (TypeScript):**

- A) ⭐ **Strict mode** (Recommended)

  ```json
  {
    "strict": true,
    "noUncheckedIndexedAccess": true
  }
  ```

- B) **Moderate**
- C) **Lenient**

**If Flutter (Dart):**

- A) ⭐ **Strict analysis** (Recommended)
  ```yaml
  analyzer:
    errors:
      invalid_annotation_target: error
  ```

**Your answer:**

**`any` type policy (TypeScript):**

- A) ❌ Never allow `any`
- B) ⚠️ Allow with warning
- C) ✅ Allow freely (not recommended)
---
### Question 5.6: Code Comments

**What's your commenting policy?**

A) ⭐ **JSDoc for public APIs, inline for complex logic** (Recommended)

```typescript
/**
 * Fetches user data from the API
 * @param userId - The user's unique identifier
 * @returns User object or null if not found
 */
export async function fetchUser(userId: string): Promise<User | null> {
  // Check cache first
  const cached = cache.get(userId);
  if (cached) return cached;
  return api.get(`/users/${userId}`);
}
```

B) **JSDoc everywhere**
C) **Minimal comments**
D) **No comment policy**

**Your answer:**
---
### Question 5.7: Component/Screen Structure

**How will you structure components and screens?**

**If React Native:**

```
screens/
├── HomeScreen/
│   ├── HomeScreen.tsx
│   ├── HomeScreen.test.tsx
│   ├── HomeScreen.styles.ts
│   └── index.ts
```

**If Flutter:**

```
lib/
├── screens/
│   ├── home_screen.dart
│   └── home_screen_test.dart
```

**Your answer:**
---
### Question 5.8: Error Handling Patterns

**How will you handle errors?**

**If React Native:**

- A) ⭐ **Error Boundaries + Try-Catch**
  - Error Boundaries for render errors
  - Try-Catch for async errors

**If Flutter:**

- A) ⭐ **Try-Catch + Global Error Handler**
  - FlutterError.onError for global errors

**If Native:**

- A) ⭐ **Try-Catch + Crash Reporting**
  - Sentry, Firebase Crashlytics

**Your answer:**

**Error logging:**

- Firebase Crashlytics
- Sentry
- Console only (development)
---
### Question 5.9: Mobile-Specific Best Practices

**What mobile-specific practices will you enforce?**

Select all that apply:

- [ ] **Performance:** Avoid unnecessary re-renders
- [ ] **Memory:** Dispose resources properly (listeners, timers)
- [ ] **Battery:** Optimize background tasks
- [ ] **Network:** Handle offline scenarios gracefully
- [ ] **Permissions:** Request permissions just-in-time
- [ ] **Accessibility:** Support screen readers (TalkBack/VoiceOver)
- [ ] **Platform Differences:** Handle iOS vs Android differences
- [ ] **App State:** Handle app backgrounding/foregrounding
- [ ] **Deep Links:** Support universal links/app links
- [ ] **Push Notifications:** Handle notification taps

**Your answer:**
---
### Question 5.10: Commit Message Convention

**What commit message format will you use?**

A) ⭐ **Conventional Commits** (Recommended)

```
<type>(<scope>): <subject>

<body>

<footer>
```

- Types: feat, fix, docs, style, refactor, test, chore
- Example: `feat(auth): add biometric login`

B) **Simple descriptive**
C) **No convention**

**Your answer:**

**Enforce with:**

- commitlint (pre-commit hook)
- Manual review
- No enforcement
---
## ✅ Phase 5 Completion

After answering all questions, summarize:

```
---
✅ Phase 5 Complete: Code Standards
---
Selected Standards:
- File Naming: PascalCase for components
- Linting: ESLint + Prettier
- TypeScript: Strict mode
- Import Organization: Grouped by type
- Error Handling: Error Boundaries + Try-Catch
- Commit Messages: Conventional Commits

Proceed to Phase 6 (Testing Strategy)? (Y/n)
```
---
## 📝 Generated Documents

After Phase 5, generate/update:

- `docs/code-standards.md` - Code standards and conventions
- `ai-instructions.md` - Add code standards rules
---
**Next Phase:** Phase 6 - Testing Strategy

Read: `.ai-flow/prompts/mobile/flow-build-phase-6-testing.md`
---
**Last Updated:** 2025-01-XX

**Version:** 1.4.0




