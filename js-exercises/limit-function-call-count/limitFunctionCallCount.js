const limitFunctionCallCount = (callBackFunction, maximumLimitToCallFunction) => {
    let numberOfTimesFunctionCalled = 0
    return function(...arguments) {
      if(numberOfTimesFunctionCalled < maximumLimitToCallFunction) {
        numberOfTimesFunctionCalled++;
        return callBackFunction.apply(null, arguments);
      }
      return null;
    }
  
  };

export {
  limitFunctionCallCount,
};
