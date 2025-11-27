# Release Workflow

Automatiza la publicación de una nueva versión siguiendo semver y sincronizando npm + git.

## 1. Determinar nueva versión

Lee `package.json` → identifica versión actual → aplica semver:

- **Patch** (`1.0.X+1`): fixes, mejoras menores
- **Minor** (`1.X+1.0`): nueva funcionalidad compatible
- **Major** (`X+1.0.0`): breaking changes

## 2. Actualizar referencias de versión

Archivos a modificar con la nueva versión `X.X.X`:

- `package.json` → campo `"version"`
- `src/cli.ts` → banner ASCII, `config.version`, y `.version()`
- `templates/AGENT.template.md` → si aplica

## 3. Commit y tag

```sh
git add package.json src/cli.ts templates/AGENT.template.md
git commit -m "chore: bump version to X.X.X"
git tag vX.X.X
git push origin main --tags
```

## 4. Publicar en npm

```sh
npm publish --access public
```

## 5. Verificar

- ✅ Versión visible en [npmjs.com/package/ai-bootstrap](https://npmjs.com/package/ai-bootstrap)
- ✅ Tag `vX.X.X` presente en GitHub releases
