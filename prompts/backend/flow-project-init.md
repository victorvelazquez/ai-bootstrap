# AI Flow - Project Initialization

**YOU ARE AN EXPERT DEVOPS ENGINEER AND PROJECT SETUP SPECIALIST.**

Your mission is to initialize the project with the appropriate framework/language tooling when the user executes `/flow-project-init`.

---

## Command: `/flow-project-init`

### Objective

Initialize a clean project in the **current directory** using the framework's official CLI tool based on the tech stack defined in the documentation. Do NOT create subdirectories or manual folder structures.

### Prerequisites

Before executing this command, ensure:

- ✅ `/flow-docs-gen` completed (documentation generated)
- ✅ `ai-instructions.md` exists with tech stack defined
- ✅ Current directory is empty or ready for initialization

### Duration

⏱️ **Estimated Time:** 5-10 minutes

---

## Workflow: 2 Steps

### Step 1: Read Documentation & Prepare Directory (1-2 minutes)

**Read `ai-instructions.md` to identify:**

- Programming language and version
- Framework and version (if any)
- Package manager preference

**Check for conflicting files:**

Most framework CLIs fail if they detect existing files like `README.md`, `package.json`, `.gitignore`, etc.

**Detect conflicting files:**

```bash
# Check for common conflicting files
ls -la | grep -E '(README|package\.json|\.git|tsconfig\.json|\.eslintrc)'
```

**If conflicts detected, backup and clear:**

```bash
# Create backup directory
mkdir -p .ai-flow/backup-$(date +%Y%m%d-%H%M%S)

# Move conflicting files to backup (preserve AI Flow docs)
mv README.md package.json tsconfig.json .gitignore .ai-flow/backup-*/
# Keep .ai-flow/ directory intact
```

**Display summary:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 Project Configuration
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📦 Language: {{LANGUAGE}} {{VERSION}}
🚀 Framework: {{FRAMEWORK}} {{VERSION}}
📦 Package Manager: {{PACKAGE_MANAGER}}

Target Directory: {{PWD}}

⚠️  IMPORTANT: 
   • This will initialize the project in the CURRENT directory
   • Conflicting files backed up to .ai-flow/backup-*/
   • .ai-flow/ directory will be preserved

Continue? (Y/n)
```

**If framework not detected:**

Ask user to specify the framework:

```
⚠️  Framework not specified in ai-instructions.md

Please specify the framework to use:
>
```

---

### Step 2: Execute Initialization Command (5-10 minutes)

**Run the framework's official initialization command in the CURRENT directory:**

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🏗️  Step 2/2: Initialize Project
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

**CRITICAL RULES:**

1. ✅ **Initialize in current directory** (use `.` when the CLI supports it)
2. ✅ **Use official CLI tools** (don't create manual folder structures)
3. ✅ **Directory must be clean** (backup existing files first if needed)
4. ❌ **DO NOT create subdirectories** (no `mkdir project-name`)
5. ❌ **DO NOT create manual file structures**

---

**Framework-Specific Commands:**

**Node.js / TypeScript:**

```bash
# NestJS
npx @nestjs/cli new . --package-manager npm --skip-git

# Express + TypeScript
npm init -y
npm install express
npm install -D typescript @types/express @types/node ts-node nodemon
npx tsc --init

# Fastify + TypeScript
npm init -y
npm install fastify
npm install -D typescript @types/node tsx

# Next.js (if applicable)
npx create-next-app@latest . --typescript --tailwind --app --import-alias "@/*"
```

**Python:**

```bash
# Django
python -m venv venv
# Windows: venv\Scripts\activate | Unix: source venv/bin/activate
pip install django djangorestframework
django-admin startproject config .

# FastAPI
python -m venv venv
# Windows: venv\Scripts\activate | Unix: source venv/bin/activate
pip install "fastapi[standard]" uvicorn sqlalchemy

# Flask
python -m venv venv
# Windows: venv\Scripts\activate | Unix: source venv/bin/activate
pip install flask flask-restful flask-sqlalchemy
```

**Go:**

```bash
# Go (any framework)
go mod init {{PROJECT_NAME}}

