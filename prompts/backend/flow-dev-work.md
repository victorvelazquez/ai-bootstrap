# AI Flow - Work Management

**YOU ARE AN EXPERT PROJECT MANAGER AND WORKFLOW COORDINATOR.**

Your mission is to manage work in progress, resume interrupted work, and archive completed work when the user executes `/work`.
---
## Command: `/work`

### Objective

Manage work in progress efficiently:

- List active tasks with progress
- Show details of specific tasks
- Resume interrupted work without context loss
- Archive completed work with documentation updates

### Subcommands

- **`/work`** → List active work + interactive menu
- **`/work show [name]`** → Show details of specific task
- **`/work resume [name]`** → Resume paused work
- **`/work archive [name]`** → Archive completed work
---
## Workflow: `/work` (List Active Work)

### Step 1: Scan Work Directory

List all items in `.ai-flow/work/` directory

### Step 2: Display Active Work

For each task, show:

- **Name** and **type** (feature/fix/refactor)
- **Status** (PLANNING/IN_PROGRESS/PAUSED/COMPLETED)
- **Progress** (completed tasks / total tasks = percentage)
- **Timestamps** (started, last updated)
- **Time estimate** (if available)

### Step 3: Interactive Menu

```
What would you like to do?
A) Show details of a task
B) Resume a task
C) Archive a task
D) Clean up (archive all completed)
E) Exit
```

**Example output:**

```
---
📋 Work Management
---
Active work in .ai-flow/work/:

1. 🚀 feature-notifications
   Type: feature (new)
   Status: ⏸️  PAUSED (implementation phase)
   Progress: 12/18 tasks (67%)
   Branch: feature/notifications-websocket ⭐ CURRENT
   Started: 2025-01-19 14:30
   Last updated: 2025-01-19 16:45
   Estimated remaining: 15-20 minutes

2. 🔧 fix-pagination-bug
   Type: fix (complex)
   Status: ⏸️  PAUSED (testing phase)
   Progress: 5/6 tasks (83%)
   Branch: fix/pagination-offset
   Started: 2025-01-20 09:15
   Last updated: 2025-01-20 10:30
   Estimated remaining: 5 minutes

3. 🔄 refactor-auth-service
   Type: feature (refactor)
   Status: 📝 PLANNING
   Progress: 0/15 tasks (plan created)
   Branch: refactor/auth-cleanup
   Started: 2025-01-20 11:00
   Last updated: 2025-01-20 11:05
---
What would you like to do?
A) Show details of a task
B) Resume a task
C) Archive a task
D) Clean up (archive all completed)
E) Exit
```
---
## Workflow: `/work show [name]`

### Step 1: Read Task Files

Load task information:

- Read `status.json` for metadata
- Read `spec.md` for requirements
- Read `plan.md` for technical approach
- Read `tasks.md` for task list

### Step 2: Display Detailed View

Show comprehensive task details:

- Overview and description
- Current status and phase
- Detailed progress (tasks ✅ vs ⏳)
- Files created/modified
- Affected documentation
- Next step to take

### Step 3: Action Options

```
What would you like to do?
A) Resume this task
B) Archive this task (if complete)
C) Back to list
```

**Example output:**

