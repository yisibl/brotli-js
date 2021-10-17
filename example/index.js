const { compress, decompress } = require('../index')
const { performance } = require('perf_hooks')

async function main() {
  const t0 = performance.now()

  const compressedData = compress(Buffer.from('some input'))
  const depressedData = decompress(compressedData) // => buffer
  const t1 = performance.now()

  console.log(Buffer.from(depressedData).toString('utf8')) // Prints 'some input'
  console.log('✨ Done in', t1 - t0, 'ms')
}

main()
