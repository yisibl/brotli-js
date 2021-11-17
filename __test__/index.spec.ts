import test from 'ava'

import { compress, compressAsync, decompress, decompressAsync } from '../index'

test('can compress data', async (t) => {
  const input = Buffer.from('some input data')
  const compressedData = compress(input)

  t.is(Buffer.from(compressedData).toString('base64'), 'Gw4A+CXb3uZKkE0qhI6e+QA=')
})

test('can decompress data', async (t) => {
  const input = Buffer.from('Gw4A+CXb3uZKkE0qhI6e+QA=', 'base64')
  const depressedData = decompress(input)
  const result = Buffer.from(depressedData).toString('utf8')

  t.is(result, 'some input data')
})

test('can comparison data', async (t) => {
  const text = 'some input data'
  const compressedData = compress(Buffer.from(text))
  const depressedData = decompress(compressedData) // => buffer
  const result = Buffer.from(depressedData).toString('utf8')

  t.is(result, text)
})

test('Async compress', async (t) => {
  const text = 'some input data'
  const compressedData = compress(Buffer.from(text))
  const asyncCompressedData = await compressAsync(Buffer.from(text)) // => buffer

  t.is(compressedData.length, asyncCompressedData.length)
  // Do not run this assert in non-x64 environment.
  // It's too slow
  if (process.arch === 'x64') {
    t.deepEqual(compressedData, asyncCompressedData)
  }
})

test('Async decompress', async (t) => {
  const input = Buffer.from('Gw4A+CXb3uZKkE0qhI6e+QA=', 'base64')
  const depressedData = decompress(input)
  const asyncDepressedData = await decompressAsync(input)

  t.is(depressedData.length, asyncDepressedData.length)
  // Do not run this assert in non-x64 environment.
  // It's too slow
  if (process.arch === 'x64') {
    t.deepEqual(depressedData, asyncDepressedData)
  }

  const result = Buffer.from(asyncDepressedData).toString('utf8')
  t.is(result, 'some input data')
})
