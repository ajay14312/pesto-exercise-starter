const sequentialPromise = async promises => {
  let result = "";
  for (let promise of promises) {
    await promise(result).then(value => {
      result = value;
      return result;
    });
  }

  return result;
};

export { sequentialPromise };
