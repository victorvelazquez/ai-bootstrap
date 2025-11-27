# Pre-PR Quality Checklist

Execute comprehensive quality checks before creating a pull request.

**Goal:** Verify code quality, docs, security, tests, and commit hygiene.

---

## Workflow

Execute steps sequentially. Ask "Continue? (Y/N)" after each.

| #   | Step         | Actions                                                                         | Command                                  |
| --- | ------------ | ------------------------------------------------------------------------------- | ---------------------------------------- | ------ | ---------------------------------------- |
| 1   | **Lint**     | Auto-fix issues, report warnings                                                | `npm run lint:fix`                       |
| 2   | **Docs**     | Update README/AGENT.md, verify links, check references                          | Manual review + grep search              |
| 3   | **Deps**     | Check outdated packages, run audit                                              | `npm outdated && npm audit`              |
| 4   | **Security** | Scan for hardcoded secrets, validate env vars, check common vulns               | `git grep -E '(password                  | secret | api_key)\s*=\s*["\047]'` + manual review |
| 5   | **Tests**    | Run unit/integration/E2E, generate coverage report                              | `npm test` (or project-specific command) |
| 6   | **Commits**  | Group changes by type, generate conventional commits                            | Invoke `flow1.commit` prompt             |
| 7   | **Push**     | Push all commits to remote                                                      | `git push`                               |
| 8   | **Summary**  | Report results: files modified, test coverage, security status, commits created | Auto-generated report                    |

### Detailed Actions

**1. Lint & Fix**

- Auto-fix correctable issues
- Report remaining warnings/errors

**2. Docs Update**

- Scan for outdated references in `README.md`, `templates/AGENT.template.md`
- Verify links and examples
- Check for broken references

**3. Dependency Validation**

- Report outdated packages
- Flag breaking changes (major version bumps)
- Show security vulnerabilities

**4. Security Checklist**

- No hardcoded secrets/API keys
- Input validation on user-facing functions
- Auth/authz implementations reviewed
- No sensitive data in logs

**5. Run Tests**

- Unit: isolated component tests
- Integration: module interactions
- E2E: user flow scenarios (if applicable)
- Verify minimum coverage threshold

**6. Conventional Commits**

- Use `/flow1` prompt to analyze and commit changes
- Groups: `feat`, `fix`, `docs`, `chore`

**7. Push**

- Execute `git push` after all commits created

**8. Final Summary**

```
✅ Steps executed: [list]
📊 Files modified: [count]
🧪 Test coverage: [percentage]
🔐 Security/deps: [status]
💾 Commits: [hashes]
```

---

## Constraints

- ❌ Never skip requested checks
- ❌ Never proceed without user confirmation (Y/N)
- ✅ Stop on critical issues
- ✅ Provide actionable feedback

**Estimated time:** 10-20 min
