---
description: Release Workflow
---

# Release Workflow

Automate version publishing following semantic versioning, syncing package.json, git tags, and npm registry.

**Display Behavior:** Show step title (`## Step N/5: Name`) in your response BEFORE executing commands in that step.

// turbo-all
Automate version publishing and registry syncing.

---

## 📋 Step 1/5: Determine Version

Read current version from `package.json` and determine next version using semver.

// turbo
```bash
node -p "require('./package.json').version"
```

---

## ✏️ Step 2/5: Update Version References

Update version string in all relevant files (Manual check):
- `package.json`
- `src/cli.ts`
- `templates/AGENT.template.md`

---

## ✅ Step 3/5: Commit and Tag

Stage modified files, create version commit, tag, and push. (Requires approval)

// turbo
```bash
git add . && git commit -m "chore(release): publish version X.Y.Z" && git tag -a vX.Y.Z -m "Release version X.Y.Z" && git push origin master --tags
```

---

## 📦 Step 4/5: Publish to npm

Publish package to npm registry. (Requires approval)

// turbo
```bash
npm publish --access public
```

---

## ✅ Step 5/5: Verify

Confirm successful release across platforms.

---

**Last Updated:** 2025-12-19
