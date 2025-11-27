# Pre-PR Quality Checklist

Execute comprehensive quality checks before creating a pull request. Automate verification of code quality, documentation, security, tests, and commit hygiene.

**Display Behavior:** Show step title (`## Step N/8: Name`) in your response BEFORE executing commands in that step.

---

## Workflow Overview

Execute all steps sequentially. Stop only if critical issues are found.

| Step | Action       | Commands                    | Requires Allow |
| ---- | ------------ | --------------------------- | -------------- |
| 1    | **Lint**     | `npm run lint`              | No             |
| 2    | **Docs**     | Scan README/templates       | No             |
| 3    | **Deps**     | `npm outdated`, `npm audit` | No             |
| 4    | **Security** | `git grep` for secrets      | No             |
| 5    | **Tests**    | `npm test`                  | No             |
| 6    | **Commits**  | Invoke flow1 prompt         | Yes            |
| 7    | **Push**     | `git push origin main`      | Yes            |
| 8    | **Summary**  | Report results              | No             |

---

## 🔍 Step 1/8: Lint

```bash
npm run lint
```

**Report:**

- Error count
- Warning count
- Files with issues

**Example output:**

```
✅ 0 errors, 2 warnings
⚠️ src/cli.ts:45 - unused variable 'temp'
```

---

## 📚 Step 2/8: Docs

Scan documentation files for quality issues:

**Files to check:**

- `README.md`
- `templates/AGENT.template.md`
- `docs/*.md`

**Checks:**

- Search for `TODO`, `FIXME`, `DEPRECATED` markers
- Verify internal links (files exist)
- Check for version mismatches

**Example output:**

```
✅ No outdated references
⚠️ Found 1 TODO in README.md line 42
```

---

## 📦 Step 3/8: Deps

```bash
npm outdated
npm audit
```

**Report:**

- Outdated packages (current vs latest)
- Breaking changes (major version bumps)
- Vulnerabilities (severity levels)

**Example output:**

```
⚠️ 2 outdated packages:
  - chalk: 5.6.2 → 5.7.0 (minor)
  - commander: 14.0.2 → 15.0.0 (major, breaking)
✅ 0 vulnerabilities
```

---

## 🔐 Step 4/8: Security

Scan for hardcoded secrets and sensitive data:

```bash
git grep -E '(password|secret|api_key|token)\s*=\s*["\047][^"\047]+["\047]'
```

**Checks:**

- Hardcoded passwords/secrets
- API keys in source
- Sensitive data in logs

**Example output:**

```
✅ No hardcoded secrets detected
❌ Found potential secret in src/config.ts:12
```

---

## 🧪 Step 5/8: Tests

```bash
npm test
```

**Report:**

- Pass/fail count
- Coverage percentage
- Failed test names

**Example output:**

```
✅ 24/24 tests passed
✅ Coverage: 87% (above 80% threshold)
❌ 2/26 tests failed:
  - cli.test.ts: "should handle invalid args"
  - utils.test.ts: "should parse version correctly"
```

---

## ✅ Step 6/8: Commits

Invoke flow1.commit.prompt.md to generate conventional commits.

**Process:**

1. Detect changes (git status/diff)
2. Group files by type
3. Generate commits (requires Allow per commit)

**Expected groups:**

- `feat(cli)`: New features
- `fix(cli)`: Bug fixes
- `docs(prompts|templates|readme)`: Documentation
- `chore(deps|config)`: Maintenance

---

## 🚀 Step 7/8: Push

```bash
git push origin main
```

**User must click Allow.** If push fails, suggest resolution.

---

## 📊 Step 8/8: Summary

Provide comprehensive execution report:

```
## Pre-PR Check Results

✅ Lint: 0 errors, 2 warnings
✅ Docs: No issues
⚠️ Deps: 2 outdated (1 major)
✅ Security: Clean
✅ Tests: 24/24 passed, 87% coverage
✅ Commits: 3 created
  - abc1234 feat(cli): add new command
  - def5678 docs(readme): update examples
  - ghi9012 chore(deps): upgrade chalk
✅ Push: Success

📊 Total time: ~5 min
```

---

## Execution Model

| Steps | Action           | User Interaction       |
| ----- | ---------------- | ---------------------- |
| 1-5   | Run checks       | Automatic              |
| 6     | Generate commits | Click Allow per commit |
| 7     | Push to remote   | Click Allow            |
| 8     | Show summary     | Automatic              |

## Error Handling

### Critical Errors (Stop Immediately)

- ❌ Lint errors (not warnings)
- ❌ Test failures
- ❌ Coverage below threshold
- ❌ Security vulnerabilities (high/critical)
- ❌ npm audit critical issues

**Action:** Display error details with file/line numbers and stop execution.

### Non-Critical Issues (Report and Continue)

- ⚠️ Lint warnings
- ⚠️ Outdated dependencies (no breaking changes)
- ⚠️ Minor documentation updates needed
- ⚠️ Low/moderate npm audit warnings

**Action:** Report issues in summary, continue to next step.

## Constraints

**Prohibited:**

- Interactive prompts between steps 1-5
- Continuing after critical errors
- Skipping steps

**Required:**

- Sequential execution (1→8)
- Clear step titles before execution
- Actionable error messages
- Complete summary at end

**Estimated Time:** 5-10 minutes (fully automated steps 1-5, 8)

---

**Reference:** Project quality standards  
**Last Updated:** 2025-11-27
