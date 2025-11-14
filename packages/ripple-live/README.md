
# ripple-live

Live code playground components for the Ripple framework — TypeScript-first

A small, focused library that provides editable code playground primitives for Ripple (`.ripple`) apps: a provider to evaluate code, an editor component, and a live preview renderer. ripple-live is inspired by projects such as react-live but implemented and typed for the Ripple ecosystem and TypeScript.

- Lightweight and framework-native: designed to work with Ripple files and tooling.
- TypeScript-first: ship type declarations and use strict types across the public API.
- Testable: includes Vitest tests and example apps to exercise runtime behavior.


## Quick overview

The package exports the main primitives you need to build an editable playground:

```ts
export { LiveProvider, LiveEditor, LivePreview, LiveContext } from 'ripple-live'
```

(These match the exports found in `packages/ripple-live/src/index.ts`.)


## Install

This repository is a pnpm monorepo scaffold. To install dependencies for local development:

```powershell
pnpm install
```

To add `ripple-live` to an external project (published package):

```powershell
pnpm add ripple-live
# or using your scope, e.g. pnpm add @your-scope/ripple-live
```


## Quick start (in a Ripple app)

1. Wrap the part of your app that should evaluate live code with `LiveProvider`.
2. Use `LiveEditor` to edit source and `LivePreview` to render the output.

Example (TypeScript / Ripple-UI pseudocode):

```ts
import { LiveProvider, LiveEditor, LivePreview } from 'ripple-live'

const initialCode = `
<div style={{ padding: 16, background: '#0b1220', color: 'white' }}>
  <h3>Hello from ripple-live!</h3>
</div>
`;

<LiveProvider code={initialCode} scope={{ /* values visible to the evaluated code */ }}>
  <LiveEditor />
  <LivePreview />
</LiveProvider>
```

Notes:
- `code` is the editable source string passed to the provider.
- `scope` (optional) is an object of values/components that the live code can reference.
- The above example is framework-agnostic pseudocode — consult the exported component prop types for exact names and TS types.


## TypeScript & Types

This project ships type declarations. The primary package entry (`packages/ripple-live/src/index.ts`) re-exports the public modules. When using the package in TypeScript projects, you should get autocomplete for `LiveProvider`, `LiveEditor`, and `LivePreview`.

If you need to extend types for your app, open the package source under `packages/ripple-live/src/` and update `*.d.ts` or `*.ts` files accordingly.


## Development workflow (monorepo)

- Start a watcher to build the library while you work:

```powershell
pnpm --filter ripple-live build -- --watch
# or use the workspace script: pnpm --filter ripple-live watch
```

- Run an example app to verify runtime behavior locally:

```powershell
cd apps/ripple-app
pnpm dev
```

The example app imports the local package version (workspace linked) so changes in `packages/ripple-live` are available to `apps/ripple-app` during development.


## Testing

Tests are implemented with Vitest and live under `packages/ripple-live/tests/`.

Run all tests in the workspace:

```powershell
pnpm test
```

Run tests for the library package only:

```powershell
pnpm --filter ripple-live test
```


## Contributing

Contributions are welcome. Suggested steps:

- Open an issue describing the change or improvement.
- Create a branch and a concise PR with tests where appropriate.
- Keep changes focused; run the example app and tests locally before opening a PR.

Helpful commands for contributors:

```powershell
pnpm install
pnpm --filter ripple-live build
pnpm --filter ripple-live test
```


## Migration notes (from react-live)

This project is inspired by live-edit playgrounds such as react-live but differs in the following ways:

- Targets the Ripple framework and `.ripple` source files.
- Uses TypeScript across the codebase and for published types.
- Exposes a minimal API surface focused on provider/editor/preview primitives.

If you are migrating examples from react-live, adapt imports and ensure the evaluated code references Ripple runtime APIs instead of React APIs.


## Project layout

```
packages/
  ripple-live/        # library source, types and tests
apps/
  ripple-app/         # example/demos using the library
```


## License & Credits

- This repository is MIT licensed. See `LICENSE` for details.
- Inspired by React Live (FormidableLabs / NearForm). See https://nearform.com/open-source/react-live/ and https://github.com/FormidableLabs/react-live for the original project and ideas.

