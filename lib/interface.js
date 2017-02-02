const getUserArgument = () => {
  const userArgs = process.argv.slice(2);

  if (userArgs.length > 1){
    console.log(`Warning: you gave more than one arg!`)
  }

  return userArgs[0];
}

module.exports = getUserArgument;

console.log(getUserArgument());