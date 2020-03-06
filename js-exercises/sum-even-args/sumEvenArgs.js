const sumEvenArgs = (...args) => {
  return args.reduce(
    (accumulator, currentValue) =>
      currentValue % 2 === 0 ? (accumulator += currentValue) : accumulator,
    0
  );
};

export { sumEvenArgs };
