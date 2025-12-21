# Phase 0: Context Discovery (Mobile)

**⚡ AUTOMATED ANALYSIS - Minimal User Input Required**

This phase automatically analyzes your existing mobile codebase to pre-populate answers for the build questionnaire.
---

## 🚫 Critical Exclusion Rules
To avoid false-positive detections, **IGNORE** the following folders and files during all detection steps:
- `.ai-flow/` (contains AI Flow internal cache and prompts)
- `.agent/` (contains AI workflows)
- `docs/` and `specs/` (if they contain AI Flow generated documentation)
- `project-brief.md`, `ai-instructions.md`, `AGENT.md`

**A project is considered "Existing" only if it contains functional source code or framework configuration files OUTSIDE these excluded paths.**

---

## 🎯 Objective
Detect the current mobile stack, architecture patterns, and configuration from existing code.

---
## 📋 Detection Layers (Progressive)

### Layer 0: Cache Check (0-2 seconds)
Check if `.ai-flow/cache/mobile-context.json` exists and is fresh (<7 days old).

**Action:** Ask user: "Found cached analysis from X days ago. Use it? (Y/n)"

---
### Layer 1: Fast Metadata Scan (10-20 seconds)

// turbo
**Purpose:** Detect framework, platform, build tool, TypeScript

⭐ **Context Links:**
- Node.js (React Native): [package.json](file:///package.json)
- Flutter: [pubspec.yaml](file:///pubspec.yaml)
- iOS: [Podfile](file:///ios/Podfile) | [Info.plist](file:///ios/App/App/Info.plist)
- Android: [build.gradle](file:///android/build.gradle) | [AndroidManifest.xml](file:///android/app/src/main/AndroidManifest.xml)
- Config: [app.json](file:///app.json) | [tsconfig.json](file:///tsconfig.json)

**Action:** Use your internal knowledge to detect the Framework (React Native, Flutter, Native, etc.), Platform Support, Navigation, State Management, and Storage Solution from the configuration files.

---
### Layer 2: Structural Analysis (30-90 seconds)
**Purpose:** Analyze navigation structure, component organization, and architecture patterns (Feature-based, Clean Architecture, etc.).

---
### Layer 3: Selective Deep Analysis (Optional, 60-120 seconds)
**Purpose:** Extract advanced patterns, permissions, and native module integrations.

---
## ✅ Validation & Confirmation

### Present Findings
Show the summary report and ask for confirmation:
- ✅ Platform
- ✅ Framework
- ✅ TypeScript/Dart
- ✅ Navigation
- ✅ State Management
- ✅ Storage
- ✅ Architecture

---

## 💾 Cache Storage
Save detected context to `.ai-flow/cache/mobile-context.json` for future use.

---

✅ **Phase 0 Complete: Context Analysis Finalized**

---

**Next Phase:** Phase 1 - Platform & Framework Selection

Read: `.ai-flow/prompts/mobile/flow-build-phase-1.md`

---
_Version: 4.2 (Antigravity Optimized - Ultra-Light Edition)_
_Last Updated: 2025-12-21_
