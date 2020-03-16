function pathSatisfies(predicate, pathArr, path) {
  let pathSatisfiesObject = {};
  pathSatisfiesObject = findKeys(predicate, path, { keysArray: [], isPathSatisfies: false });
  for (let key of pathSatisfiesObject.arr) {
    return pathArr.includes(key);
  }

  return pathSatisfiesObject.isPathSatisfies;
}
function findKeys(predicate, path, pathKeysObject) {
  if (typeof path !== "object") return pathKeysObject;
  let pathKeys = Object.keys(path);
  if (pathKeys[0] !== "0") {
    pathKeysObject.keysArray.push(pathKeys[0]);
  } else {
    for (let i = 0; i < pathKeys.length; i++) {
      if (typeof path[i] === "object") {
        var s = Object.keys(path[i]);
        if (!pathKeysObject.isPathSatisfies) {
          pathKeysObject.isPathSatisfies = predicate(path[i][s[0]]) > 0;
        }
      }
    }
  }
  return findKeys(predicate, path[pathKeys[0]], pathKeysObject);
}

export { pathSatisfies };
