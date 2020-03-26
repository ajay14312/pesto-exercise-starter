const fibonacciIter = {
  fisrtValue: 0,
  secondValue: 1,
  [Symbol.iterator]() {
    return this;
  },
  next() {
    let current = this.fisrtValue;
    this.fisrtValue = this.secondValue;
    this.secondValue = current + this.fisrtValue;
    return { value: current, done: false };
  }
};

export { fibonacciIter };