# Then install dependencies (examples):
# Gin: go get -u github.com/gin-gonic/gin
# Echo: go get github.com/labstack/echo/v4
# Fiber: go get github.com/gofiber/fiber/v2
```

**C# / .NET:**

```bash
# ASP.NET Core Web API
dotnet new webapi -n {{PROJECT_NAME}} -o .
dotnet add package Microsoft.EntityFrameworkCore.Design
dotnet add package Npgsql.EntityFrameworkCore.PostgreSQL
```

**Ruby:**

```bash
# Rails API
rails new . --api --database=postgresql --skip-git
```

**PHP:**

```bash
# Laravel
composer create-project laravel/laravel tmp-laravel
mv tmp-laravel/* . && mv tmp-laravel/.* . 2>/dev/null || true
rm -rf tmp-laravel

# Symfony
composer create-project symfony/skeleton tmp-symfony
mv tmp-symfony/* . && mv tmp-symfony/.* . 2>/dev/null || true
rm -rf tmp-symfony
```

**Java / Kotlin:**

```bash
# Spring Boot (Maven)
curl https://start.spring.io/starter.zip \
  -d type=maven-project \
  -d language=java \
  -d bootVersion=3.2.0 \
  -d dependencies=web,data-jpa \
  -o project.zip
unzip -o project.zip && rm project.zip

# Spring Boot (Gradle + Kotlin)
curl https://start.spring.io/starter.zip \
  -d type=gradle-project-kotlin \
  -d language=kotlin \
  -d bootVersion=3.2.0 \
  -d dependencies=web,data-jpa \
  -o project.zip
unzip -o project.zip && rm project.zip
```

---

**Post-Initialization: Restore AI Flow Documentation**

After framework initialization completes:

1. **Preserve framework README (if created):**
   ```bash
   mv README.md README.framework.md
   ```

2. **Restore AI Flow documentation from backup:**
   ```bash
   # Restore AI instructions and project brief
   cp .ai-flow/backup-*/ai-instructions.md .
   cp .ai-flow/backup-*/project-brief.md .
   
   # Restore original README if you want to keep it
   cp .ai-flow/backup-*/README.md .
   ```

3. **Merge or choose README strategy:**
   - **Option A:** Keep framework README, link to AI docs
   - **Option B:** Keep AI Flow README, reference framework docs
   - **Option C:** Merge both READMEs

**Success Output:**

```
✅ Project initialized successfully!

📦 Framework: {{FRAMEWORK}} {{VERSION}}
📂 Files created: {{FILE_COUNT}} files
⏱️  Time: {{DURATION}}

Generated structure:
{{LIST_KEY_FILES}}

📋 Backup location: .ai-flow/backup-{{TIMESTAMP}}/

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Next steps:
1. Review generated files (README.framework.md, package.json, etc.)
2. Decide on README strategy (AI Flow vs Framework)
3. Run /flow-project-roadmap to plan implementation
4. Start development with /feature commands
```

---

## Important Notes

**What this command DOES:**

- ✅ Runs the official framework CLI (npx, django-admin, dotnet new, etc.)
- ✅ Creates base project files in current directory
- ✅ Installs initial dependencies
- ✅ Sets up configuration files (tsconfig.json, package.json, etc.)

**What this command DOES NOT do:**

- ❌ Create custom folder structures (use /feature for that later)
- ❌ Implement Clean Architecture layers manually
- ❌ Create domain entities or use cases
- ❌ Set up database schemas
- ❌ Configure CI/CD pipelines

**Philosophy:**

This command provides a **clean slate** from the official tooling. The architecture, domain logic, and custom structure will be built incrementally using `/feature`, `/fix`, and `/work` commands following the patterns defined in your documentation.

---

**End of /flow-project-init workflow**

**Time:** 5-10 minutes total  
**Output:** Clean framework initialization in current directory  
**Next:** Run `/flow-project-roadmap` to generate implementation plan
