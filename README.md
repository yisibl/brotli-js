# brotli-js

<a href="https://github.com/yisibl/brotli-js/actions"><img alt="GitHub CI Status" src="https://github.com/yisibl/brotli-js/workflows/CI/badge.svg?branch=main"></a>

Google brotli binding to Node.js via Rust and napi-rs

- Fast, safe and zero dependencies!
- Cross-platform support, including [Apple M1](https://www.apple.com/newsroom/2020/11/apple-unleashes-m1/).
- No need for node-gyp and postinstall, the `.node` file has been compiled for you.

## Installation

```shell
npm i @brotli/brotli-js
cnpm i @brotli/brotli-js
pnpm i @brotli/brotli-js
```

## Support matrix

|                  | node12 | node14 | node16 | npm                                                                                                                                                                         |
| ---------------- | ------ | ------ | ------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Windows x64      | ✓      | ✓      | ✓      | [![npm version](https://img.shields.io/npm/v/@brotli/brotli-js-win32-x64-msvc.svg?sanitize=true)](https://www.npmjs.com/package/@brotli/brotli-js-win32-x64-msvc)           |
|                  |
| Windows x32      | ✓      | ✓      | ✓      | [![npm version](https://img.shields.io/npm/v/@brotli/brotli-js-win32-ia32-msvc.svg?sanitize=true)](https://www.npmjs.com/package/@brotli/brotli-js-win32-ia32-msvc)         |
|                  |
| Windows arm64    | ✓      | ✓      | ✓      | [![npm version](https://img.shields.io/npm/v/@brotli/brotli-js-win32-arm64-msvc.svg?sanitize=true)](https://www.npmjs.com/package/@brotli/brotli-js-win32-arm64-msvc)       |
|                  |
| macOS x64        | ✓      | ✓      | ✓      | [![npm version](https://img.shields.io/npm/v/@brotli/brotli-js-darwin-x64.svg?sanitize=true)](https://www.npmjs.com/package/@brotli/brotli-js-darwin-x64)                   |
|                  |
| macOS arm64(M1)  | ✓      | ✓      | ✓      | [![npm version](https://img.shields.io/npm/v/@brotli/brotli-js-darwin-arm64.svg?sanitize=true)](https://www.npmjs.com/package/@brotli/brotli-js-darwin-arm64)               |
|                  |
| Linux x64 gnu    | ✓      | ✓      | ✓      | [![npm version](https://img.shields.io/npm/v/@brotli/brotli-js-linux-x64-gnu.svg?sanitize=true)](https://www.npmjs.com/package/@brotli/brotli-js-linux-x64-gnu)             |
|                  |
| Linux x64 musl   | ✓      | ✓      | ✓      | [![npm version](https://img.shields.io/npm/v/@brotli/brotli-js-linux-x64-musl.svg?sanitize=true)](https://www.npmjs.com/package/@brotli/brotli-js-linux-x64-musl)           |
|                  |
| Linux arm gnu    | ✓      | ✓      | ✓      | [![npm version](https://img.shields.io/npm/v/@brotli/brotli-js-linux-arm-gnueabihf.svg?sanitize=true)](https://www.npmjs.com/package/@brotli/brotli-js-linux-arm-gnueabihf) |
|                  |
| Linux arm64 gnu  | ✓      | ✓      | ✓      | [![npm version](https://img.shields.io/npm/v/@brotli/brotli-js-linux-arm64-gnu.svg?sanitize=true)](https://www.npmjs.com/package/@brotli/brotli-js-linux-arm64-gnu)         |
|                  |
| Linux arm64 musl | ✓      | ✓      | ✓      | [![npm version](https://img.shields.io/npm/v/@brotli/brotli-js-linux-arm64-musl.svg?sanitize=true)](https://www.npmjs.com/package/@brotli/brotli-js-linux-arm64-musl)       |
|                  |
| Android arm64    | ✓      | ✓      | ✓      | [![npm version](https://img.shields.io/npm/v/@brotli/brotli-js-android-arm64.svg?sanitize=true)](https://www.npmjs.com/package/@brotli/brotli-js-android-arm64)             |
|                  |

## Build

You can set the name of the generated `.node` file in `napi.name` of package.json.

After `npm run build` command, you can see `brotlijs.[darwin|win32|linux].node` file in project root. This is the native addon built from [lib.rs](./src/lib.rs).

## Develop requirements

- Install latest `Rust`
- Install `Node.js@10+` which fully supported `Node-API`
- Install `yarn@1.x`

## Test in local

- yarn
- yarn build
- yarn test

And you will see:

```bash
$ ava --verbose

  ✔ sync function from native code
  ✔ sleep function from native code (201ms)
  ─

  2 tests passed
✨  Done in 1.12s.
```

## Release package

We use GitHub actions to automatically publish npm packages.

```
# 1.0.0 => 1.0.1
npm version patch

# or 1.0.0 => 1.1.0
npm version minor

git push --follow-tags
```

## License

MIT
