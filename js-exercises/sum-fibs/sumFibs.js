function sumFibs(num) {
  let arr = [];
  let sum = 1;

  arr[0] = 0;
  arr[1] = 1;
  for (let i = 2; i <= num; i++) {
    nextVal = arr[i - 2] + arr[i - 1];
    if (nextVal > num) {
      break;
    }
    arr[i] = nextVal;
    if (arr[i] % 2 !== 0) {
      sum += arr[i];
    }
  }
  
  return sum;
}

sumFibs(75024);
//export { sumFibs };
