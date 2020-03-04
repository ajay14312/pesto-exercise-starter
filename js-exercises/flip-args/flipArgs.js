function flipArgs(reverseFunc) {
  return reverseFunc ? reverseFunc : reverseArguments;
}

function reverseArguments() {
  let argumentsArray = _.toArray(arguments);
  argumentsArray.reverse();

  return _.toArray(argumentsArray);
}

export { flipArgs, reverseArguments };
