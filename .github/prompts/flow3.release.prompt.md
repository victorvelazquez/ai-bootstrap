# Release Workflow

Automate publishing a new version following semver and syncing npm + git.

## Step 1/5: Determine Version

Read `package.json` → identify current version → apply semver:

- **Patch** (`1.0.X+1`): bug fixes, minor improvements
- **Minor** (`1.X+1.0`): new backward-compatible functionality
- **Major** (`X+1.0.0`): breaking changes

## Step 2/5: Update Version References

Files to modify with new version `X.X.X`:

- `package.json` → `"version"` field
- `src/cli.ts` → ASCII banner, `config.version`, and `.version()`
- `templates/AGENT.template.md` → if applicable

## Step 3/5: Commit and Tag

```sh
git add package.json src/cli.ts templates/AGENT.template.md
git commit -m "chore: bump version to X.X.X"
git tag vX.X.X
git push origin main --tags
```

## Step 4/5: Publish to npm

```sh
npm publish --access public
```

## Step 5/5: Verify

- ✅ Version visible at [npmjs.com/package/ai-bootstrap](https://npmjs.com/package/ai-bootstrap)
- ✅ Tag `vX.X.X` present in GitHub releases
