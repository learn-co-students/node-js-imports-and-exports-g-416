const interface = require('./interface')
const util = require('util')

const userArgs = interface()

try {
  const moduleToInspect = require(userArgs)
  console.log(util.inspect(moduleToInspect, { colors: true }))
} catch (error) {
  console.error(`Unable to inspect module ${userArgs}.`)
  console.error(`Reason: ${error.message}`)
  process.exitCode = 1
}


