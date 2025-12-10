# Changelog

All notable changes to ai-flow-dev are documented in this file. This project follows [Semantic Versioning](https://semver.org/).

## [1.1.0] - 2025-01-15

### Breaking Changes

- **Requires Node.js 20.0.0 or higher** (upgraded from 18.0.0)
  - [ora@9.0.0](https://github.com/sindresorhus/ora) requires Node.js 20+ for ES2024 regex flag support
  - Check your Node.js version: `node --version`
- **Full ESM migration** (from CommonJS)
  - Project now uses ES modules exclusively
  - `"type": "module"` in package.json
  - No CommonJS `require()` support
  - TypeScript targets ES2022 with top-level await

### Added

- Phase 9 - Implementation Roadmap generation in `flow-bootstrap` command
- Generated projects now include comprehensive roadmap with Story Points (Fibonacci scale)
- Improved roadmap generation with Epic categorization and detailed feature planning

### Changed

- **Dependency Updates** (all to latest ESM-compatible versions):
  - `chalk`: 4.1.2 → 5.6.2 (ESM-only)
  - `inquirer`: 8.2.7 → 13.0.2 (ESM-only, improved TypeScript support)
  - `ora`: 5.4.1 → 9.0.0 (ESM-only)
  - `@types/node`: 24.10.1 → 24.10.2
  - `@typescript-eslint/parser`: 8.48.0 → 8.49.0
  - `@types/jest`: 29.5.14 → 30.0.0
  - `@types/inquirer`: 8.2.12 → 9.0.9
- `eslint.config.js` migrated to ESM (removed `FlatCompat`)
- `tsconfig.json` updated to ES2022 modules with top-level await support
- CLI now reads `package.json` asynchronously using top-level await

### Fixed

- README.md documentation counts corrected
  - Frontend: 15 → 12 generated docs
  - Mobile: 14 → 11 generated docs
- Removed unused `scripts/` folder references from documentation and package.json
- GitHub Actions workflow updated to use Node.js 20.x for CI/CD

### Security

- No vulnerabilities detected
- All dependencies pass security audit (`npm audit`)

## [1.0.3] - 2024-12-20

### Added

- Phase 7 - Operations (monitoring, logging, deployment)
- Phase 8 - Context Injection (automated knowledge base for AI)
- Command rename: `flow-docs-gen` → `flow-bootstrap` for better UX
- Improved documentation generation templates

### Changed

- Bootstrap workflow now spans phases 0-8 with integrated context injection
- Enhanced Copilot slash commands with contextual AI assistance

### Fixed

- Template variables properly substituted in all generated files
- Improved error handling in bootstrap process

## [1.0.2] - 2024-11-15

### Added

- Frontend project scaffolding
- Mobile (React Native) project scaffolding
- Fullstack template support
- Cross-platform support (Windows, macOS, Linux)

### Changed

- Improved bootstrap logic with better progress feedback
- Enhanced documentation structure

## [1.0.1] - 2024-11-10

### Fixed

- CLI argument parsing with Commander.js
- File permissions on Windows platforms
- Template loading and rendering

## [1.0.0] - 2024-11-05

### Added

- Initial release
- Backend project scaffolding (`init` command)
- Project quality check (`check` command)
- Bootstrap AI-ready documentation structure
- AI tool configuration (Claude, Cursor, GitHub Copilot)
- Comprehensive documentation generation (API, testing, security, etc.)
- Interactive prompts for project discovery
- Template system with EJS rendering
- Support for Node.js 18+

[1.1.0]: https://github.com/your-org/ai-flow/releases/tag/v1.1.0
[1.0.3]: https://github.com/your-org/ai-flow/releases/tag/v1.0.3
[1.0.2]: https://github.com/your-org/ai-flow/releases/tag/v1.0.2
[1.0.1]: https://github.com/your-org/ai-flow/releases/tag/v1.0.1
[1.0.0]: https://github.com/your-org/ai-flow/releases/tag/v1.0.0
