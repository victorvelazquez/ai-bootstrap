---
description: Pre-PR Quality Checklist
---

# Pre-PR Quality Checklist

Execute comprehensive quality checks before creating a pull request. Automate verification of code quality, formatting, build integrity, dependencies, and tests.

**Display Behavior:** Show step title (`## Step N/6: Name`) in your response BEFORE executing commands in that step.

---

## Workflow Overview

// turbo-all
Execute all steps sequentially. Stop only if critical issues are found.

| Step | Action       | Commands                      |
| ---- | ------------ | ----------------------------- |
| 1    | **Lint**     | `npm run lint`                |
| 2    | **Format**   | `npm run format:check`        |
| 3    | **Build**    | `npm run build`               |
| 4    | **Deps**     | `npm outdated`, `npm audit`   |
| 5    | **Tests**    | `npm test` + CLI validation   |
| 6    | **Summary**  | Report results                |

---

## 🔍 Step 1/6: Lint

// turbo
```bash
npm run lint
```

**Report:**
- Error count
- Warning count
- Files with issues

---

## 🎨 Step 2/6: Format

// turbo
```bash
npm run format:check
```

**Report:**
- Files not formatted
- Total files checked
- Suggestion to run `npm run format` if issues found

---

## 🏗️ Step 3/6: Build

// turbo
```bash
npm run build
```

**Report:**
- TypeScript compilation status
- Error count with file locations
- Type errors with line numbers

---

## 📦 Step 4/6: Deps

// turbo
```bash
npm outdated
npm audit
```

**Report:**
- Outdated packages (current vs latest)
- Breaking changes (major version bumps)
- Vulnerabilities (severity levels)

---

## 🧪 Step 5/6: Tests

// turbo
```bash
npm test
```

**Report:**
- Pass/fail count
- Coverage percentage
- Failed test names

**Additional validation:**
```bash
node dist/cli.js --version
```

---

## 📊 Step 6/6: Summary

Provide comprehensive execution report summarizing all checks.

---

## Constraints

- Sequential execution (1→6)
- Clear step titles before execution
- Actionable error messages
- Complete summary at end

**Estimated Time:** 3-5 minutes (fully automated)

---

**Reference:** Project quality standards  
**Last Updated:** 2025-12-19
