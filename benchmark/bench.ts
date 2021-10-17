/* eslint-disable no-console */

import { randomBytes } from 'crypto'
import b from 'benny'

import { compress as compressNative } from 'iltorb'
import { compress as compressWasm } from 'brotli-wasm'
import { compress as compressJs } from '../index'

async function run() {
  await b.suite(
    'resize width',

    b.add('iltorb', async () => {
      await compressNative(randomBytes(1))
    }),

    b.add('brotli-js', () => {
      compressJs(randomBytes(1))
    }),

    b.add('brotli-wasm', async () => {
      await compressWasm(randomBytes(1))
    }),

    b.cycle(),
    b.complete(),
  )

  await b.suite(
    'resize width',

    b.add('iltorb', async () => {
      await compressNative(randomBytes(1024))
    }),

    b.add('brotli-js', () => {
      compressJs(randomBytes(1024))
    }),

    b.add('brotli-wasm', async () => {
      await compressWasm(randomBytes(1024))
    }),

    b.cycle(),
    b.complete(),
  )

  await b.suite(
    'resize width',

    b.add('iltorb', async () => {
      await compressNative(randomBytes(1024 * 1024))
    }),

    b.add('brotli-js', () => {
      compressJs(randomBytes(1024 * 1024))
    }),

    b.add('brotli-wasm', async () => {
      await compressWasm(randomBytes(1024 * 1024))
    }),
    b.cycle(),
    b.complete(),
  )
}

run()
