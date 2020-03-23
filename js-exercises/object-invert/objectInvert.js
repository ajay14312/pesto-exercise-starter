function objectInvert(args) {
  const objectKeys = Object.keys(args);
  const newObject = {};
  for (let key in objectKeys) {
    const item = objectKeys[key];
    newObject[args[item]] = item;
  }
  return newObject;
}

export { objectInvert };
