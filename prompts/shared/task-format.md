# Task Format Reference (Spec-Kit Inspired)

> **Canonical task format for all AI Flow development workflows.**
>
> This file defines the standard task format used in Phase 9 (Roadmap), /feature, /fix, and all development commands.
---
## Standard Task Format
---
**Every task must follow this format:**

```markdown
- [ ] [TaskID] [Optional:P] [Optional:StoryTag] Description • SP (~time)
      File: exact/path/to/file.ts
      Dependencies: T001, T002 (or "None")
```
---
## Format Components
---
| Component       | Required | Description                                                              |
| --------------- | -------- | ------------------------------------------------------------------------ |
| `[TaskID]`      | ✅       | Sequential ID in execution order (T001, T002, ..., T099, T100)           |
| `[P]`           | ❌       | Parallelization marker - ONLY for tasks that can run simultaneously      |
| `[StoryTag]`    | ❌       | Links task to user story ([US1], [US2]) - only in story-based phases     |
| `Description`   | ✅       | What to implement (specific, LLM-completable without additional context) |
| `• SP (~time)`  | ✅       | Hybrid estimation - Story Points + time (e.g., "2 SP (~3-4h)")           |
| `File:`         | ✅       | Exact file path where work happens                                       |
| `Dependencies:` | ✅       | Which tasks must complete first (even if "None")                         |
---
## Task Sequencing Rules
---
1. **Tests BEFORE implementation** (TDD approach)
2. **Models → Services → Controllers → Endpoints** (layer dependency order)
3. **Core utilities BEFORE features** that use them
4. **Database migrations BEFORE data access code**
5. **Interfaces BEFORE implementations**
---
## Parallelization Rules ([P] Marker)
---
### ✅ Use [P] When:

- Tasks target **different files**
- No shared dependencies between tasks
- Can run simultaneously (e.g., independent entities, different modules)

### ❌ Don't Use [P] When:

- Task depends on another incomplete task
- Same file is modified by multiple tasks
- Shared resource (DB migration, config file, shared service)
---
## Complete Task Example
---
```markdown
- [ ] [T042] [P] Write unit tests for Product entity validation (12 tests) • 2 SP (~3-4h)
      File: tests/unit/entities/Product.entity.spec.ts
      Tests: price validation, stock constraints, name required, category FK
      Dependencies: None (can run parallel with other test tasks)
```
---
## Feature Template
---
```markdown
### Feature {{NUMBER}}: {{FEATURE_NAME}} • {{SP}} SP (~{{TIME}})

**Scope:** {{ENTITY}} entity + {{ENDPOINT_COUNT}} endpoints + {{TEST_COUNT}} tests

**Tasks:**

- [ ] T0XX [P] Write {{ENTITY}} entity tests • 2 SP (~3-4h) → tests/unit/{{ENTITY}}.spec.ts
- [ ] T0YY Create {{ENTITY}} entity • 2 SP (~3-4h) → src/entities/{{ENTITY}}.ts
- [ ] T0ZZ Create I{{REPOSITORY}} interface • 1 SP (~1-2h) → src/repositories/I{{REPOSITORY}}.ts
- [ ] T0AA Implement {{REPOSITORY}} • 2 SP (~3-4h) → src/repositories/{{REPOSITORY}}.ts (after T0YY, T0ZZ)
- [ ] T0BB Implement {{SERVICE}} business logic • 3 SP (~4-8h) → src/services/{{SERVICE}}.ts (after T0AA)
- [ ] T0CC Create {{CONTROLLER}} endpoints • 2 SP (~3-4h) → src/controllers/{{CONTROLLER}}.ts (after T0BB)
- [ ] T0DD [P] Write integration tests • 2 SP (~3-4h) → tests/integration/{{CONTROLLER}}.spec.ts
- [ ] T0EE [P] Update API docs • 1 SP (~1h) → docs/api.md

**Parallel:** T0XX, T0DD, T0EE can run together

**Done when:** All endpoints work + tests pass + coverage ≥ {{COVERAGE}}%

**Start:** `/feature new "{{FEATURE_NAME}}"`
```



