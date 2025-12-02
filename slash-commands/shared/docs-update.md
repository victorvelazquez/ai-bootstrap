# Documentation Update

Execute documentation synchronization: Detect code changes and automatically update affected documentation files.

## Instructions for the AI Assistant

Read **Documentation Update Command** from `.ai-bootstrap/prompts/backend/docs-update.md` and execute the change detection and update process, regardless of the AI tool.

**Time Estimate:** 2-5 minutes (automated detection + user confirmation)

**Command Objective:** Keep project documentation synchronized with code changes by detecting differences and updating affected documents automatically.

**IMPORTANT:** This command compares current code state with the last documented state stored in `.ai-bootstrap/analysis.json`. If this file doesn't exist, it will run a full Phase 0 analysis first.

**Process:**

1. Check for `.ai-bootstrap/analysis.json` (create if missing)
2. Detect changes in codebase (endpoints, entities, dependencies, architecture, configuration)
3. Show report of documents that need updating
4. Ask for confirmation to update all detected documents
5. Update documents incrementally (only changed sections)
6. Update `analysis.json` with new state

**After Completion:**

- Present summary of updated documents
- Confirm `analysis.json` was updated
- User can review changes and make manual adjustments if needed

---

**BEGIN DOCUMENTATION UPDATE**

Read `.ai-bootstrap/prompts/backend/docs-update.md` and execute the documentation update process.
