# Phase 7: Store Deployment

**Duration:** 15-20 minutes
**Questions:** ~12 questions
**Output:** docs/app-store.md, specs/build-configuration.md, specs/deployment.md, parts of ai-instructions.md

---

## 🎯 Objective

Define your app store deployment strategy:

1. Which app stores will you publish to?
2. What CI/CD pipeline will you use?
3. How will you handle versioning?
4. What code signing strategy?
5. What beta testing approach?

---

## 📋 Questions

### Question 7.1: Target App Stores

**Which app stores will you publish to?**

A) ⭐ **Apple App Store (iOS)** (Required for iOS)

- Requires: Apple Developer Account ($99/year)
- Review process: 1-3 days typically
- Best for: iOS apps

B) ⭐ **Google Play Store (Android)** (Required for Android)

- Requires: Google Play Developer Account ($25 one-time)
- Review process: Usually instant, can take hours
- Best for: Android apps

C) 🔥 **Both App Store + Play Store** (Recommended for cross-platform)

- Maximum reach
- Best for: Most apps

D) **Enterprise Distribution Only**

- Internal distribution
- No public store
- Best for: Enterprise apps

**Your answer:**

---

### Question 7.2: CI/CD Pipeline

**What CI/CD tool will you use for builds and deployment?**

A) ⭐ **Fastlane** (Recommended)

- Automates builds, screenshots, deployment
- Works with iOS and Android
- Integrates with GitHub Actions, Bitrise, etc.
- Best for: Most projects

B) **Codemagic**

- Cloud-based CI/CD for Flutter/React Native
- Easy setup, good for small teams
- Best for: Flutter/React Native apps

C) **GitHub Actions**

- Flexible, free for public repos
- Custom workflows
- Best for: GitHub-hosted projects

D) **Bitrise**

- Mobile-focused CI/CD
- Good for complex workflows
- Best for: Enterprise teams

E) **Manual Builds**

- Build locally, upload manually
- Best for: Learning, small projects

**Your answer:**

---

### Question 7.3: Versioning Strategy

**How will you version your app?**

A) ⭐ **Semantic Versioning** (Recommended)

- Format: `MAJOR.MINOR.PATCH` (e.g., `1.2.3`)
- MAJOR: Breaking changes
- MINOR: New features, backward compatible
- PATCH: Bug fixes
- Best for: Most apps

B) **Date-based Versioning**

- Format: `YYYY.MM.DD` (e.g., `2025.01.20`)
- Best for: Frequent releases

C) **Build Number Only**

- Incrementing build number
- Best for: Simple apps

**Your answer:**

**Version code strategy (Android):**

- A) ⭐ **Incrementing integer** (1, 2, 3, ...)
- B) **Based on version** (e.g., 1.2.3 → 10203)

**Build number strategy (iOS):**

- A) ⭐ **Incrementing integer** (1, 2, 3, ...)
- B) **Based on version** (e.g., 1.2.3 → 10203)

---

### Question 7.4: Code Signing Strategy

**How will you handle code signing?**

**For iOS:**

- A) ⭐ **Automatic Signing** (Recommended)

  - Xcode manages certificates
  - Easier for most developers
  - Best for: Most apps

- B) **Manual Signing**
  - More control
  - Required for enterprise apps
  - Best for: Advanced scenarios

**For Android:**

- A) ⭐ **Automatic Signing** (Recommended)

  - Gradle manages keystores
  - Easier for most developers
  - Best for: Most apps

- B) **Manual Signing**
  - More control
  - Required for some enterprise scenarios
  - Best for: Advanced scenarios

**Your answer:**

**Keystore management:**

- A) ⭐ **Store in CI/CD secrets** (Recommended)

  - GitHub Secrets, Bitrise Secrets, etc.
  - Secure, automated

- B) **Store locally**
  - Manual management
  - Best for: Small teams

---

### Question 7.5: Beta Testing Strategy

**How will you handle beta testing?**

A) ⭐ **TestFlight (iOS) + Firebase App Distribution (Android)** (Recommended)

- Free, easy to use
- TestFlight: Up to 10,000 testers
- Firebase: Unlimited testers
- Best for: Most projects

B) **TestFlight (iOS) + Google Play Internal Testing (Android)**

- Official store channels
- Internal testing: Up to 100 testers
- Best for: Store-focused testing

C) **TestFlight (iOS) + Google Play Closed Beta (Android)**

- Closed beta: Up to 20,000 testers
- Best for: Larger beta programs

D) **HockeyApp / App Center**

- Microsoft's solution
- Good for enterprise

E) **No Beta Testing**

- Direct to production
- Best for: MVPs, internal apps

**Your answer:**

---

### Question 7.6: Release Strategy

**What release strategy will you use?**

A) ⭐ **Staged Rollout** (Recommended)

- Release to 10% → 50% → 100% of users
- Monitor for issues before full release
- Best for: Most apps

B) **Gradual Rollout**

- Release to specific countries/regions first
- Expand gradually
- Best for: Global apps