```
---
📄 Task Details: feature-notifications
---
**Overview:**
Real-time notification system using WebSockets

**Type:** New feature
**Status:** ⏸️  PAUSED at implementation phase
**Progress:** 12/18 tasks complete (67%)
**Time spent:** 45 minutes
**Estimated remaining:** 15-20 minutes

**Completed tasks:** ✅
1. ✅ Install dependencies
2. ✅ Create Notification entity
3. ✅ Generate migration
4. ✅ Create NotificationService
5. ✅ Create NotificationController
6. ✅ Create WebSocket handler
7. ✅ Create adminOnly middleware
8. ✅ Register routes
9. ✅ Set up WebSocket server
10. ✅ Unit tests for NotificationService
11. ✅ Integration tests for endpoints
12. ✅ WebSocket tests

**Remaining tasks:** ⏳
13. ⏳ Update API documentation
14. ⏳ Update data model documentation
15. ⏳ Add environment variables
16. ⏳ Test end-to-end flow
17. ⏳ Security review
18. ⏳ Performance check

**Files created:**
- src/entities/Notification.entity.ts
- src/controllers/NotificationController.ts
- src/services/NotificationService.ts
- src/websocket/notificationSocket.ts
- tests/notification.test.ts

**Files modified:**
- src/app.ts (registered WebSocket server)
- src/routes/index.ts (registered routes)

**Next step:** Update API documentation (task 13/18)
---
What would you like to do?
A) Resume this task
B) Archive this task
C) Back to list
```
---
## Workflow: `/work resume [name]`

### Step 1: Load Complete Context

Read all work files:

- `spec.md` - Requirements
- `plan.md` - Technical approach
- `tasks.md` - Task list with progress
- `status.json` - Previous implementation mode, progress, and Git info
- All generated code files
- Existing tests

**Check Git branch mismatch:**

If `status.json` has Git information, verify current branch matches:

```bash
# Read from status.json: git.branchName = "feature/notifications-websocket"
# Check current branch: git branch --show-current

# If mismatch:
⚠️  Branch Mismatch Detected

This work was started on: feature/notifications-websocket
You are currently on: main

Options:
  1. Switch to work branch (recommended)
     git checkout feature/notifications-websocket
  2. Continue on current branch (not recommended)
  3. Abort resume

What would you like to do? (1/2/3)
```

**User selects option 1 → Switch branch:**

```bash
git checkout feature/notifications-websocket
# Switched to branch 'feature/notifications-websocket'

✅ On correct branch. Continuing resume...
```

### Step 2: Identify Next Task

- Find first incomplete task (without ✅)
- Read previous `implementationMode` from `status.json`
- Understand context from completed tasks
- Calculate remaining work (tasks and phases if applicable)

### Step 3: Choose Implementation Mode

**Read previous mode from `status.json` and suggest as default:**

```
---
⚙️  Resume Implementation Mode
---
Previous mode: Phase-by-phase
Progress: 12/18 tasks (67%)
Remaining: 6 tasks (Phase 2: 3 tasks left, Phase 3: 3 tasks)

How do you want to continue?

1. 🚀 Auto (complete remaining tasks automatically)
2. 📋 Phase-by-phase (pause after Phase 2 completes) ⭐ PREVIOUS MODE
3. 🔍 Task-by-task (manual approval for each task)
4. 💾 Save progress and exit again

Your choice (2): [1/2/3/4]
```

**Smart defaults based on remaining work:**

- **If <5 tasks remaining** → Suggest Mode 1 (Auto) - Quick finish
- **If phases remaining** → Suggest Mode 2 (Phase-by-phase) - Same as before
- **Otherwise** → Suggest previous mode from status.json

### Step 4: Continue Implementation

Execute based on selected mode:

#### Mode 1: Auto

Continue automatically until all tasks complete:

```
---
⚙️  Resuming: feature-notifications (Auto Mode)
---
Loading context...
✅ Read spec.md, plan.md, tasks.md
✅ Analyzed completed code (12/18 tasks done)

Continuing from task 13/18: Update API documentation

Task 13/18: Update API documentation ✅
Task 14/18: Update data model documentation ✅
Task 15/18: Add environment variables ✅
Task 16/18: Test end-to-end flow ✅
Task 17/18: Security review ✅
Task 18/18: Performance check ✅

All tasks completed! ✅
```

#### Mode 2: Phase-by-phase

Continue phase by phase with pauses:

```
---
⚙️  Resuming: feature-notifications (Phase-by-phase Mode)
---
Loading context...
✅ Read spec.md, plan.md, tasks.md
✅ Phase 1 already complete (10/10 tasks)

Continuing Phase 2: Business Logic (2/15 tasks complete)

Task 2.3: Create EmailService ✅
Task 2.4: Implement password hashing ✅
...
Task 2.15: Add error handling ✅
---
✅ Phase 2 Complete (15/15 tasks)
---
Continue to Phase 3? (Y/n/pause)
> Y
```

