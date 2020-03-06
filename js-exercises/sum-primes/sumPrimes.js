function sumPrimes(num) {
  let sum = 0;
  if (num === 0) {
    return 0;
  }
  for (let i = 1; i <= num; i++) {
    test_prime(i) ? (sum += i) : 0;
  }
  return sum;
}

function test_prime(val) {
  if (val === 1) {
    return false;
  } else if (val === 2) {
    return true;
  } else {
    for (let i = 2; i <= Math.sqrt(val); i++) {
      if (val % i === 0) {
        return false;
      }
    }
    return true;
  }
}

export { sumPrimes };
