function diffArray(firstArray, secondArray) {
  const firstArrayObj = {};
  const secondArrayObj = {};
  const uniqueArray = [];

  for (let element of firstArray) {
    firstArrayObj[element] ? (firstArrayObj[element] += 1) : (firstArrayObj[element] = 1);
  }

  for (let element of secondArray) {
    secondArrayObj[element] ? (secondArrayObj[element] += 1) : (secondArrayObj[element] = 1);
  }

  for (let element in firstArrayObj) {
    secondArrayObj[element] ? delete secondArrayObj[element] : uniqueArray.push(checkStringORNumber(element));
  }

  for (let element in secondArrayObj) {
    uniqueArray.push(checkStringORNumber(element));
  }

  return uniqueArray;
}

function checkStringORNumber(element) {
  return parseInt(element) || parseInt(element) === 0 ? parseInt(element) : element;
}

export { diffArray };
