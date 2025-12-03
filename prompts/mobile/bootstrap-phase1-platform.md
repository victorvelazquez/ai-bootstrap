# Phase 1: Platform & Framework Selection

**Duration:** 15-20 minutes
**Questions:** ~12 questions
**Output:** project-brief.md, parts of AGENT.md, parts of ai-instructions.md

---

## 🎯 Objective

Determine the **technical foundation** for your mobile application:

1. What platforms will you target?
2. What framework will you use?
3. What minimum OS versions will you support?
4. What development tools and languages?

---

## 📋 Questions

### Question 1.1: Target Platforms

**What platforms will your app support?**

A) ⭐ **iOS Only**
   - Apple App Store only
   - Swift or React Native iOS
   - Best for: Apple-focused products, faster initial launch

B) ⭐ **Android Only**
   - Google Play Store only
   - Kotlin or React Native Android
   - Best for: Android-focused products, wider market reach

C) 🔥 **iOS + Android (Cross-Platform)** (Recommended)
   - Both App Store and Play Store
   - React Native, Flutter, or Ionic
   - Best for: Maximum reach, shared codebase

D) **iOS + Android + Web (Universal)**
   - Mobile apps + web version
   - React Native Web, Flutter Web, or PWA
   - Best for: Multi-platform presence

**Your answer:**

---

### Question 1.2: Mobile Framework

**What framework will you use to build your mobile app?**

**If iOS Only:**
- A) ⭐ **Native iOS (Swift)** - Best performance, full native features
- B) **Native iOS (Objective-C)** - Legacy support
- C) **React Native** - Cross-platform, JavaScript
- D) **Flutter** - Cross-platform, Dart

**If Android Only:**
- A) ⭐ **Native Android (Kotlin)** - Best performance, full native features
- B) **Native Android (Java)** - Legacy support
- C) **React Native** - Cross-platform, JavaScript
- D) **Flutter** - Cross-platform, Dart

**If Cross-Platform:**
- A) ⭐ **React Native** (Recommended)
  - JavaScript/TypeScript
  - Large ecosystem
  - Hot reload
  - Best for: Teams familiar with React

- B) 🔥 **Flutter** (Popular)
  - Dart language
  - Excellent performance
  - Beautiful UI out of the box
  - Best for: Teams wanting native-like performance

- C) **Ionic**
  - Web technologies (HTML/CSS/JS)
  - Capacitor for native features
  - Best for: Web developers transitioning to mobile

- D) **Xamarin / .NET MAUI**
  - C# language
  - Microsoft ecosystem
  - Best for: .NET teams

**Your answer:**

**If React Native selected, ask:**
- What React Native version? (Latest stable recommended)
- Will you use Expo? (Y/n)
  - Expo: Faster development, managed workflow
  - Bare React Native: More control, custom native code

**If Flutter selected, ask:**
- What Flutter version? (Latest stable recommended)
- Will you use Flutter for Web/Desktop too? (Y/n)

---

### Question 1.3: Minimum OS Versions

**What minimum OS versions will you support?**

**For iOS:**
- A) ⭐ **iOS 15+** (Recommended)
  - Covers ~95% of active devices
  - Modern APIs available
  - Best for: Most apps

- B) **iOS 14+**
  - Covers ~98% of active devices
  - Some older APIs needed
  - Best for: Maximum compatibility

- C) **iOS 16+**
  - Covers ~85% of active devices
  - Latest features only
  - Best for: New apps, modern features

- D) **iOS 17+**
  - Covers ~60% of active devices
  - Cutting-edge features
  - Best for: Premium apps, latest tech

**For Android:**
- A) ⭐ **Android 8.0 (API 26)+** (Recommended)
  - Covers ~95% of active devices
  - Modern APIs available
  - Best for: Most apps

- B) **Android 7.0 (API 24)+**
  - Covers ~98% of active devices
  - Some older APIs needed
  - Best for: Maximum compatibility

- C) **Android 10 (API 29)+**
  - Covers ~85% of active devices
  - Latest features only
  - Best for: New apps, modern features

- D) **Android 12 (API 31)+**
  - Covers ~70% of active devices
  - Cutting-edge features
  - Best for: Premium apps, latest tech

**Your answer:**

---

### Question 1.4: Programming Language

**What programming language will you use?**

**If React Native:**
- A) ⭐ **TypeScript** (Recommended)
  - Type safety
  - Better IDE support
  - Industry standard

- B) **JavaScript**
  - Faster initial development
  - Less boilerplate
  - Best for: Small projects, rapid prototyping

**If Flutter:**
- **Dart** (Required - Flutter uses Dart)

**If Native iOS:**
- A) ⭐ **Swift** (Recommended)
  - Modern, safe language
  - Apple's preferred language

- B) **Objective-C**
  - Legacy support
  - Best for: Maintaining existing apps

**If Native Android:**
- A) ⭐ **Kotlin** (Recommended)
  - Modern, concise language
  - Google's preferred language

- B) **Java**
  - Legacy support
  - Best for: Maintaining existing apps

**Your answer:**

---

### Question 1.5: Development Environment

**What development tools will you use?**

**For iOS Development:**
- A) ⭐ **Xcode** (Required for iOS)
  - Version: Latest stable (15.x)
  - Includes iOS Simulator
  - Interface Builder, Instruments