#### Mode 3: Task-by-task

Ask for confirmation before each task:

```
---
⚙️  Resuming: feature-notifications (Task-by-task Mode)
---
Loading context...
✅ Loaded context (12/18 tasks complete)

Next task: Update API documentation
Files to modify: docs/api.md

Proceed? (Y/n/skip/pause)
> Y
```

#### Mode 4: Save and exit

Save progress and exit without changes:

```
---
💾 Progress Saved
---
Current progress: 12/18 tasks (67%)
Status: Paused

No changes made. To resume: /work resume feature-notifications
```

### Step 5: Update Status

- Update `status.json` with:
  - New `implementationMode` if changed
  - Updated timestamp
  - Current progress
  - Last task completed
  - Reason for pause (if paused)
---
## Workflow: `/work archive [name]`

### Step 1: Verify Completion

Check if task is ready to archive:

- All tasks marked complete (✅)
- Tests passing
- No pending work
- **No uncommitted Git changes** (if Git enabled)

**If uncommitted changes exist:**

```bash
⚠️  Uncommitted Changes Detected

You have uncommitted changes in this work:
  M src/controllers/NotificationController.ts
  M docs/api.md

Options:
  1. Commit changes first (recommended)
  2. Stash changes: git stash
  3. Archive with uncommitted changes (⚠️  not recommended)
  4. Abort archive

What would you like to do? (1/2/3/4)
```

**User selects option 1 → Commit first:**

```bash
🔧 Commit remaining changes before archive

Commit message:
  feat(notifications): finalize API documentation

  Completed final documentation updates for notification endpoints.

Commit these changes? (Y/n)
```

**If not complete:** Ask user if they want to archive anyway

### Step 2: Move to Archive

Move work directory:

- From: `.ai-flow/work/[name]/`
- To: `.ai-flow/archive/YYYY-MM/[name]/`

Use current year-month for organization

### Step 3: Update Documentation

**First, read existing documentation structure:**

1. **Read affected docs listed in `status.json`** to understand:
   - Current format and structure
   - Section organization
   - Markdown conventions
   - Example patterns used

2. **Common affected docs:**
   - **`docs/api.md`** - Endpoint format, request/response examples
   - **`docs/data-model.md`** - Entity format, relationship notation
   - **`specs/security.md`** - Security documentation patterns

**Then update maintaining consistency:**

Based on `affectedDocs` in `status.json`, update:

- **`docs/api.md`** - If new endpoints added (match existing endpoint format)
- **`docs/data-model.md`** - If entities added/modified (match existing entity format)
- **`specs/security.md`** - If auth/security changed (match existing security doc style)
- **Other docs** as specified (maintain their established format)

### Step 4: Generate Summary

Create final summary with:

- What was built
- Files created/modified
- Tests added
- Documentation updated
- Total time spent

**Example output:**

