# AI Bootstrap

[![CI Status](https://github.com/victorvelazquez/ai-bootstrap/actions/workflows/nodejs.yml/badge.svg?branch=main)](https://github.com/victorvelazquez/ai-bootstrap/actions/workflows/nodejs.yml)

## English

Transform your idea into a production-ready, AI-documented project (backend, frontend, fullstack, or mobile) in minutes.

AI Bootstrap is an interactive CLI that generates comprehensive professional documentation for backend, frontend, fullstack, and mobile projects. Compatible with Claude, Copilot, Cursor, Gemini, and any AI assistant.

**Key Features:**

- 🚀 Complete professional documentation (12-17 docs per project type)
- 🌍 Universal support - 12 languages, 60+ frameworks, 35+ ORMs (98% coverage)
- 🤖 Multi-AI support with slash commands
- 🔍 Smart 3-layer detection for existing projects (50-94% faster)
- ⏱️ Save 10-20 hours per project

**Quick Start:**

```bash
npm install -g ai-bootstrap
ai-bootstrap init .
# Then open your AI tool and run: /bootstrap
```

📚 **[Complete Guide →](GETTING-STARTED.md)**

---

## Español

Transforma tu idea en un proyecto listo para producción y documentado para IA en minutos (backend, frontend, fullstack o mobile).

**Características:**

- 🚀 Documentación profesional completa (12-17 docs por tipo)
- 🌍 Soporte universal - 12 lenguajes, 60+ frameworks, 35+ ORMs
- 🤖 Compatible con Claude, Copilot, Cursor, Gemini
- 🔍 Detección inteligente para proyectos existentes (50-94% más rápido)
- ⏱️ Ahorra 10-20 horas por proyecto

**Inicio rápido:**

```bash
npm install -g ai-bootstrap
ai-bootstrap init .
# Luego en tu AI tool: /bootstrap
```

📚 **[Guía Completa →](GETTING-STARTED.md)**

---

## Português

Transforme sua ideia em um projeto pronto para produção e documentado para IA em minutos.

**Características:**

- 🚀 Documentação profissional completa (12-17 docs por tipo)
- 🌍 Suporte universal - 12 linguagens, 60+ frameworks, 35+ ORMs
- 🤖 Compatível com Claude, Copilot, Cursor, Gemini
- 🔍 Detecção inteligente para projetos existentes (50-94% mais rápido)
- ⏱️ Economize 10-20 horas por projeto

**Início rápido:**

```bash
npm install -g ai-bootstrap
ai-bootstrap init .
# Depois na sua ferramenta de IA: /bootstrap
```

📚 **[Guia Completo →](GETTING-STARTED.md)**

---

## 🎯 What is AI Bootstrap?

AI Bootstrap is an interactive CLI tool that generates comprehensive professional documentation for your project (backend, frontend, fullstack, or mobile) through a guided 8-phase questionnaire. It creates the foundation for AI-assisted development with any AI tool.

**The Problem:** Starting a project requires hours of documentation setup. Existing projects lack proper AI-ready documentation. Without proper docs, AI assistants work inefficiently.

**The Solution:**

- **New Projects:** Generates professional documentation from scratch (90-120 min)
- **Existing Projects:** Analyzes your code to pre-populate answers (35-70 min, 50-60% faster)

The result is interconnected documentation that guides AI assistants and human developers throughout your project lifecycle.

---

## ✨ Key Features

- 🌍 **Universal Support** - 12 languages, 60+ frameworks, 35+ ORMs (98% coverage)
- 🤖 **AI-Agnostic** - Claude, Copilot, Cursor, Gemini, any AI tool
- 📚 **Professional Documentation** - 12-17 docs per project type
- ⚡ **Smart 3-Layer Detection** - Analyzes existing projects in 15s-5min
- 🔍 **Intelligent Caching** - 0 seconds on re-runs with no changes
- 💡 **Slash Commands** - Easy execution with `/bootstrap`, `/feature`, `/fix`
- ⏱️ **Time Efficient** - Save 10-20 hours per project

---

## 📋 Prerequisites

- **Node.js:** 18.0.0 or higher ([Download](https://nodejs.org/))
- **npm:** Included with Node.js

---

## 📦 Installation

```bash
npm install -g ai-bootstrap
```

Or using uv (Python tool manager):

```bash
uv tool install ai-bootstrap
```

**Current version:** 1.1.1

---

## 🚀 Quick Start

```bash
# 1. Create project folder
mkdir my-awesome-project
cd my-awesome-project

# 2. Initialize AI Bootstrap
ai-bootstrap init .

# 3. Open your AI tool and run:
/bootstrap
```

That's it! The AI will guide you through an interactive questionnaire to generate all documentation.

**📚 For detailed tutorials, see [GETTING-STARTED.md](GETTING-STARTED.md)**

---

## 🛠️ CLI Commands

```bash
ai-bootstrap init [path]     # Initialize project
ai-bootstrap check           # Verify initialization
ai-bootstrap --version       # Show version
ai-bootstrap --help          # Show help
```

### Common Flags

```bash
--ai <tool>              # claude, cursor, copilot, gemini, all
--type <type>            # backend, frontend, mobile, fullstack
--name <name>            # Project name
--description <desc>     # Project description
--verbose                # Detailed logging
--dry-run                # Simulate without writing
```

**Example:**

```bash
ai-bootstrap init . --ai claude --type backend --name "My API"
```

---

## 🤖 AI Tool Support

AI Bootstrap works with any AI tool. Select during initialization:

```bash
ai-bootstrap init . --ai claude      # Claude Code
ai-bootstrap init . --ai cursor      # Cursor
ai-bootstrap init . --ai copilot     # GitHub Copilot
ai-bootstrap init . --ai gemini      # Gemini
ai-bootstrap init . --ai all         # All tools (maximum compatibility)
```

Each tool gets:

- Tool-specific configuration files
- Slash commands optimized for that tool
- Integration with `AGENT.md` (universal config)

---

## 📋 Available Commands

After initialization, use these slash commands in your AI tool:

**Documentation:**

- `/bootstrap` - Full 8-phase documentation generation
- `/bootstrap-phase0-context` - Context discovery (existing projects)
- `/bootstrap-phase1` through `/phase7` - Individual phases
- `/docs-update` - Update documentation when code changes

**Workflows (Backend only):**

- `/feature` - Create/modify features (15-20 min)
- `/fix` - Fix bugs (3-15 min, adaptive)
- `/work` - Manage work in progress
- `/review` - Multi-aspect code review (5 min)
- `/refactor-quick` - Quick refactorings (3-5 min)

**📚 See [GETTING-STARTED.md](GETTING-STARTED.md) for complete command reference**

---

## 💡 How It Works

1. **Smart Detection** - Analyzes existing projects in 3 layers (15s to 5min)
2. **Interactive Questionnaire** - Guides you through 8 phases
3. **Template Generation** - Creates 12-17 professional documents
4. **AI Integration** - Configures your AI tool with project context

**For existing projects:**

- Layer 0: Cache check (0-5s)
- Layer 1: Metadata scan (10-20s)
- Layer 2: Structural analysis (30-90s)
- Layer 3: Deep analysis (1-5min, optional)

**Benefits:**

- 50-94% faster for existing projects
- 40-60% of answers pre-filled
- Intelligent caching (0s re-runs)

---

## 🎯 Generated Documentation

**Backend** (17 docs): AGENT.md, ai-instructions.md, project-brief.md, README.md, 9 technical docs, 2 specs, .env.example

**Frontend** (12 docs): AGENT.md, ai-instructions.md, project-brief.md, README.md, 6 technical docs, 2 specs

**Mobile** (15 docs): AGENT.md, ai-instructions.md, project-brief.md, README.md, 9 technical docs, 2 specs

**Fullstack** (~20 docs): Combines backend + frontend with merged templates

---

## 🌍 Supported Languages & Frameworks

AI Bootstrap provides **universal support** with automatic detection for 98% of the market:

### Languages Supported (12)

| Language               | Market Share | Frameworks                                                               | ORMs                                                          | Status  |
| ---------------------- | ------------ | ------------------------------------------------------------------------ | ------------------------------------------------------------- | ------- |
| **Node.js/TypeScript** | ~35%         | NestJS, Express, Fastify, Koa, Hapi, AdonisJS, Next.js, Remix, tRPC      | Prisma, TypeORM, Sequelize, Mongoose, Drizzle, MikroORM, Knex | ✅ Full |
| **Python**             | ~25%         | FastAPI, Django, Django REST Framework, Flask, Tornado, Sanic, Starlette | SQLAlchemy, Django ORM, Tortoise ORM, Peewee, SQLModel        | ✅ Full |
| **PHP**                | ~15%         | Laravel, Symfony, CodeIgniter, Slim, Lumen, Yii                          | Eloquent, Doctrine, Propel                                    | ✅ Full |
| **Java**               | ~15%         | Spring Boot, Micronaut, Quarkus, Vert.x, Dropwizard                      | Hibernate/JPA, MyBatis, jOOQ                                  | ✅ Full |
| **C#/.NET**            | ~8%          | ASP.NET Core, Minimal APIs, Nancy                                        | Entity Framework Core, Dapper, NHibernate                     | ✅ Full |
| **Go**                 | ~5%          | Gin, Echo, Fiber, Chi, Buffalo                                           | GORM, Ent, sqlx, sqlc                                         | ✅ Full |
| **Ruby**               | ~3%          | Ruby on Rails, Sinatra, Hanami, Grape                                    | ActiveRecord, Sequel, ROM                                     | ✅ Full |
| **Kotlin**             | ~2%          | Ktor, Spring Boot, Javalin, http4k                                       | Exposed, Hibernate                                            | ✅ Full |
| **Rust**               | ~1%          | Actix-web, Rocket, Axum, Warp                                            | Diesel, SeaORM, sqlx                                          | ✅ Full |
| **Elixir**             | <1%          | Phoenix                                                                  | Ecto                                                          | ✅ Full |
| **Scala**              | <1%          | Play Framework, Akka HTTP                                                | Slick, Quill                                                  | ✅ Full |
| **Swift**              | <1%          | Vapor                                                                    | Fluent                                                        | ✅ Full |

**See [GETTING-STARTED.md](GETTING-STARTED.md) for automatic detection details and examples.**

---

## 🎓 Why Use AI Bootstrap?

**Without AI Bootstrap:**

- ⏱️ 10-20 hours creating docs manually
- 🤔 AI assistants lack context, make assumptions
- 🐛 More bugs due to unclear standards

**With AI Bootstrap:**

- ⏱️ 90-120 min (new) or 35-70 min (existing)
- 🤖 AI assistants work with full context
- ✅ Consistent quality, fewer bugs
- 💾 Save 10-20 hours per project

---

## 📚 Documentation Philosophy

AI Bootstrap follows: **Documentation as Executable Code**

- Documents guide AI assistants (like config files guide compilers)
- `AGENT.md` is the universal entry point
- All documents are interconnected
- Documents evolve with your project
- Single source of truth for all AI tools

---

## 🎯 Who Should Use This?

**Perfect for:**

- ✅ Backend/frontend/mobile developers starting new projects
- ✅ Teams with existing codebases needing AI-ready documentation
- ✅ Projects requiring comprehensive documentation
- ✅ Teams adopting AI-assisted development
- ✅ Multi-language teams (12 languages supported)

**Not ideal for:**

- ❌ Projects with zero documentation needs
- ❌ Quick prototypes that won't be maintained

---

## 🚀 Roadmap

- [x] Backend, frontend, mobile, fullstack support ✅
- [ ] Template customization
- [ ] VS Code extension
- [ ] Interactive web UI

---

## 🛠️ Troubleshooting

**Common issues:**

- Node.js version must be ≥18.0.0
- Check folder permissions if CLI can't write files
- Verify slash command files exist for your AI tool

**📚 See [GETTING-STARTED.md](GETTING-STARTED.md#troubleshooting) for detailed troubleshooting guide**

## 🤝 Contributing

We welcome contributions! See [CONTRIBUTING.md](CONTRIBUTING.md) for guidelines.

---

## 📝 License

MIT License - See [LICENSE](LICENSE) for details.

---

## 💬 Support

- **Issues:** [GitHub Issues](https://github.com/victorvelazquez/ai-bootstrap/issues)
- **Email:** support@ai-bootstrap.dev (if applicable)

---

## 🙏 Acknowledgments

- Inspired by [GitHub Spec-Kit](https://github.com/github/spec-kit)
- Built for the AI-assisted development era
- Community feedback and contributions

---

**Transform your idea into a production-ready backend with AI Bootstrap** 🚀

**Made with ❤️ for the developer community**
