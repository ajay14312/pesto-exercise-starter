function* rangeIter(lb, ub) {
  if (lb === undefined || ub === undefined) {
    throw new TypeError("undefined is not a number");
  }
  for (let i = lb; i <= ub; i++) {
    yield i;
  }
}

export { rangeIter };
