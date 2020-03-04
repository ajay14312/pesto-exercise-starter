function forEach(array, callBackFunction) {
  for (let i = 0; i < array.length; i++) {
    callBackFunction(array[i], i, array);
  }
}

function map(array, callBackFunction) {
  let newArrayFormedFromMap = [];
  for (let i = 0; i < array.length; i++) {
    let newElement = callBackFunction(array[i], i, array);
    newArrayFormedFromMap.push(newElement);
  }
  return newArrayFormedFromMap;
}

function filter(array, callBackFunction) {
  let newArrayFormedAfterFilter = [];
  for (let i = 0; i < array.length; i++) {
    let isElementValidToPush = callBackFunction(array[i], i, array);
    if (isElementValidToPush) newArrayFormedAfterFilter.push(array[i]);
  }

  return newArrayFormedAfterFilter;
}

function reduce(array, callBackFunction, initialValue) {
  let accumulator = initialValue === undefined ? 0 : initialValue;
  for (let i = 0; i < array.length; i++) {
    accumulator = callBackFunction(accumulator, array[i], i, array);
  }
  return accumulator;
}

export { forEach, map, filter, reduce };
