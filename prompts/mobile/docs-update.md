# AI Bootstrap - Documentation Update Command (Mobile)

**YOU ARE AN EXPERT MOBILE ARCHITECT AND DOCUMENTATION SPECIALIST.**

Your mission is to detect changes in the mobile codebase and update the project documentation automatically when the user executes `/docs-update`.

---

## Command: `/docs-update`

### Objective

Detect changes in the mobile codebase compared to the last documented state (stored in `.ai-bootstrap/analysis.json`) and update all affected documentation files automatically.

---

## Execution Flow

### Step 1: Check for Analysis File

```
First, check if `.ai-bootstrap/analysis.json` exists:

- ✅ If exists → Proceed to Step 2 (Compare Changes)
- ❌ If NOT exists → Execute full Phase 0 analysis first:
  - Run complete mobile code analysis (as described in Phase 0)
  - Create `.ai-bootstrap/analysis.json` with current state
  - Then proceed to Step 2
```

### Step 2: Detect Changes

**Reuse Phase 0 Analysis Logic:**

1. **Perform Current Code Analysis:**

   - Execute the same analysis as Phase 0 (mobile/bootstrap-phase0-context.md):
     - File structure analysis
     - Screen and component detection
     - Navigation pattern detection
     - State management pattern detection
     - Permission detection (iOS Info.plist, Android AndroidManifest.xml)
     - Native module detection
     - Build configuration analysis
     - Dependency analysis
   - Generate current state snapshot

2. **Compare with Previous State:**

   - Load `.ai-bootstrap/analysis.json`
   - Compare current state vs previous state
   - Detect changes in:
     - **Screens:** New, modified, or deleted screens
     - **Navigation:** New routes, navigation pattern changes
     - **State Management:** New stores, hooks, or state patterns
     - **Permissions:** New permissions requested
     - **Native Features:** New native modules or integrations
     - **Dependencies:** New libraries, updated versions
     - **Architecture:** New modules, changed patterns
     - **Build Configuration:** Changes in build.gradle, Podfile, app.json
     - **Configuration:** New environment variables, external services

3. **Generate Change Report:**
   - Categorize changes by type
   - Map changes to affected documentation files
   - Identify critical vs optional updates

### Step 3: Present Report and Confirm

**If changes detected:**

```
📊 CHANGES DETECTED:

🔴 Documents that require updating:
- docs/navigation.md (2 new screens: ProfileScreen, SettingsScreen)
- docs/permissions.md (new permission: Camera)
- docs/native-features.md (new native module: react-native-camera)
- docs/state-management.md (new Redux store: userSlice)
- ai-instructions.md (new dependency "react-native-camera")

⚠️ Moderate changes detected:
- docs/architecture.md (change in folder structure)
- specs/build-configuration.md (change in build.gradle)

✅ No changes: docs/testing.md, docs/offline-strategy.md

Update all detected documents? (Y/N)
```

**If NO changes detected:**

```
✅ No changes detected. Documentation is synchronized with current code.

No updates required.
```

### Step 4: Update Documents (If User Confirms)

**If user responds "Y", "Yes", "y", "yes", or similar:**

1. **For each document that needs updating:**

   **A) `docs/navigation.md`** (if screens/navigation changed):

   - Read current `docs/navigation.md`
   - Identify new/modified screens from analysis
   - Add new screens following existing navigation conventions
   - Update navigation structure if changed
   - Remove deleted screens (if any)
   - Maintain all existing content that hasn't changed
   - Regenerate affected sections only

   **B) `docs/permissions.md`** (if permissions changed):

   - Read current `docs/permissions.md`
   - Add new permissions detected in Info.plist or AndroidManifest.xml
   - Update permission descriptions if changed
   - Maintain all existing permissions

   **C) `docs/native-features.md`** (if native modules changed):

   - Read current `docs/native-features.md`
   - Add new native modules detected in dependencies
   - Update native feature integrations
   - Maintain all existing native features

   **D) `docs/state-management.md`** (if state management changed):

   - Read current `docs/state-management.md`
   - Update state management patterns with new stores/hooks
   - Update state structure if changed
   - Maintain all existing content that hasn't changed

   **E) `docs/offline-strategy.md`** (if offline strategy changed):

   - Read current `docs/offline-strategy.md`
   - Update offline patterns if storage solution changed
   - Update sync strategy if changed
   - Maintain all existing content

   **F) `ai-instructions.md`** (if dependencies changed):

   - Read current `ai-instructions.md`
   - Add new dependencies to appropriate sections
   - Update version numbers if changed
   - Maintain all existing rules and patterns

   **G) `docs/architecture.md`** (if architecture changed):

   - Read current `docs/architecture.md`
   - Update architecture diagram (mermaid) if structure changed
   - Update module descriptions
   - Maintain all existing content

   **H) `specs/build-configuration.md`** (if build config changed):

   - Read current `specs/build-configuration.md`
   - Update build configuration if build.gradle, Podfile, or app.json changed
   - Update version information if changed
   - Maintain existing configuration

   **I) `specs/deployment.md`** (if deployment changed):

   - Read current `specs/deployment.md`
   - Update deployment procedures if changed
   - Maintain existing procedures

   **J) `docs/app-store.md`** (if app store config changed):

   - Read current `docs/app-store.md`
   - Update app store configuration if app.json or build config changed
   - Maintain existing configuration

