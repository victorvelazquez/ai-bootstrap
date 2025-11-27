# Pre-PR Quality Checklist

Execute comprehensive quality checks before creating a pull request.

**Goal:** Verify code quality, docs, security, tests, and commit hygiene.

---

## Workflow

Execute all steps automatically. Stop only if critical issues are found.

| #   | Step         | Actions                                                                         | Auto              |
| --- | ------------ | ------------------------------------------------------------------------------- | ----------------- | ------------------------ | --- |
| 1   | **Lint**     | `npm run lint` → report warnings/errors                                         | ✅                |
| 2   | **Docs**     | Scan README/templates for outdated refs, broken links                           | ✅                |
| 3   | **Deps**     | `npm outdated && npm audit` → flag vulns/breaking changes                       | ✅                |
| 4   | **Security** | Scan for hardcoded secrets: `git grep -E '(password                             | secret            | api_key)\s*=\s*["\047]'` | ✅  |
| 5   | **Tests**    | `npm test` → verify coverage threshold                                          | ✅                |
| 6   | **Commits**  | Invoke `/flow1` prompt (auto-groups by type)                                    | ⚠️ Requires Allow |
| 7   | **Push**     | `git push` after commits                                                        | ⚠️ Requires Allow |
| 8   | **Summary**  | Report: steps executed, files modified, test coverage, security status, commits | ✅                |

### Output Format

**For each step, display:**

```
## [emoji] Step [N]/8: [Name]
[results]
```

**Example:**

```
## 🔍 Step 1/8: Lint
✅ No errors

## 📚 Step 2/8: Docs
✅ No outdated references

## 📦 Step 3/8: Deps
⚠️ 2 outdated packages (non-critical)
✅ 0 vulnerabilities
```

### Detailed Actions

**Step 1/8: Lint**

- Run `npm run lint`
- Report warnings/errors

**Step 2/8: Docs**

- Scan `README.md`, `templates/AGENT.template.md`
- Check for TODO/FIXME/DEPRECATED
- Verify links are valid

**Step 3/8: Deps**

- Run `npm outdated && npm audit`
- Flag breaking changes (major bumps)
- Report vulnerabilities

**Step 4/8: Security**

- Scan for hardcoded secrets
- Check env var usage
- Verify no sensitive data in logs

**Step 5/8: Tests**

- Run `npm test`
- Report pass/fail count
- Verify coverage threshold

**Step 6/8: Commits**

- Invoke `/flow1` prompt
- Auto-group by type: `feat`, `fix`, `docs`, `chore`

**Step 7/8: Push**

- Execute `git push` after commits

**Step 8/8: Summary**

```
✅ Steps executed: [list]
📊 Files modified: [count]
🧪 Test coverage: [percentage]
🔐 Security/deps: [status]
💾 Commits: [hashes]
```

---

## Error Handling

**Stop immediately if:**

- ❌ Lint errors found (not warnings)
- ❌ Security vulnerabilities detected
- ❌ Tests fail or coverage below threshold
- ❌ npm audit shows critical/high vulnerabilities

**Continue if:**

- ⚠️ Lint warnings only (report and continue)
- ⚠️ Outdated deps with no breaking changes (report and continue)
- ⚠️ Docs need minor updates (report and continue)

---

## Constraints

- ✅ Execute steps 1-5 automatically (no confirmation)
- ✅ Stop immediately on critical issues
- ✅ Provide actionable feedback with error details
- ⚠️ Steps 6-7 require user Allow (git commit/push)

**Estimated time:** 5-10 min (automatic execution)