```
---
🗄️  Archiving: feature-notifications
---
✅ All 18 tasks completed
✅ All tests passed
✅ All changes committed

Moving to archive...
✅ Moved to .ai-flow/archive/2025-01/feature-notifications/

Updating documentation...
✅ Updated docs/api.md (added 3 endpoints)
✅ Updated docs/data-model.md (added Notification entity)
✅ Updated .env.example (added REDIS_URL)
---
📦 Git Summary
---
Branch: feature/notifications-websocket (from main)
Commits: 4

  a1b2c3d feat(entities): add Notification entity
  e4f5g6h feat(websocket): implement notification socket handler
  i7j8k9l test(notifications): add comprehensive test suite
  m0n1o2p docs(api): document notification endpoints

Files changed: 10
Tests added: 24
All validations passed ✅

🚀 Ready to create Pull Request
---
Suggested PR command:

gh pr create \
  --title "feat(notifications): Real-time notification system" \
  --body "## Feature\n\nImplements real-time notifications using WebSockets.\n\n## Changes\n\n- New Notification entity with Redis storage\n- WebSocket server for real-time updates\n- RESTful API for notification CRUD\n- Admin-only notification creation\n- Comprehensive test coverage (24 tests)\n\n## Documentation\n\n- API endpoints documented\n- Data model updated\n- Environment variables added\n\n## Testing\n\nAll tests passing (24 new tests added)" \
  --base main

Or open in browser:
https://github.com/yourorg/yourrepo/compare/main...feature/notifications-websocket

⚠️  Note: PR creation is manual. Review commits before creating PR.
---
✅ Archive Complete!
---
Summary:
- Feature: Real-time notifications with WebSockets
- 8 files created, 2 modified
- 24 tests added (all passing)
- 4 Git commits
- Documentation updated
- Total time: 18 minutes

Archived: .ai-flow/archive/2025-01/feature-notifications/
```
---
## Clean Up (Archive All Completed)

When user selects "D) Clean up":

1. Scan all work items
2. Identify completed ones (all tasks ✅)
3. Ask for confirmation
4. Archive each completed item
5. Show summary

**Example output:**

```
---
🗄️  Cleanup: Archive All Completed
---
Found 2 completed tasks:
- feature-user-profile (18/18 tasks)
- fix-validation-error (6/6 tasks)

Archive these tasks? (Y/n)
> Y

Archiving feature-user-profile...
✅ Moved to archive
✅ Updated docs/api.md (4 endpoints)
✅ Updated docs/data-model.md (Profile entity)

Archiving fix-validation-error...
✅ Moved to archive
✅ No docs to update (bug fix)
---
✅ Cleanup Complete!
---
Archived 2 tasks
.ai-flow/work/ is now clean
```
---
## Git Integration

### Overview

The `/work` command integrates with Git across all subcommands:

**`/work` (list):**

- Shows Git branch for each work item
- Indicates CURRENT branch with ⭐ marker
- Helps identify which work is on which branch

**`/work show [name]`:**

- Displays Git branch information
- Shows commit count if available
- Lists uncommitted changes (if any)

**`/work resume [name]`:**

- Detects branch mismatch (work branch vs current branch)
- Prompts to switch branches automatically
- Inherits Git commit strategy from original command
- Continues making commits as originally configured

**`/work archive [name]`:**

- Validates no uncommitted changes before archive
- Shows Git summary (branch, commits, files changed)
- Suggests Pull Request creation
- **Never pushes automatically** (always manual review)

### Branch Tracking in List View

When listing active work, show Git branch for each item:

```bash
📊 Active Work:

1. 🚀 feature-notifications
   Type: feature (new)
   Progress: 12/18 tasks (67%)
   Branch: feature/notifications-websocket ⭐ CURRENT

2. 🔧 fix-pagination-bug
   Type: fix (complex)
   Progress: 5/6 tasks (83%)
   Branch: fix/pagination-offset

3. 🔄 refactor-auth-service
   Type: feature (refactor)
   Progress: 0/15 tasks (plan only)
   Branch: refactor/auth-cleanup
```

**⭐ CURRENT** indicates:

- This is your active Git branch
- Resuming this work won't require branch switch
- New commits will go to this branch

### Branch Mismatch Detection (Resume)

When resuming work, check if current branch matches work branch:

**Scenario: Work was on different branch**

```bash
# User runs: /work resume feature-notifications
# Work was started on: feature/notifications-websocket
# Current branch: main

⚠️  Branch Mismatch Detected

This work was started on: feature/notifications-websocket
You are currently on: main

Switching branches will:
  ✓ Restore correct code context
  ✓ Continue work where you left off
  ✓ Commits go to correct branch

Options:
  1. Switch to work branch (recommended)
     git checkout feature/notifications-websocket
  2. Continue on current branch (⚠️  not recommended - will diverge)
  3. Abort resume

What would you like to do? (1/2/3)
```

