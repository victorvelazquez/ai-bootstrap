# Project Scope Levels

> **Canonical definition of MVP, Production-Ready, and Enterprise scope levels.**
>
> This file defines how scope affects phase execution, question depth, and technology choices across all AI Flow workflows.
---
## Scope Level Summary
---
| Scope                | Symbol | Duration (Backend) | Phases    | Best For                           |
| -------------------- | ------ | ------------------ | --------- | ---------------------------------- |
| **MVP**              | 🚀     | 60-80 min          | Core only | Prototypes, proof of concept       |
| **Production-Ready** | ⭐     | 90-120 min         | All       | Production apps, client projects   |
| **Enterprise**       | 🏆     | 120-160 min        | Extended  | Large-scale, mission-critical apps |
---
## MVP Scope 🚀
---
### Characteristics

- **Phases included:** Core phases only (Phase 1-4 in backend)
- **Question depth:** Simplified, essential questions only
- **Technology choices:** Simple, proven defaults

### Technology Defaults

| Category       | MVP Choice                     |
| -------------- | ------------------------------ |
| Database       | PostgreSQL (single instance)   |
| ORM            | Framework-idiomatic            |
| Caching        | None or in-memory              |
| Search         | Database LIKE queries          |
| Architecture   | Monolith                       |
| API Style      | REST only                      |
| Authentication | JWT (basic)                    |
| Authorization  | RBAC (simple roles)            |
| Password       | bcrypt, 8+ chars               |
| Git Workflow   | GitHub Flow                    |
| Test Coverage  | 15-25%                         |
| Test Types     | Unit tests only                |
| Deployment     | PaaS (Heroku, Railway, Render) |
| Monitoring     | Basic (health checks, logs)    |
---
## Production-Ready Scope ⭐
---
### Characteristics

- **Phases included:** All phases (1-7/8)
- **Question depth:** Complete professional coverage
- **Technology choices:** Robust, scalable defaults

### Technology Defaults

| Category       | Production Choice                   |
| -------------- | ----------------------------------- |
| Database       | PostgreSQL (managed)                |
| ORM            | Framework-idiomatic                 |
| Caching        | Redis                               |
| Search         | PostgreSQL Full-Text or Meilisearch |
| Architecture   | Clean Architecture                  |
| API Style      | REST + GraphQL (optional)           |
| Authentication | JWT + Refresh Tokens                |
| Authorization  | RBAC (granular permissions)         |
| Password       | bcrypt 12 rounds, 12+ chars         |
| Git Workflow   | Git Flow                            |
| Test Coverage  | 70%                                 |
| Test Types     | Unit, Integration, E2E              |
| Deployment     | Cloud (AWS/GCP/Azure)               |
| Monitoring     | APM (Datadog/New Relic) + Sentry    |
---
## Enterprise Scope 🏆
---
### Characteristics

- **Phases included:** All phases with extended questions
- **Question depth:** Advanced, comprehensive
- **Technology choices:** Enterprise-grade, highly scalable

### Technology Defaults

| Category       | Enterprise Choice                      |
| -------------- | -------------------------------------- |
| Database       | PostgreSQL (multi-region/sharded)      |
| ORM            | Framework-idiomatic                    |
| Caching        | Redis Cluster                          |
| Search         | Elasticsearch                          |
| Architecture   | Microservices / Domain-Driven Design   |
| API Style      | REST + GraphQL + gRPC                  |
| Authentication | OAuth2 + SSO + MFA                     |
| Authorization  | ABAC (Attribute-Based)                 |
| Password       | bcrypt 14 rounds, 16+ chars, policies  |
| Git Workflow   | Git Flow + Release branches            |
| Test Coverage  | 85%+                                   |
| Test Types     | Unit, Integration, E2E, Load, Security |
| Deployment     | Multi-region, Kubernetes               |
| Monitoring     | Full observability stack               |
---
## Scope Selection Prompt
---
```
---
🎯 Project Scope Selection
---
What scope level do you want for this documentation?

A) 🚀 **MVP** (60-80 min) - Core features only, minimal setup
   - Core phases only
   - Simple architecture
   - Basic testing
   - Best for: Prototypes, proof of concept

B) ⭐ **Production-Ready** (90-120 min) - Complete professional setup
   - All phases
   - Robust architecture
   - Comprehensive testing + CI/CD
   - Best for: Production apps, client projects

C) 🏆 **Enterprise** (120-160 min) - Advanced features and scalability
   - All phases with extended questions
   - Enterprise architecture
   - Full observability + compliance
   - Best for: Large-scale, mission-critical apps

Your choice (A/B/C):
```



