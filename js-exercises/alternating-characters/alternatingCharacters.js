function alternatingCharacters(arr) {
  let result = [];
  for (let eachString of arr) {
    let repetitionCharactersLength = 0;
    for (let i = 0; i < eachString.length; i++) {
      if (eachString[i] === eachString[i + 1]) {
        repetitionCharactersLength++;
      }
    }
    result.push(repetitionCharactersLength);
  }
  return result;
}

export { alternatingCharacters };
