function aperture(tupleLength, array) {
  const result = [];
  for (let i = 0; i < array.length; i++) {
    let j = 0;
    const tupleArray = [];
    while (j < tupleLength) {
      if (array[i + j] === undefined) break;
      tupleArray.push(array[i + j]);
      j++;
    }
    if (tupleArray.length >= tupleLength) result.push(tupleArray);
  }
  return result;
}

export { aperture };
