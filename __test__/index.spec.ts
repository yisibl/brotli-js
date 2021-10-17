import test from 'ava'

import { compress, decompress } from '../index'

test('can compress data', (t) => {
  const input = Buffer.from('some input data')
  const compressedData = compress(input)

  t.is(Buffer.from(compressedData).toString('base64'), 'Gw4A+CXb3uZKkE0qhI6e+QA=')
})

test('can decompress data', (t) => {
  const input = Buffer.from('Gw4A+CXb3uZKkE0qhI6e+QA=', 'base64')
  const depressedData = decompress(input)
  const result = Buffer.from(depressedData).toString('utf8')

  t.is(result, 'some input data')
})

test('can comparison data', (t) => {
  const text = 'some input data'
  const compressedData = compress(Buffer.from(text))
  const depressedData = decompress(compressedData) // => buffer
  const result = Buffer.from(depressedData).toString('utf8')

  t.is(result, text)
})
