# Social Developer ⚡️

The red social Open Sources Built with love and nostalgia 🐱

## Guide

#### Add Integrations and deployment

Use the `pnpm qwik add` command to add additional integrations.

```shell
pnpm qwik add
```

#### Development

Development mode uses [Vite's development server](https://vitejs.dev/). The `dev` command will server-side render (SSR) the output during development.

```shell
pnpm start
```

> Note: during dev mode, Vite may request a significant number of `.js` files. This does not represent a Qwik production build.

#### Preview

The preview command will create a production build of the client modules, a production build of `src/entry.preview.tsx`, and run a local server. The preview server is only for convenience to preview a production build locally and should not be used as a production server.

```shell
pnpm preview
```

#### Test

```shell
pnpm test
```

#### Production

The production build will generate client and server modules by running both client and server build commands. The build command will use Typescript to run a type check on the source code.

```shell
pnpm build
```
