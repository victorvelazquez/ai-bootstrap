# Story Points Reference

> **Canonical reference for Fibonacci-based Story Point estimation across all AI Flow phases.**
>
> This file is the single source of truth for Story Points. All phases that require SP estimation MUST reference this file.
---
## Story Points Scale (Fibonacci)
---
| Story Points | Complexity | Typical Time | Examples                               |
| ------------ | ---------- | ------------ | -------------------------------------- |
| **1 SP**     | Trivial    | 1-2 hours    | Add simple field, update enum          |
| **2 SP**     | Very Small | 2-4 hours    | Basic validation, simple test          |
| **3 SP**     | Small      | 4-8 hours    | Simple CRUD endpoint, basic entity     |
| **5 SP**     | Medium     | 1-2 days     | Complex endpoint with business logic   |
| **8 SP**     | Complex    | 2-3 days     | Auth flow, complex validation          |
| **13 SP**    | Large      | 1 week       | Complete module with full tests        |
| **21 SP**    | Very Large | 2 weeks      | Major feature with integration         |
| **34 SP**    | Epic       | 3 weeks      | Multiple related features (Epic-level) |
---
## Story Points to Time Conversion (Hybrid Estimation)
---
Use this table to add time estimates to each task:

| Story Points | Time Estimate (solo dev) | Time Range | Example Task                            |
| ------------ | ------------------------ | ---------- | --------------------------------------- |
| **1 SP**     | 1-2 hours                | (~1-2h)    | Add enum value, simple config change    |
| **2 SP**     | 3-4 hours                | (~3-4h)    | Write 5-8 unit tests, basic validation  |
| **3 SP**     | 4-8 hours                | (~4-8h)    | Simple CRUD endpoint, basic entity      |
| **5 SP**     | 1-2 days                 | (~1-2d)    | Complex endpoint with business logic    |
| **8 SP**     | 2-3 days                 | (~2-3d)    | Auth flow, complex validation           |
| **13 SP**    | 1 week                   | (~1w)      | Complete module with full test coverage |
| **21 SP**    | 2 weeks                  | (~2w)      | Major feature with integration          |
| **34 SP**    | 3 weeks                  | (~3w)      | Multiple related features (Epic-level)  |

> **Note:** Time assumes AI-assisted development (GitHub Copilot, Claude, etc.). Without AI assistance, multiply time estimates by 2-3x.
>
> **Velocity Tracking:** After completing 2-3 features, compare actual time vs estimates to calibrate your team's velocity. Adjust remaining estimates accordingly.
---
## Epic Estimation Guidelines
---
- **Foundation Epic:** 13-21 SP (depends on framework complexity)
- **Data Layer Epic:** 3-5 SP per simple entity, 8-13 SP per complex entity
- **Auth Epic:** 8 SP (basic JWT) to 21 SP (multi-provider + RBAC + 2FA)
- **Business Epics:** Varies by domain complexity
- **Integration Epic:** 5-8 SP per external service
- **Operations Epic:** 13 SP (standard CI/CD + monitoring)
---
## Feature Size Classification
---
| Size        | Task Count | Phases  | Characteristics                                    |
| ----------- | ---------- | ------- | -------------------------------------------------- |
| **SMALL**   | 1-10 tasks | 1 phase | Single file changes, isolated                      |
| **MEDIUM**  | 11-40      | 2-4     | Multiple files, some cross-layer dependencies      |
| **COMPLEX** | 41-80      | 4-8     | Multiple modules, integration, extensive testing   |
| **LARGE**   | 81+        | 8-N     | Feature affecting entire system, major refactoring |
---
## How to Use Hybrid Estimation
---
- Each task shows **both** Story Points and time: `• 2 SP (~3-4h)`
- Story Points measure **complexity** (stable across teams)
- Time estimates measure **effort** (varies by team velocity)
- Track both to improve estimation accuracy over time



