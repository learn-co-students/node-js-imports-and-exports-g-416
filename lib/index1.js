const interface = require('./interface')
// const interface2 = require('./interface2')
const util = require('util');
console.log(util)


console.log('interface()', interface());
// console.log('interface2', interface2);


// const userArgs = interface();
// const moduleName = userArgs[0];

// if (userArgs.length > 1) {
//   console.warn('Warning: you provide more than one argument.')
// }

// try {
//   const moduleToInspect = require(moduleName);
//   console.log(util.inspect(moduleToInspect, { colors: true }));
// } catch (error) {
//   console.error(`Unable to inspect module ${moduleName}.`);
//   console.error(`Resason: ${error.message}`);
//   process.exitCode = 1;
// }
