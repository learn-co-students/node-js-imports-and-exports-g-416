function getUserArguments() {
  console.log('process.argv', process.argv);
  return process.argv.slice(2);
}
// console.log('[interface.js]', getUserArguments());
console.log('[interface.js][module.exports]', module.exports);


module.exports = getUserArguments

// module.exports = function getUserArguments() {
  // return process.argv.slice(2);
  // return process.argv;
// }
