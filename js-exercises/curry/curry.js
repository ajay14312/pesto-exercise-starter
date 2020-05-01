function curry(anonymousFunction) {
  return function curried(...passedArguments) {
    if (passedArguments.length >= anonymousFunction.length) {
      return anonymousFunction.apply(null, passedArguments);
    } else {
      return function(...restArguments) {
        return curried.apply(null, passedArguments.concat(restArguments));
      };
    }
  };
}

export { curry };
