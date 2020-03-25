const allPromises = async args => {
  let result = [];
  for (let promise of args) {
    if (promise instanceof Promise) {
      await promise.then(value => result.push(value));
    } else {
      result.push(promise);
    }
  }
  return result;
};

export { allPromises };
