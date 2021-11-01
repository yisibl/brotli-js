/* eslint-disable no-console */
import { randomBytes } from 'crypto'
import b from 'benny'

import { compress as compressJs } from '../index'
import { compress as compressIltorb } from 'iltorb'
import { compress as compressWasm } from 'brotli-wasm'

import util from 'util'
import zlib from 'zlib'

const brotliCompress = util.promisify(zlib.brotliCompress)

async function run() {
  await b.suite(
    '1 Bytes',

    b.add('zlib(Native)', async () => {
      await brotliCompress(randomBytes(1))
    }),

    b.add('iltorb(C++)', async () => {
      await compressIltorb(randomBytes(1), { quality: 11 })
    }),

    b.add('brotli-js(Rust)', async () => {
      await compressJs(randomBytes(1))
    }),

    b.add('brotli-wasm', async () => {
      compressWasm(randomBytes(1))
    }),

    b.cycle(),
    b.complete(),
  )

  await b.suite(
    '1024 Bytes',

    b.add('zlib(Native)', async () => {
      await brotliCompress(randomBytes(1024))
    }),

    b.add('iltorb(C++)', async () => {
      await compressIltorb(randomBytes(1024), { quality: 11 })
    }),

    b.add('brotli-js(Rust)', async () => {
      await compressJs(randomBytes(1024))
    }),

    // b.add('brotli-wasm', async () => {
    //   compressWasm(randomBytes(1024))
    // }),

    b.cycle(),
    b.complete(),
  )

  await b.suite(
    '1024 * 1024 Bytes',

    b.add('zlib(Native)', async () => {
      await brotliCompress(randomBytes(1024 * 1024))
    }),

    b.add('iltorb(C++)', async () => {
      await compressIltorb(randomBytes(1024 * 1024), { quality: 11 })
    }),

    b.add('brotli-js(Rust)', async () => {
      await compressJs(randomBytes(1024 * 1024))
    }),

    // b.add('brotli-wasm', async () => {
    //   compressWasm(randomBytes(1024 * 1024))
    // }),
    b.cycle(),
    b.complete(),
  )
}

run()
