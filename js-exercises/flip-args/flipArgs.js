function flipArgs(reverseFunc) {
  return reverseFunc ? reverseFunc : reverseArguments;
}

function reverseArguments() {
  let argumentsArray = _.toArray(arguments);
  argumentsArray.reverse();

  return argumentsArray;
}

export { flipArgs, reverseArguments };
