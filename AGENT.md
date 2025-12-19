# AGENT.md

> Universal AI Assistant Configuration
>
> This file provides context for ALL AI development tools (Claude, Copilot, Cursor, Gemini, etc.) when working with the ai-flow project.
---
## 📋 About This Project

**Project Name:** AI Flow

**Description:** Interactive CLI tool to build AI-ready projects with comprehensive documentation. Generates professional documents for backend, frontend, mobile, and fullstack projects (new or existing) through a guided questionnaire.

**Problem We're Solving:** Starting a new project requires hours of documentation setup. Existing projects often lack proper AI-ready documentation. Without proper docs, AI assistants work inefficiently and make inconsistent decisions.

**Target Users:** Developers starting new projects or managing existing ones who want to work efficiently with AI assistants.

### Technical Context

**Project Type:** CLI Tool (npm package)
**Architecture:** Single-file CLI with modular helper functions
**Primary Language:** TypeScript (strict mode)
**Runtime:** Node.js >=20.0.0
**Module System:** ESM (native ECMAScript Modules)
**Framework:** Commander.js (CLI) + Inquirer (prompts)
**Build Tool:** TypeScript Compiler (tsc)
**Testing:** Jest

**Key Characteristics:**

- Authentication: N/A (CLI tool)
- API Style: Command-line interface
- Deployment: npm registry
- Current Phase: Active development (v2.1.3)

---
## 🏗️ Documentation Architecture

This project follows **AI-assisted development** with comprehensive documentation.

### 📚 Core Documentation (Read in Order)

1. **`.antigravityrules`** ⭐ **START HERE FOR ANTIGRAVITY**
   - Antigravity-specific configuration
   - Project summary and critical rules
   - Slash command reference

2. **`.cursorrules`** ⭐ **START HERE FOR CURSOR**
   - Cursor-specific configuration
   - Development workflow
   - Code standards

3. **`.github/copilot-instructions.md`**
   - GitHub Copilot playbook
   - Architecture and flow

4. **`README.md`**
   - User-facing documentation
   - Features and capabilities

5. **`GETTING-STARTED.md`**
   - Comprehensive tutorial
   - Workflow examples

6. **`CONTRIBUTING.md`**
   - Contribution guidelines
   - Development setup

7. **`package.json`**
   - Dependencies and versions
   - ESM configuration (`"type": "module"`)

8. **`src/cli.ts`**
   - Main CLI implementation

---
## 🎯 Project Structure

```
ai-flow/
├── src/
│   ├── cli.ts                 # Main CLI application
│   └── fs-utils.ts            # File system utilities
├── dist/                      # Compiled output (ESM)
├── prompts/                   # Master prompts (for user projects)
├── templates/                 # Document templates (for user projects)
├── .github/
│   ├── copilot-instructions.md
│   └── prompts/               # Copilot (.prompt.md) prompts
├── .agent/
│   └── workflows/             # Antigravity workflows (/flow*)
├── .cursor/
│   └── commands/              # Cursor slash commands
├── .claude/
│   └── commands/              # Claude commands
├── .gemini/
│   └── commands/              # Gemini commands
├── .antigravityrules          # Antigravity config
├── package.json               # Dependencies and ESM config
├── tsconfig.json              # TypeScript configuration
├── README.md                  # User-facing documentation
├── GETTING-STARTED.md         # Full tutorial
├── CONTRIBUTING.md            # Contribution guidelines
├── .cursorrules               # Cursor-specific rules
└── AGENT.md                   # This file
```
---
## 🎯 Critical Rules

### ❌ NEVER

- Hardcode secrets or API keys
- Use `any` types without explicit justification
- Use CommonJS specific features (`require`, `module.exports`, `__dirname`) directly without ESM equivalents
- Modify templates without understanding their purpose
- Commit without running quality checks (`/flow2-check`)

### ✅ ALWAYS

- Read `AGENT.md` first for context
- Follow TypeScript strict mode
- Use `run_command` for Antigravity workflows
- Run `/flow2-check` before committing/PR
- Use Conventional Commits: `<type>(<scope>): <subject>`
- Preserve `{{PLACEHOLDER}}` tokens in templates
- Use `chalk` for consistent terminal logging

---
## 🏗️ Architecture

### CLI Architecture

**Module System:** Native ESM (`"type": "module"` in package.json)

**Path Resolution (ESM):**
Uses `fileURLToPath` and `import.meta.url` for cross-platform compliance:
```typescript
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const ROOT_DIR = path.resolve(__dirname, '..');
```

**Workflow Integration:**
Development specific tasks are automated via Antigravity workflows in `.agent/workflows/`:
- `/flow1-commit` - Conventional Commits
- `/flow2-check` - Pre-PR Quality Check
- `/flow3-docs` - Documentation Sync
- `/flow4-release` - Release Flow

### AI Tool Mapping

- `antigravity` → `.agent/workflows/`
- `claude` → `.claude/commands/`
- `cursor` → `.cursor/commands/`
- `copilot` → `.github/prompts/*.prompt.md`
- `gemini` → `.gemini/commands/`

---
## 🚀 Development Workflow

### Common Commands

**Development:**
```bash
npm run dev -- init .          # Run in dev mode (tsx)
npm run build                  # Build to dist/
npm start -- init .            # Run built version
npm test                       # Run Jest tests
```

**Quality Check (Antigravity):**
Run `/flow2-check` to execute Lint, Format, Build, and Tests automatically.

### Commit Format

Use Conventional Commits:
`<type>(<scope>): <subject>`

**Types:** `feat`, `fix`, `docs`, `refactor`, `test`, `chore`, `ci`
**Scopes:** `cli`, `templates`, `prompts`, `readme`, `config`

---
**Last Updated:** 2025-12-19
**Version:** 2.1.3
