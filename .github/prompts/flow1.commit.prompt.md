# Conventional Commits Automation

Generate atomic commits automatically following Conventional Commits standard. No interactive prompts.

---

## 🎯 Core Principle

**Use native git commands exclusively** via `run_in_terminal` with `isBackground: false`. VS Code tools are unreliable for change detection.

### 🔍 Step 1/4: Detect Changes (Auto)

Execute sequentially without confirmation:

```bash
git reset                                    # Clean corrupted index
git status --porcelain                       # List modified files (M/A/D/R/?? prefix)
git diff --stat                              # Change statistics
git diff --unified=1                         # Line-by-line diffs (minimal context)
git ls-files --others --exclude-standard    # Untracked files
git diff --cached --stat                     # Staged changes
```

### ⚡ Step 2/4: Group Changes (Auto)

Group files by functional relationship using this priority order:

| Pattern       | Files                                                      | Type       | Scope          | Example Commit                             |
| ------------- | ---------------------------------------------------------- | ---------- | -------------- | ------------------------------------------ |
| **Feature**   | `src/cli.ts` + templates + prompts + slash-commands + docs | `feat`     | `cli`          | `feat(cli): add phase 0 context detection` |
| **Deps**      | `package.json` + `package-lock.json`                       | `chore`    | `deps`         | `chore(deps): upgrade commander to v14`    |
| **Config**    | `tsconfig.json`, `scripts/*.sh`, configs                   | `chore`    | `config`       | `chore(config): update build scripts`      |
| **Refactor**  | `src/utils/*.ts` + usage sites                             | `refactor` | `cli`/`config` | `refactor(cli): extract prompt loader`     |
| **Templates** | `templates/*.md` (independent)                             | `docs`     | `templates`    | `docs(templates): improve readme format`   |
| **Prompts**   | `prompts/*.md`, `slash-commands/**`                        | `docs`     | `prompts`      | `docs(prompts): update backend workflow`   |
| **Docs**      | `README.md`, standalone docs                               | `docs`     | `readme`       | `docs(readme): clarify installation steps` |

**Dependency Detection:**

- CLI changes (`src/cli.ts`) → search for related templates/prompts/commands
- Template changes → check CLI references
- Script changes → always `chore(config)`

### ✅ Step 3/4: Generate Commits (Requires Allow)

For each group, execute via `run_in_terminal` (user must click Allow):

```bash
git add <files> && git commit -m "<type>(<scope>): <description>"
```

**Format:** `<type>(<scope>): <description>`

**Types:** `feat|fix|docs|style|refactor|perf|test|chore|ci|revert`

**Scopes:** `cli|deps|config|templates|prompts|slash-commands|scripts|docs|readme`

**Rules:**

- ✅ Imperative mood: "add", "update", "fix" (not "added", "updated")
- ✅ English only, lowercase start, no period
- ✅ Max 72 chars
- ✅ Regex: `^(feat|fix|docs|style|refactor|perf|test|chore|ci|revert)\([a-z-]+\):\s[a-z].{1,68}[^.]$`

**Examples:**

```bash
git add package.json package-lock.json && git commit -m "chore(deps): upgrade chalk to v5.6.2"
git add templates/README.template.md && git commit -m "docs(templates): improve list formatting"
git add .github/prompts/flow1.commit.prompt.md && git commit -m "docs(prompts): refactor commit automation workflow"
```

### 🚀 Step 4/4: Finalize (Mixed)

```bash
# Auto (no confirmation)
git log --oneline --graph --decorate -n <count>

# Requires Allow
git push origin main
```

---

## ⚠️ Constraints

**Never:**

- Ask which files to group
- Show interactive menus
- Use generic scopes ("any", "multiple")
- Mix types in one commit (`feat` + `fix`)
- End descriptions with period
- Write descriptions in Spanish

**Always:**

- Run `git reset` first
- Use native git commands (not VS Code tools)
- Auto-execute analysis (no confirmation for reads)
- Wait for Allow on `git commit` and `git push`
- Auto-execute `git log` (no confirmation)

---

**Source:** `docs/contributing.md` § 5.2 + Conventional Commits spec  
**Updated:** 2025-11-27