C) **Full Release**

- Release to 100% immediately
- Best for: Small updates, bug fixes

**Your answer:**

---

### Question 7.7: App Store Metadata

**What metadata will you prepare for stores?**

**Required:**

- [ ] App name (30 chars iOS, 50 chars Android)
- [ ] App description (4000 chars)
- [ ] Screenshots (various sizes)
- [ ] App icon (1024x1024 iOS, 512x512 Android)
- [ ] Privacy policy URL

**Optional:**

- [ ] Promotional text
- [ ] Keywords (iOS only)
- [ ] App preview videos
- [ ] Feature graphic (Android)

**Your answer:**

---

### Question 7.8: Screenshot Automation

**Will you automate screenshot generation?**

A) ⭐ **Yes - Fastlane Screenshots** (Recommended)

- Automate screenshots for all devices
- Update automatically on each release
- Best for: Most apps

B) **Yes - Manual Scripts**

- Custom screenshot scripts
- Best for: Custom requirements

C) **No - Manual Screenshots**

- Take screenshots manually
- Best for: Small teams, infrequent updates

**Your answer:**

---

### Question 7.9: App Review Preparation

**How will you prepare for app review?**

**For iOS App Store:**

- [ ] Test on latest iOS version
- [ ] Test on multiple device sizes
- [ ] Ensure all features work
- [ ] Prepare demo account credentials
- [ ] Review App Store guidelines
- [ ] Test in TestFlight first

**For Google Play:**

- [ ] Test on latest Android version
- [ ] Test on multiple device sizes
- [ ] Ensure all features work
- [ ] Prepare demo account credentials
- [ ] Review Play Store policies
- [ ] Test in internal testing first

**Your answer:**

---

### Question 7.10: Update Frequency

**How often will you release updates?**

A) ⭐ **As Needed** (Recommended)

- Release when features are ready
- Best for: Most apps

B) **Weekly**

- Regular weekly releases
- Best for: Rapid iteration

C) **Bi-weekly**

- Every two weeks
- Best for: Balanced approach

D) **Monthly**

- Once per month
- Best for: Stable apps

**Your answer:**

---

### Question 7.11: Rollback Strategy

**How will you handle rollbacks?**

A) ⭐ **Store Rollback** (Recommended)

- Revert to previous version in store
- Best for: Critical bugs

B) **Hotfix Release**

- Release emergency fix
- Best for: Quick fixes

C) **No Rollback Plan**

- Not recommended
- Best for: Very small apps

**Your answer:**

---

### Question 7.12: Monitoring & Analytics

**What monitoring will you use post-deployment?**

A) ⭐ **Firebase Analytics + Crashlytics** (Recommended)

- Free, comprehensive
- Works with iOS and Android
- Best for: Most apps

B) **Sentry**

- Excellent error tracking
- Good for: Production apps

C) **App Store Connect Analytics + Play Console Analytics**

- Built-in store analytics
- Best for: Store metrics

D) **Custom Analytics**

- Mixpanel, Amplitude, etc.
- Best for: Advanced analytics

**Your answer:**

---

## ✅ Phase 7 Completion

After answering all questions, summarize:

```
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
✅ Phase 7 Complete: Store Deployment
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Selected Deployment Strategy:
- Stores: {{TARGET_STORES}}
- CI/CD: {{CICD_PIPELINE}}
- Versioning: {{VERSIONING_STRATEGY}}
- Code Signing: {{CODE_SIGNING}}
- Beta Testing: {{BETA_TESTING}}
- Release Strategy: {{RELEASE_STRATEGY}}
- Monitoring: {{MONITORING_TOOLS}}

Generated Documents:
✅ docs/app-store.md
✅ specs/build-configuration.md
✅ specs/deployment.md
✅ .env.example

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

📊 Progress Summary:

Phases 1-7 completed:
✅ project-brief.md (Phase 1)
✅ docs/app-structure.md (Phase 2)
✅ docs/architecture.md (Phase 3)
✅ ai-instructions.md (Phase 3)
✅ docs/code-standards.md (Phase 5)
✅ docs/testing.md (Phase 6)
✅ docs/app-store.md (Phase 7)
✅ specs/build-configuration.md (Phase 7)
✅ specs/deployment.md (Phase 7)
✅ .env.example (Phase 7)

Remaining:
⏭️  Phase 8: Project setup & final documentation

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🎯 Next: Phase 8 - Project Setup & Final Documentation
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Phase 8 will:
- 🔍 Detect project state (new vs existing)
- 🚀 Initialize framework (optional, for new projects)
- 📝 Generate final docs (platform-guides, navigation-guide, contributing)
- 📖 Generate AGENT.md (master documentation index)
- 📄 Generate README.md (with intelligent merge if needed)
- 🤖 Create tool-specific configs (based on AI selection)

Continue to Phase 8? (yes/no)
```

---

**Last Updated:** 2025-12-09

**Version:** 2.0.0 (Unified workflow with Phase 8)