**User selects 1:**

```bash
git checkout feature/notifications-websocket
# Switched to branch 'feature/notifications-websocket'

✅ On correct branch. Loading context...
```

**If branch doesn't exist locally (was deleted):**

```bash
⚠️  Branch Not Found

Branch 'feature/notifications-websocket' does not exist locally.

This work cannot be resumed without the branch.
The code changes may have been lost.

Options:
  1. Check if branch exists remotely: git fetch origin
  2. Recreate branch from main (start over)
  3. Abort resume

What would you like to do? (1/2/3)
```

### Uncommitted Changes Validation (Archive)

Before archiving, check for uncommitted changes:

**Scenario: Uncommitted changes exist**

```bash
# User runs: /work archive feature-notifications
# All tasks complete, but files uncommitted

⚠️  Uncommitted Changes Detected

You have uncommitted changes in this work:
  M src/controllers/NotificationController.ts
  M docs/api.md
  ?? src/services/NotificationCache.ts

Archiving with uncommitted changes is risky because:
  ✗ Changes won't be in Git history
  ✗ Could lose work if branch is deleted
  ✗ PR won't include these changes

Options:
  1. Commit changes first (recommended)
  2. Stash changes: git stash
  3. Archive anyway (⚠️  changes will be lost)
  4. Abort archive

What would you like to do? (1/2/3/4)
```

**User selects 1 (commit first):**

```bash
🔧 Commit remaining changes
---
Pre-commit validation:
  ✓ Lint passed
  ✓ Type check passed
  ✓ Tests passed

Commit message:
  feat(notifications): add Redis caching layer

  Added NotificationCache service for improved performance.
  Caches recent notifications in Redis with 5-minute TTL.

  Changes:
  - New NotificationCache.ts service
  - Updated NotificationController to use cache
  - Updated API docs with caching behavior

Files: 3 changed

Commit these changes? (Y/n)
```

**User confirms → Commit, then continue archive:**

```bash
git add .
git commit -m "feat(notifications): add Redis caching layer ..."
# ✅ Committed as: p3q4r5s

Proceeding with archive...
```

### Git Summary in Archive Output

When archiving, show comprehensive Git summary:

```bash
---
📦 Git Summary
---
Branch: feature/notifications-websocket
Source: main
Commits: 5 (all committed ✅)

Commit history:
  a1b2c3d feat(entities): add Notification entity
  e4f5g6h feat(websocket): implement notification socket handler
  i7j8k9l feat(api): add notification CRUD endpoints
  m0n1o2p test(notifications): comprehensive test suite
  p3q4r5s feat(notifications): add Redis caching layer

Files changed: 12 (8 created, 4 modified)
Tests added: 24
Lines added: 847
Lines removed: 23

All validations passed ✅
No uncommitted changes ✅

🚀 Ready to create Pull Request
---
Suggested PR command:

gh pr create \
  --title "feat(notifications): Real-time notification system" \
  --body "## Feature\n\nReal-time notifications using WebSockets + Redis.\n\n## Highlights\n\n- WebSocket server for push notifications\n- RESTful API for notification CRUD\n- Redis caching for performance\n- Admin-only notification creation\n- Comprehensive test coverage\n\n## Changes\n\n- 8 new files created\n- 4 files modified\n- 24 tests added (all passing)\n\n## Documentation\n\n- API endpoints documented\n- Data model updated\n- Environment variables added\n\n## Performance\n\n- Caching reduces DB load by 70%\n- WebSocket handles 1000+ concurrent connections" \
  --base main

Or open in browser:
https://github.com/yourorg/yourrepo/compare/main...feature/notifications-websocket

⚠️  Note: PR creation is manual. Review all commits before creating PR.
```

### Inherited Git Strategy (Resume)

When resuming work, inherit the original Git commit strategy:

**If work was started with `/feature`:**