**For Android Development:**
- A) ⭐ **Android Studio** (Required for Android)
  - Version: Latest stable
  - Includes Android Emulator
  - Gradle build system

**For Cross-Platform:**
- **VS Code** or **Android Studio** / **Xcode** (for native modules)

**Additional Tools:**
- **Flipper** - Debugging tool (React Native)
- **React Native Debugger** - Debugging (React Native)
- **Dart DevTools** - Debugging (Flutter)

**Your answer:**

---

### Question 1.6: Package Manager

**What package manager will you use?**

**If React Native:**
- A) ⭐ **npm** (Recommended)
- B) **yarn**
- C) **pnpm**

**If Flutter:**
- **pub** (Flutter's built-in package manager)

**If Native iOS:**
- **CocoaPods** or **Swift Package Manager**

**If Native Android:**
- **Gradle** (built-in)

**Your answer:**

---

### Question 1.7: Build Tools & CI/CD

**What build and deployment tools will you use?**

A) ⭐ **Fastlane** (Recommended for iOS/Android)
   - Automates builds, screenshots, deployment
   - Works with React Native, Flutter, Native
   - Best for: Most projects

B) **Codemagic**
   - Cloud-based CI/CD for Flutter/React Native
   - Easy setup, good for small teams

C) **GitHub Actions**
   - Flexible, free for public repos
   - Custom workflows

D) **Bitrise**
   - Mobile-focused CI/CD
   - Good for complex workflows

E) **Manual Builds**
   - Build locally, upload manually
   - Best for: Learning, small projects

**Your answer:**

---

### Question 1.8: Code Signing Strategy

**How will you handle code signing?**

**For iOS:**
- A) ⭐ **Automatic Signing** (Recommended)
  - Xcode manages certificates
  - Easier for most developers

- B) **Manual Signing**
  - More control
  - Required for enterprise apps

**For Android:**
- A) ⭐ **Automatic Signing** (Recommended)
  - Gradle manages keystores
  - Easier for most developers

- B) **Manual Signing**
  - More control
  - Required for some enterprise scenarios

**Your answer:**

---

### Question 1.9: App Store Accounts

**Do you have App Store accounts set up?**

**For iOS:**
- A) ✅ **Yes, Apple Developer Account** ($99/year)
- B) ❌ **No, will set up later**
- C) **Enterprise Account** ($299/year)

**For Android:**
- A) ✅ **Yes, Google Play Developer Account** ($25 one-time)
- B) ❌ **No, will set up later**

**Your answer:**

---

### Question 1.10: Beta Testing Strategy

**How will you handle beta testing?**

A) ⭐ **TestFlight (iOS) + Firebase App Distribution (Android)**
   - Free, easy to use
   - Best for: Most projects

B) **TestFlight (iOS) + Google Play Internal Testing (Android)**
   - Official store channels
   - Best for: Store-focused testing

C) **HockeyApp / App Center**
   - Microsoft's solution
   - Good for enterprise

D) **No Beta Testing**
   - Direct to production
   - Best for: MVPs, internal apps

**Your answer:**

---

### Question 1.11: Analytics & Crash Reporting

**What analytics and crash reporting will you use?**

A) ⭐ **Firebase Analytics + Crashlytics** (Recommended)
   - Free, comprehensive
   - Works with iOS and Android
   - Best for: Most projects

B) **Sentry**
   - Excellent error tracking
   - Good for: Production apps

C) **Mixpanel / Amplitude**
   - Advanced analytics
   - Best for: Product analytics focus

D) **No Analytics**
   - Privacy-focused
   - Best for: Privacy-critical apps

**Your answer:**

---

### Question 1.12: Backend Integration

**How will your app connect to backend services?**

A) ⭐ **REST API** (Recommended)
   - Standard HTTP/HTTPS
   - Easy to implement
   - Best for: Most apps

B) **GraphQL**
   - Flexible queries
   - Good for: Complex data needs

C) **gRPC**
   - High performance
   - Best for: Real-time, high-throughput

D) **Firebase / Supabase**
   - Backend-as-a-Service
   - Real-time database
   - Best for: Rapid development

E) **No Backend**
   - Offline-only app
   - Best for: Utility apps, games

**Your answer:**

---

## ✅ Phase 1 Completion

After answering all questions, summarize:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Phase 1 Complete: Platform & Framework Selection
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Selected Stack:
- Platforms: iOS + Android
- Framework: React Native 0.72.0
- Language: TypeScript
- Minimum iOS: 15.0+
- Minimum Android: API 26 (Android 8.0)+
- Package Manager: npm
- Build Tools: Fastlane
- Analytics: Firebase Analytics + Crashlytics
- Backend: REST API

Proceed to Phase 2 (Navigation & Architecture)? (Y/n)
```

---

## 📝 Generated Documents

After Phase 1, generate/update:

- `project-brief.md` - Add platform and framework information
- `AGENT.md` - Update technical context section
- `ai-instructions.md` - Add framework-specific rules and setup

---

**Next Phase:** Phase 2 - Navigation & Architecture

Read: `.ai-bootstrap/prompts/mobile/bootstrap-phase2-navigation.md`

---

**Last Updated:** 2025-01-XX

**Version:** 1.4.0

