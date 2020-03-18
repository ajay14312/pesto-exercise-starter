function freqSort(array) {
  array.sort((current, next) => (current < next ? 1 : -1));
  const reducedObject = array.reduce(reducer, {});
  return Object.keys(reducedObject);
}

function reducer(currentVal, nextVal) {
  currentVal[nextVal] ? (currentVal[nextVal] += 1) : (currentVal[nextVal] = 1);
  return currentVal;
}

export { freqSort };
