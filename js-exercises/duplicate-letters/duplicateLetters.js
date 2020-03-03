function duplicateLetters(...args) {
  const hash = {};
  let count = 0;
  const val = args[0];

  for (let i = 0; i < val.length; i++) {
    if (hash[val[i]]) {
      hash[val[i]] += 1;
    } else {
      hash[val[i]] = 1;
    }
    if (hash[val[i]] > count) count = hash[val[i]];
  }

  return count > 1 ? count : false;
}

export { duplicateLetters };
