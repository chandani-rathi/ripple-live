
# Ripple Live Workspace Template

Starter monorepo template for building Ripple Live and sample app with TypeScript and Vite. Includes:

- A library package scaffold in `packages/ripple-live`
- Example/test app(s) in `apps/` that consume the library locally
- Testing with Vitest, TypeScript, ESLint and Prettier setup
- pnpm workspace configuration for local development

---

## Getting Started

### 1. Clone the template

Scaffold a new project with `degit`:

```bash
npx degit chandani-rathi/ripple-starter-templates/templates/ripple-live my-ripple-live
cd my-ripple-live
```

### 2. Rename your project (important for libraries)

To properly rename the monorepo and library package:

1. Update the root `package.json` `name` field.
2. Update the library package at `packages/ripple-live/package.json` `name` field (e.g. `"name": "@your-scope/my-lib"`).
3. If you rename folders, update `pnpm-workspace.yaml` to match.
4. Update any sample app references in `apps/*/package.json` and README files.

Tip: use your editor's global search/replace to catch remaining references.

---

### 3. Install dependencies

```bash
pnpm install
# or npm install / yarn install
```

### 4. Start a development app

Run an example app to develop and test the library locally:

```bash
cd apps/ripple-app
pnpm dev
# or npm run dev
```

The app runs at `http://localhost:5173` (Vite default).

### 5. Build library or apps

Build the library or apps as needed:

```bash
pnpm build
# or npm run build
```

### 6. Preview production build

```bash
pnpm serve
# or npm run serve
```

---

## Testing

This workspace uses [Vitest](https://vitest.dev/) for unit tests. Test files live under each package's `tests/` directory and use the `.test.ripple` extension.

Run tests from the workspace root:

```bash
pnpm test
# or npm test
```

Watch mode (development):

```bash
pnpm test:watch
```

Generate coverage (if configured):

```bash
pnpm test:coverage
```

For an enhanced VS Code experience, install the Vitest extension (`vitest.explorer`).

---

## Formatting & Linting

This template includes Prettier and ESLint configured for Ripple code.

Format or check formatting:

```bash
pnpm format
pnpm format:check
```

Run ESLint:

```bash
pnpm lint
```

Prettier configuration (in `.prettierrc`) includes the Ripple plugin to format `.ripple` files.

---

## Publish / Release

Typical publish workflow for the library package:

1. Bump version in `packages/ripple-live/package.json`.
2. Build the package: `pnpm --filter packages/ripple-live build` (or `cd packages/ripple-live && pnpm build`).
3. Publish from the package folder:

```bash
cd packages/ripple-live
npm publish
```

If you publish scoped packages or use a CI pipeline, follow your registry's authentication steps.

---

## Project Layout

```
packages/
  ripple-live/        # Library package source and tests
apps/
  ripple-app/        # Example app(s) that consume the library locally
pnpm-workspace.yaml  # Workspace configuration
package.json         # Root scripts and workspace config
```

- `packages/ripple-live/src/` - Library source code
- `packages/ripple-live/tests/` - Library unit tests
- `apps/*/` - Example applications for manual testing and demos

---

## Developing & Testing Locally

Use the example apps to verify changes without publishing:

1. Make changes in `packages/ripple-live/src/`.
2. Run an example app in `apps/`:

```bash
cd apps/ripple-app
pnpm dev
```

3. Import the local library in app code:

```js
import { something } from 'ripple-live';
```

4. When ready, build and publish the library package from `packages/ripple-live`.

---

## VS Code Extensions

For best DX, consider installing:

- Prettier (`esbenp.prettier-vscode`)
- Ripple plugin for VS Code (`ripple-ts.vscode-plugin`)
- Vitest explorer (`vitest.explorer`)

---

## Learn More

- [Ripple Documentation](https://github.com/Ripple-TS/ripple)
- [Vite Documentation](https://vitejs.dev/)
- [Vitest Documentation](https://vitest.dev/)

