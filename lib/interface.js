module.exports = function getUserArguments() {
  const userArgs = process.argv.slice(2);

  if (userArgs.length > 1) {
    console.warn('Warning: you provided more than one argument.')
  }
  return userArgs[0]
}


// function getUserArguments() {
//   console.log('process.argv', process.argv);
//   return process.argv.slice(2);
// }

// console.log(getUserArguments());
