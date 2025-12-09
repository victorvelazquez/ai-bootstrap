# Migration Guide: AI Flow v1.x → v2.0.0

## 🔄 Breaking Changes

AI Flow v2.0.0 introduces a **complete command renaming** for better clarity and consistency.

### Command Name Changes

All slash commands now follow the structured naming convention: `/flow-{GROUP}-{ACTION}[-NUMBER]`

#### Documentation Commands (Group: `docs`)

| v1.x Command | v2.0.0 Command | Description |
|--------------|----------------|-------------|
| `/bootstrap` | `/flow-docs-gen` | Generate all documentation (8-phase bootstrap) |
| `/bootstrap-phase0-context` | `/flow-docs-gen-phase-0` | Phase 0: Context Discovery |
| `/bootstrap-phase1-business` | `/flow-docs-gen-phase-1` | Phase 1: Discovery & Business |
| `/bootstrap-phase2-data` | `/flow-docs-gen-phase-2` | Phase 2: Data Architecture |
| `/bootstrap-phase3-architecture` | `/flow-docs-gen-phase-3` | Phase 3: System Architecture |
| `/bootstrap-phase4-security` | `/flow-docs-gen-phase-4` | Phase 4: Security & Auth |
| `/bootstrap-phase5-standards` | `/flow-docs-gen-phase-5` | Phase 5: Code Standards |
| `/bootstrap-phase6-testing` | `/flow-docs-gen-phase-6` | Phase 6: Testing Strategy |
| `/bootstrap-phase7-operations` | `/flow-docs-gen-phase-7` | Phase 7: Operations & Deployment |
| `/docs-update` | `/flow-docs-sync` | Sync docs with code changes |
| `/backend-docs-update` | `/flow-docs-sync-be` | Backend only (fullstack) |
| `/frontend-docs-update` | `/flow-docs-sync-fe` | Frontend only (fullstack) |

#### Development Workflow Commands (Group: `dev`)

| v1.x Command | v2.0.0 Command | Description |
|--------------|----------------|-------------|
| `/feature` | `/flow-dev-feature` | Create/modify features |
| `/fix` | `/flow-dev-fix` | Fix bugs with TDD |
| `/refactor-quick` | `/flow-dev-refactor` | Quick refactorings |
| `/review` | `/flow-dev-review` | Multi-aspect code review |
| `/work` | `/flow-dev-work` | Manage work in progress |

## 🚀 Migration Path

### For Existing Projects (Already Using AI Flow v1.x)

If you already initialized your project with AI Flow v1.x, you have **two options**:

#### Option A: Manual Update (Recommended for Active Projects)

1. **Upgrade AI Flow globally:**
   ```bash
   npm install -g ai-flow@2.0.0
   ```

2. **Re-run initialization in your project:**
   ```bash
   cd your-project
   ai-flow init . --ai your-tool
   ```
   
   This will:
   - ✅ Update all slash command files to new names
   - ✅ Preserve your existing `.ai-flow/docs/` and `.ai-flow/specs/` (documentation intact)
   - ✅ Update config to v2.0.0

3. **Start using new commands:**
   ```bash
   # Old: /bootstrap
   # New:
   /flow-docs-gen
   
   # Old: /feature
   # New:
   /flow-dev-feature
   ```

#### Option B: Fresh Start (For New Projects or Clean Slate)

1. **Delete `.ai-flow` directory:**
   ```bash
   rm -rf .ai-flow .github/prompts .claude .cursor .gemini
   ```

2. **Upgrade and reinitialize:**
   ```bash
   npm install -g ai-flow@2.0.0
   ai-flow init . --ai your-tool
   /flow-docs-gen
   ```

### For New Projects

Simply install AI Flow v2.0.0 and use the new command names:

```bash
npm install -g ai-flow@2.0.0
ai-flow init my-project --ai copilot
cd my-project
/flow-docs-gen
```

## 📝 Quick Reference

### Before (v1.x)
```bash
/bootstrap                    # Generate docs
/bootstrap-phase1-business    # Run Phase 1
/docs-update                  # Sync docs
/feature                      # Add feature
/fix                          # Fix bugs
/review                       # Review code
```

### After (v2.0.0)
```bash
/flow-docs-gen                # Generate docs
/flow-docs-gen-phase-1        # Run Phase 1
/flow-docs-sync               # Sync docs
/flow-dev-feature             # Add feature
/flow-dev-fix                 # Fix bugs
/flow-dev-review              # Review code
```

## 🔧 Fullstack Projects

For fullstack projects, backend/frontend commands now have clearer prefixes:

```bash
# v1.x
/backend-bootstrap
/frontend-bootstrap
/backend-docs-update
/frontend-docs-update

# v2.0.0
/backend-flow-docs-gen
/frontend-flow-docs-gen
/flow-docs-sync-be
/flow-docs-sync-fe
```

## ❓ Need Help?

- **Documentation:** [README.md](./README.md) | [GETTING-STARTED.md](./GETTING-STARTED.md)
- **Issues:** https://github.com/victorvelazquez/ai-flow/issues
- **Discussions:** https://github.com/victorvelazquez/ai-flow/discussions

## 📌 Notes

- **No backward compatibility:** Old command names (`/bootstrap`, `/feature`, etc.) will not work in v2.0.0
- **File structure unchanged:** `.ai-flow/` directory structure remains the same
- **Documentation preserved:** Your generated documentation in `.ai-flow/docs/` and `.ai-flow/specs/` is **not affected**
- **Templates unchanged:** Template processing logic remains identical
