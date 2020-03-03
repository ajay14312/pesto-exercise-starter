function sumAll(arr) {
  let highestNum = arr[1] > arr[0] ? arr[1] : arr[0];
  let lowestNum = arr[1] < arr[0] ? arr[1] : arr[0];
  let sum = 0;

  for (let i = lowestNum; i <= highestNum; i++) {
    sum += i;
  }

  return sum;
}

export { sumAll };