2. **Update `analysis.json`:**

   - Save current state to `.ai-bootstrap/analysis.json`
   - Update timestamp
   - Include all detected changes in metadata

3. **Present Summary:**

```
✅ DOCUMENTATION UPDATED:

📝 docs/navigation.md
- Added 2 new screens (ProfileScreen, SettingsScreen)
- Updated navigation structure
- Maintained all existing navigation documentation

📝 docs/permissions.md
- Added new permission (Camera)
- Updated permission handling section

📝 docs/native-features.md
- Added new native module (react-native-camera)
- Updated native features integration section

📝 docs/state-management.md
- Added new Redux store (userSlice)
- Updated state management patterns

📝 ai-instructions.md
- Added dependency "react-native-camera"
- Updated tools section

📝 specs/build-configuration.md
- Updated build.gradle configuration

✅ analysis.json updated with new state
```

### Step 5: Handle Cancellation

**If user responds "N", "No", "n", "no", or similar:**

```
Update cancelled. Run `/docs-update` when you're ready to update the documentation.
```

---

## Change Detection Rules

### Screens Detection

**What triggers `docs/navigation.md` update:**

- New screen files (`.tsx`, `.jsx`, `.dart`, `.swift`, `.kt`)
- New screen directories (`screens/`, `pages/`)
- Modified navigation structure
- Deleted screens

**How to update:**

- Add new screens following existing navigation conventions from Phase 2
- Use same format, navigation patterns as existing screens
- Maintain all existing screens unchanged

### Permissions Detection

**What triggers `docs/permissions.md` update:**

- New permissions in `Info.plist` (iOS)
- New permissions in `AndroidManifest.xml` (Android)
- Modified permission descriptions
- Deleted permissions

**How to update:**

- Add new permissions to permissions documentation
- Update permission descriptions if changed
- Maintain all existing permissions

### Native Features Detection

**What triggers `docs/native-features.md` update:**

- New native modules in `package.json` (React Native)
- New native modules in `pubspec.yaml` (Flutter)
- New native code files (`.swift`, `.kt`, `.m`, `.java`)
- Modified native integrations

**How to update:**

- Add new native modules to native features documentation
- Update integration patterns if changed
- Maintain all existing native features

### State Management Detection

**What triggers `docs/state-management.md` update:**

- New store files (Redux, Zustand, MobX, Provider, Bloc, etc.)
- New custom hooks (`use*` files)
- New state management patterns
- Modified state structure
- Deleted stores or hooks

**How to update:**

- Add new stores/hooks to state management documentation
- Update state patterns if changed
- Maintain all existing state management documentation

### Build Configuration Detection

**What triggers `specs/build-configuration.md` update:**

- Changes in `build.gradle` (Android)
- Changes in `Podfile` (iOS)
- Changes in `app.json` or `app.config.js` (React Native)
- Changes in `pubspec.yaml` (Flutter)
- Version number changes

**How to update:**

- Update build configuration documentation
- Update version information
- Maintain existing configuration

### Dependencies Detection

**What triggers `ai-instructions.md` update:**

- New entries in `package.json` or `pubspec.yaml`
- Updated version numbers
- New framework or library

**How to update:**

- Add to dependencies section
- Update version information
- Add to tools/libraries list if significant
- Maintain all existing dependencies

### Architecture Detection

**What triggers `docs/architecture.md` update:**

- New modules or directories
- Changed directory structure
- New architectural patterns detected

**How to update:**

- Update architecture diagram (mermaid)
- Add new modules to description
- Maintain existing architecture description

### Configuration Detection

**What triggers `specs/configuration.md` update:**

- New environment variables in code
- New external service integrations
- Changed configuration patterns

**How to update:**

- Add new variables to configuration spec
- Maintain existing variables

---

## Important Rules

1. **Incremental Updates Only:**

   - Only modify sections that changed
   - Preserve all existing content that hasn't changed
   - Maintain document structure and formatting

2. **Follow Existing Patterns:**

   - Use same format as existing documentation
   - Follow conventions established in original bootstrap
   - Maintain consistency with existing docs

3. **Update Analysis File:**

   - Always update `.ai-bootstrap/analysis.json` after document updates
   - Include timestamp and change summary
   - Save complete current state for next comparison

4. **Mermaid Diagrams:**

   - Regenerate navigation diagrams when screens change
   - Regenerate architecture diagrams when structure changes
   - Use mermaid format for all diagrams

5. **Error Handling:**
   - If document doesn't exist, create it following template
   - If analysis.json is corrupted, regenerate it
   - If comparison fails, show error and suggest full Phase 0 re-run

---

## Example Execution

```
User: /docs-update

AI:
📊 CHANGES DETECTED:

🔴 Documents that require updating:
- docs/navigation.md (1 new screen: ProfileScreen)
- docs/permissions.md (new permission: Location)

✅ No changes: docs/state-management.md, docs/testing.md, ai-instructions.md

Update all detected documents? (Y/N)

User: Y

AI:
✅ DOCUMENTATION UPDATED:

📝 docs/navigation.md
- Added 1 new screen (ProfileScreen)
- Maintained all existing navigation documentation

📝 docs/permissions.md
- Added new permission (Location)
- Updated permission handling section

✅ analysis.json updated with new state

Documentation synchronized successfully.
```

---

**BEGIN EXECUTION when user runs `/docs-update`**

