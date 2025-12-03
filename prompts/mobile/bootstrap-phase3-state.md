# Phase 3: State & Data Management

**Duration:** 15-20 minutes
**Questions:** ~12 questions
**Output:** docs/state-management.md, docs/offline-strategy.md, parts of ai-instructions.md

---

## 🎯 Objective

Define how your mobile app will manage state and handle data:

1. How will you manage app state?
2. How will you fetch server data?
3. What offline strategy will you use?
4. How will you synchronize data?

---

## 📋 Questions

### Question 3.1: App State Management

**How will you manage global app state?**

**If React Native:**
- A) ⭐ **Redux Toolkit** (Recommended)
  - Predictable state management
  - DevTools support
  - Best for: Complex apps, large teams

- B) 🔥 **Zustand**
  - Minimal boilerplate
  - Simple API
  - Best for: Small to medium apps

- C) **MobX**
  - Observable-based
  - Less boilerplate than Redux
  - Best for: Rapid development

- D) **Context API + useReducer**
  - Built-in React
  - No dependencies
  - Best for: Simple apps, MVPs

- E) **Jotai / Recoil**
  - Atomic state management
  - Best for: Fine-grained reactivity

**If Flutter:**
- A) ⭐ **Provider** (Recommended)
  - Simple, official recommendation
  - Best for: Most apps

- B) 🔥 **Riverpod**
  - Type-safe, compile-time errors
  - Best for: Type-safe apps

- C) **Bloc**
  - Event-driven architecture
  - Best for: Complex state logic

- D) **GetX**
  - All-in-one solution
  - Best for: Rapid development

**If Native:**
- **MVVM Pattern** with ViewModels
- **Observable Pattern** (RxSwift/RxJava)

**Your answer:**

---

### Question 3.2: Server Data Fetching

**How will you fetch data from your backend?**

A) ⭐ **REST API** (Recommended)
   - Standard HTTP/HTTPS
   - Easy to implement
   - Best for: Most apps

B) **GraphQL**
   - Flexible queries
   - Single endpoint
   - Best for: Complex data needs

C) **gRPC**
   - High performance
   - Protocol buffers
   - Best for: Real-time, high-throughput

D) **Firebase / Supabase**
   - Real-time database
   - Backend-as-a-Service
   - Best for: Rapid development

**Your answer:**

**If REST API selected, ask:**
- What HTTP client library?
  - React Native: Axios, Fetch API
  - Flutter: Dio, http package
  - Native: URLSession (iOS), OkHttp (Android)

**If GraphQL selected, ask:**
- What GraphQL client?
  - React Native: Apollo Client, urql
  - Flutter: graphql_flutter, ferry

---

### Question 3.3: Offline Strategy

**How will your app work offline?**

A) ⭐ **Read-Only Offline** (Recommended)
   - Cache data for reading
   - Show cached data when offline
   - Queue writes for when online
   - Best for: Most apps

B) **Full Offline Support**
   - Complete CRUD offline
   - Sync when online
   - Best for: Productivity apps, note-taking

C) **No Offline Support**
   - Require internet connection
   - Show error when offline
   - Best for: Real-time apps, streaming

**Your answer:**

---

### Question 3.4: Local Storage Solution

**What will you use for local data storage?**

**If React Native:**
- A) ⭐ **AsyncStorage** (Recommended)
  - Simple key-value storage
  - Best for: Small data, settings

- B) **MMKV**
  - Faster than AsyncStorage
  - Best for: Performance-critical storage

- C) **WatermelonDB**
  - SQLite-based, reactive
  - Best for: Complex relational data

- D) **Realm**
  - Object database
  - Best for: Complex data models

**If Flutter:**
- A) ⭐ **SharedPreferences** (Simple data)
- B) **Hive** (Fast, NoSQL)
- C) **Isar** (Fast, NoSQL)
- D) **SQLite (sqflite)** (Relational data)

**If Native iOS:**
- A) **UserDefaults** (Simple data)
- B) **Core Data** (Complex relational data)
- C) **Realm** (Object database)

**If Native Android:**
- A) **SharedPreferences** (Simple data)
- B) **Room** (SQLite abstraction)
- C) **DataStore** (Modern, type-safe)

**Your answer:**

---

### Question 3.5: Data Synchronization

**How will you sync data between local and server?**

A) ⭐ **Optimistic Updates + Background Sync** (Recommended)
   - Update UI immediately
   - Sync in background
   - Handle conflicts gracefully
   - Best for: Most apps

