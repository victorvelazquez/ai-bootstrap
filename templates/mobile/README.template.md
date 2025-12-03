# {{PROJECT_NAME}}

> {{PROJECT_DESCRIPTION}}

---

## 🚀 Quick Start

### Prerequisites

**For iOS Development:**
- macOS (required for iOS development)
- Xcode {{XCODE_VERSION}} or higher
- CocoaPods (if using React Native)
- Apple Developer Account ($99/year)

**For Android Development:**
- Android Studio {{ANDROID_STUDIO_VERSION}} or higher
- JDK {{JDK_VERSION}}
- Android SDK

**For Cross-Platform:**
- Node.js {{NODE_VERSION}} or higher
- {{PACKAGE_MANAGER}} (npm/yarn/pnpm)
- React Native CLI or Flutter SDK

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd {{PROJECT_NAME}}

# Install dependencies
{{PACKAGE_MANAGER}} install

# iOS: Install pods (if React Native)
cd ios && pod install && cd ..

# Start development server
{{PACKAGE_MANAGER}} run start

# Run on iOS
{{PACKAGE_MANAGER}} run ios

# Run on Android
{{PACKAGE_MANAGER}} run android
```

### Environment Setup

Copy `.env.example` to `.env` and configure:

```bash
cp .env.example .env
```

See `specs/configuration.md` for all environment variables.

---

## 📁 Project Structure

```
{{FOLDER_STRUCTURE}}
```

---

## 🛠️ Development

### Available Scripts

- `{{PACKAGE_MANAGER}} run start` - Start Metro bundler
- `{{PACKAGE_MANAGER}} run ios` - Run on iOS simulator
- `{{PACKAGE_MANAGER}} run android` - Run on Android emulator
- `{{PACKAGE_MANAGER}} run test` - Run tests
- `{{PACKAGE_MANAGER}} run lint` - Run linter
- `{{PACKAGE_MANAGER}} run format` - Format code

### Tech Stack

- **Platform:** {{PLATFORMS}}
- **Framework:** {{FRAMEWORK}} {{FRAMEWORK_VERSION}}
- **Language:** {{LANGUAGE}} {{LANGUAGE_VERSION}}
- **Navigation:** {{NAVIGATION_LIBRARY}}
- **State Management:** {{STATE_MANAGEMENT}}
- **Storage:** {{STORAGE_SOLUTION}}
- **Testing:** {{UNIT_TEST_FRAMEWORK}}, {{E2E_FRAMEWORK}}

See `ai-instructions.md` for complete tech stack.

---

## 📚 Documentation

**For AI Assistants:**
- `AGENT.md` - Start here for AI context
- `ai-instructions.md` - Tech stack and rules

**For Developers:**
- `docs/architecture.md` - System architecture
- `docs/navigation.md` - Navigation patterns
- `docs/state-management.md` - State patterns
- `docs/offline-strategy.md` - Offline and sync strategy
- `docs/permissions.md` - Permissions handling
- `docs/native-features.md` - Native features integration
- `docs/testing.md` - Testing strategy
- `docs/app-store.md` - App Store configuration
- `specs/build-configuration.md` - Build configuration
- `specs/deployment.md` - Deployment procedures

---

## 🧪 Testing

```bash
# Run unit tests
{{PACKAGE_MANAGER}} run test

# Run with coverage
{{PACKAGE_MANAGER}} run test:coverage

# Run E2E tests
{{PACKAGE_MANAGER}} run test:e2e

# Run on physical device
{{PACKAGE_MANAGER}} run ios --device
{{PACKAGE_MANAGER}} run android --device
```

---

## 📱 Building for Production

### iOS

```bash
# Build for App Store
{{PACKAGE_MANAGER}} run build:ios:release

# Archive and upload via Xcode
# Or use Fastlane: fastlane ios release
```

### Android

```bash
# Build APK
{{PACKAGE_MANAGER}} run build:android:apk

# Build AAB (for Play Store)
{{PACKAGE_MANAGER}} run build:android:aab

# Or use Fastlane: fastlane android release
```

See `specs/deployment.md` for detailed deployment instructions.

---

## 🚀 Deployment

### App Store (iOS)

1. Build and archive in Xcode
2. Upload to App Store Connect
3. Submit for review

See `docs/app-store.md` for detailed instructions.

### Play Store (Android)

1. Build AAB file
2. Upload to Google Play Console
3. Submit for review

See `docs/app-store.md` for detailed instructions.

---

## 📄 License

{{LICENSE}}

---

## 🤝 Contributing

See `docs/contributing.md` for contribution guidelines.

---

**Last Updated:** {{LAST_UPDATED}}

