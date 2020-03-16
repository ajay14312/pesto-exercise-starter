const arrayCubeRootToJson = arr => {
  if (!Array.isArray(arr)) throw new Error();
  const cubeRootArray = arr.reduce((current, next) => {
    if (next === null || next === false || isNaN(next)) throw new Error();
    current[`${next}`] = Math.cbrt(next);
    return current;
  }, {});
  return cubeRootArray;
};

export { arrayCubeRootToJson };