B) **Pessimistic Updates**
   - Wait for server confirmation
   - Show loading states
   - Best for: Critical data (payments, etc.)

C) **Manual Sync**
   - User-triggered sync
   - Pull-to-refresh pattern
   - Best for: Simple apps

D) **Real-time Sync**
   - WebSockets or Server-Sent Events
   - Instant updates
   - Best for: Collaborative apps, chat

**Your answer:**

---

### Question 3.6: Conflict Resolution

**How will you handle data conflicts when syncing?**

A) ⭐ **Last Write Wins** (Recommended)
   - Simple, most recent update wins
   - Best for: Most apps

B) **Server Wins**
   - Always use server version
   - Best for: Authoritative server data

C) **Merge Strategy**
   - Intelligent merging
   - Best for: Collaborative editing

D) **User Resolution**
   - Ask user to choose
   - Best for: Critical conflicts

**Your answer:**

---

### Question 3.7: Caching Strategy

**How will you cache API responses?**

A) ⭐ **Time-based Cache** (Recommended)
   - Cache for X minutes/hours
   - Refresh after expiry
   - Best for: Most data

B) **Stale-While-Revalidate**
   - Show cached data immediately
   - Fetch fresh data in background
   - Best for: Good UX

C) **Cache Forever**
   - Cache until app update
   - Best for: Static data

D) **No Caching**
   - Always fetch fresh
   - Best for: Real-time data

**Your answer:**

---

### Question 3.8: Form State Management

**How will you handle form state?**

**If React Native:**
- A) ⭐ **React Hook Form** (Recommended)
  - Minimal re-renders
  - Good performance

- B) **Formik**
  - Popular, well-documented

**If Flutter:**
- A) ⭐ **FormBuilder** (Recommended)
- B) **Built-in Form widgets**

**Your answer:**

---

### Question 3.9: Error Handling Strategy

**How will you handle API errors?**

A) ⭐ **Centralized Error Handler** (Recommended)
   - Global error handling
   - Consistent error messages
   - Best for: Most apps

B) **Per-Request Handling**
   - Handle errors in components
   - More granular control
   - Best for: Complex error scenarios

C) **Error Boundary Pattern**
   - Catch errors at component level
   - Show fallback UI
   - Best for: React Native

**Your answer:**

---

### Question 3.10: Loading States

**How will you handle loading states?**

A) ⭐ **Skeleton Screens** (Recommended)
   - Show content structure while loading
   - Better UX than spinners
   - Best for: Most screens

B) **Loading Spinners**
   - Simple, universal
   - Best for: Quick loads

C) **Progressive Loading**
   - Load critical data first
   - Load secondary data after
   - Best for: Complex screens

**Your answer:**

---

### Question 3.11: Data Validation

**How will you validate data?**

A) ⭐ **Client-side Validation** (Required)
   - Validate before sending to server
   - Better UX, less server load

B) **Schema Validation**
   - Use Zod, Yup, or similar
   - Type-safe validation

C) **Server Validation Only**
   - Validate on server
   - Show errors after submission
   - Not recommended (poor UX)

**Your answer:**

---

### Question 3.12: Background Data Refresh

**How will you refresh data in the background?**

A) ⭐ **Background Fetch** (Recommended)
   - Refresh when app is backgrounded
   - iOS: Background App Refresh
   - Android: WorkManager
   - Best for: Most apps

B) **Push Notifications**
   - Server pushes updates
   - App refreshes on notification
   - Best for: Real-time updates

C) **No Background Refresh**
   - Refresh only when app opens
   - Best for: Simple apps

**Your answer:**

---

## ✅ Phase 3 Completion

After answering all questions, summarize:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Phase 3 Complete: State & Data Management
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Selected Stack:
- State Management: Redux Toolkit
- Data Fetching: REST API (Axios)
- Offline Strategy: Read-Only Offline
- Local Storage: AsyncStorage + WatermelonDB
- Sync Strategy: Optimistic Updates + Background Sync
- Conflict Resolution: Last Write Wins
- Caching: Stale-While-Revalidate

Proceed to Phase 4 (Permissions & Native Features)? (Y/n)
```

---

## 📝 Generated Documents

After Phase 3, generate/update:

- `docs/state-management.md` - State management patterns and setup
- `docs/offline-strategy.md` - Offline and sync strategy
- `ai-instructions.md` - Add state management rules

---

**Next Phase:** Phase 4 - Permissions & Native Features

Read: `.ai-bootstrap/prompts/mobile/bootstrap-phase4-permissions.md`

---

**Last Updated:** 2025-01-XX

**Version:** 1.4.0

