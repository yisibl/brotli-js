const { loadBinding } = require('@node-rs/helper')

/**
 * __dirname means load native addon from current dir
 * '@brotli' means native addon name is `@brotli`
 * the first arguments was decided by `napi.name` field in `package.json`
 * the second arguments was decided by `name` field in `package.json`
 * loadBinding helper will load `@brotli.[PLATFORM].node` from `__dirname` first
 * If failed to load addon, it will fallback to load from `@brotli/brotlijs-[PLATFORM]`
 */
module.exports = loadBinding(__dirname, 'brotlijs', '@brotli/brotli-js')