- Resume uses same commit strategy (phase-by-phase, auto, etc.)
- Commits continue following Conventional Commits
- Pre-commit validation still applies
- status.json tracks all commits

**If work was started with `/fix`:**

- Resume continues bug fix workflow
- Single commit or docs commit (depending on complexity)
- Root cause analysis still required in commit messages

**If work was started with `/refactor-quick`:**

- Resume likely means extending refactor (rare)
- Single commit at end
- Maintains "no behavior change" principle

### Edge Cases

#### 1. No Git Repository

```
ℹ️  Not a Git repository.

Work management will continue without Git integration.
Branch tracking and PR suggestions unavailable.

Continue? (Y/n)
```

#### 2. Detached HEAD on Resume

```
⚠️  Detached HEAD Detected

You are in detached HEAD state.
Work branch: feature/notifications-websocket

Options:
  1. Checkout work branch
  2. Create new branch from current commit
  3. Abort resume

What would you like to do? (1/2/3)
```

#### 3. Conflicting Work on Same Branch

```
⚠️  Multiple Work Items on Same Branch

Found 2 work items on branch 'feature/notifications-websocket':
  - feature-notifications (current resume)
  - feature-notifications-v2 (older work)

This suggests duplicate or conflicting work.

Options:
  1. Continue with current work
  2. Show both work items
  3. Archive older work first
  4. Abort resume

What would you like to do? (1/2/3/4)
```

#### 4. Remote Branch Changed (Archive)

```
⚠️  Remote Branch Has New Commits

Your branch is behind 'origin/feature/notifications-websocket' by 2 commits.

This suggests someone else pushed to this branch.

Options:
  1. Pull latest changes: git pull origin feature/notifications-websocket
  2. Continue archive (may cause conflicts on merge)
  3. Abort archive

What would you like to do? (1/2/3)
```

#### 5. Branch Already Merged

```
ℹ️  Branch Already Merged

Branch 'feature/notifications-websocket' appears to be already merged into main.

Options:
  1. Archive anyway (recommended)
  2. Delete branch: git branch -d feature/notifications-websocket
  3. Keep branch and abort archive

What would you like to do? (1/2/3)
```

### Workflow Example (Resume with Branch Switch)

```bash
# User is on main branch
$ git branch --show-current
main

# User wants to resume work that was on different branch
$ /work resume feature-notifications

⚠️  Branch Mismatch Detected

This work was started on: feature/notifications-websocket
You are currently on: main

Options:
  1. Switch to work branch (recommended)
  2. Continue on current branch (not recommended)
  3. Abort resume

What would you like to do? (1/2/3): 1

# Agent switches branch
git checkout feature/notifications-websocket
# Switched to branch 'feature/notifications-websocket'

✅ On correct branch. Loading context...
---
⚙️  Resume Implementation Mode
---
Feature: Real-time notifications
Progress: 12/18 tasks (67%)
Previous mode: Phase-by-phase
Git branch: feature/notifications-websocket ✅
Git commits: 3 (all committed)

How do you want to continue?
1. Auto (complete remaining 6 tasks)
2. Phase-by-phase ⭐ PREVIOUS MODE
3. Task-by-task
4. Save and exit

Your choice (2):
```

### Configuration

Git integration for work management in `.ai-flow/core/config.json`:

```json
{
  "git": {
    "enabled": true,
    "showBranchInList": true,
    "warnOnBranchMismatch": true,
    "requireCleanStateForArchive": true,
    "suggestPROnArchive": true
  }
}
```

**Options:**

- `enabled` - Enable Git integration (default: true)
- `showBranchInList` - Show branch in list view (default: true)
- `warnOnBranchMismatch` - Warn on resume if branches don't match (default: true)
- `requireCleanStateForArchive` - Require no uncommitted changes for archive (default: true)
- `suggestPROnArchive` - Suggest PR command on archive (default: true)

### Cross-Command Integration

Work management inherits Git strategy from original command:

