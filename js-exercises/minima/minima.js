function minima(n, array) {
  array.sort((current, next) => current - next);
  return array.splice(0, n);
}

export { minima };
