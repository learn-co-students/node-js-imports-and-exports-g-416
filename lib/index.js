const interface = require('./interface');
const util = require('util');

const moduleName = interface()

try {
  const moduleToInspect = require(moduleName);
  console.log(util.inspect(moduleToInspect, {colors: true}));
} catch (error) {
  console.log(`Unable to inspect module ${moduleName}`);
  console.log(`Reason: ${error.message}`);
  exit(1);
}