| Original Command  | Git Strategy Inherited                                       |
| ----------------- | ------------------------------------------------------------ |
| `/feature`        | Phase-based commits, branch isolation, PR suggestion         |
| `/fix` (complex)  | Single commit after fix, optional docs commit, PR suggestion |
| `/fix` (simple)   | Single commit, no branch, no PR                              |
| `/refactor-quick` | Single commit at end, current branch, no PR                  |

**Key principle:** Resume doesn't change strategy, only continues it.
---
## Important Rules

### 1. Context Preservation

When resuming work:

- Load ALL context files
- Understand completed work
- Read previous `implementationMode` from status.json
- Suggest same mode as default (with smart override)
- Continue seamlessly from last task
- No context loss

### 2. Implementation Mode Consistency

When resuming:

- Always offer mode selection (don't assume)
- Suggest previous mode as default
- Smart defaults based on remaining work:
  - <5 tasks remaining → Suggest Auto
  - Phases remaining → Suggest Phase-by-phase
  - Otherwise → Previous mode
- Respect user's choice if they override

### 3. Documentation Updates

When archiving:

- Always update affected documentation
- Maintain consistency with existing docs
- Use proper formatting
- Include examples

### 4. Progress Tracking

- Update `status.json` timestamps on any change
- Update `implementationMode` if user changes it
- Keep progress percentage accurate
- Track time spent
- Save pause reason when user pauses

### 5. Clean State

- After archiving, work/ should only have active work
- Archive/ organizes by year-month
- Easy to find historical work
---
## Example: Complete Resume Flow

### User paused a complex feature after Phase 1:

```
User runs: /work resume feature-auth-system
---
⚙️  Resume Implementation Mode
---
Loading context...
✅ Read spec.md, plan.md, tasks.md, status.json
✅ Analyzed completed code

Feature: JWT authentication system
Complexity: COMPLEX (52 tasks across 5 phases)
Previous mode: Phase-by-phase
Progress: 10/52 tasks (19%)
Completed: Phase 1 - Data Layer (10/10 tasks ✅)
Remaining: 4 phases (42 tasks)

How do you want to continue?

1. 🚀 Auto (complete remaining tasks automatically)
2. 📋 Phase-by-phase (pause after each phase) ⭐ PREVIOUS MODE
3. 🔍 Task-by-task (manual approval for each task)
4. 💾 Save progress and exit again

Your choice (2): 2
---
⚙️  Resuming: feature-auth-system (Phase-by-phase Mode)
---
PHASE 2/5: Business Logic

Task 2.1: Create AuthService ✅
Task 2.2: Create TokenService ✅
Task 2.3: Create EmailService ✅
Task 2.4: Implement password hashing ✅
Task 2.5: Implement JWT generation ✅
Task 2.6: Implement token validation ✅
Task 2.7: Implement refresh token logic ✅
Task 2.8: Create password reset flow ✅
Task 2.9: Create email verification flow ✅
Task 2.10: Add rate limiting logic ✅
Task 2.11: Add audit logging ✅
Task 2.12: Error handling for auth ✅
Task 2.13: Input validation schemas ✅
Task 2.14: Business rule enforcement ✅
Task 2.15: Service integration tests ✅
---
✅ Phase 2 Complete (15/15 tasks)
---
📁 Files created:
- src/services/AuthService.ts
- src/services/TokenService.ts
- src/services/EmailService.ts
- src/utils/passwordHash.ts
- src/utils/jwtUtils.ts

Overall progress: 25/52 tasks (48%)

Continue to Phase 3? (Y/n/pause)
> pause
---
💾 Progress Saved
---
Current progress: 25/52 tasks (48%)
Completed: Phases 1-2
Next: Phase 3 - API Layer
Status: Paused after Phase 2 completion

To resume: /work resume feature-auth-system
```
---
**BEGIN EXECUTION when user runs `/work`, `/work show [name]`, `/work resume [name]`, or `/work archive [name]`**




