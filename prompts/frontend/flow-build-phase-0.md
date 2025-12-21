# Phase 0: Context Discovery (Frontend)

**⚡ AUTOMATED ANALYSIS - Minimal User Input Required**

This phase automatically analyzes your existing frontend codebase to pre-populate answers for the build questionnaire.
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
Detect the current frontend stack, architecture patterns, and configuration from existing code.

---
## 📋 Detection Layers (Progressive)

### Layer 0: Cache Check (0-2 seconds)
Check if `.ai-flow/cache/frontend-context.json` exists and is fresh (<7 days old).

**Action:** Ask user: "Found cached analysis from X days ago. Use it? (Y/n)"

---
### Layer 1: Fast Metadata Scan (10-20 seconds)

// turbo
**Purpose:** Detect framework, build tool, package manager, TypeScript

⭐ **Context Links:**
- Node.js: [package.json](file:///package.json)
- React/Vue/Svelte Config: [vite.config.ts](file:///vite.config.ts) | [vite.config.js](file:///vite.config.js)
- Angular: [angular.json](file:///angular.json)
- TypeScript: [tsconfig.json](file:///tsconfig.json)
- Styling: [tailwind.config.js](file:///tailwind.config.js) | [tailwind.config.ts](file:///tailwind.config.ts)

**Action:** Use your internal knowledge to detect the UI framework (React, Vue, Angular, Svelte, Next.js, etc.), Build Tool (Vite, Webpack, etc.), State Management, and Styling from the configuration files.

---
### Layer 2: Structural Analysis (30-90 seconds)

**Purpose:** Analyze component structure, routing, and architecture patterns (Atomic Design, Feature-based, etc.) by scanning the folder organization.

---
### Layer 3: Selective Deep Analysis (Optional, 60-120 seconds)

**Purpose:** Extract advanced patterns, naming conventions, and accessibility (A11y) maturity.

---
## ✅ Validation & Confirmation

### Present Findings
Show the summary report and ask for confirmation:
- ✅ Framework
- ✅ Build Tool
- ✅ TypeScript
- ✅ State Management
- ✅ Styling
- ✅ Architecture Pattern

---

## 💾 Cache Storage
Save detected context to `.ai-flow/cache/frontend-context.json` for future use.

---

✅ **Phase 0 Complete: Context Analysis Finalized**

---

**Next Phase:** Phase 1 - Discovery & UX Requirements

Read: `.ai-flow/prompts/frontend/flow-build-phase-1.md`

---
_Version: 4.2 (Antigravity Optimized - Ultra-Light Edition)_
_Last Updated: 2025-12-21_
