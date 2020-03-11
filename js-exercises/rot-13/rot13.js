function rot13(args) {
  let updatedArgs = "";
  for (let character of args) {
    let characterASCIIValue = character.charCodeAt(0);
    if (characterASCIIValue >= 65 && characterASCIIValue <= 90) {
      let addThirteenToCharacterASCIIValue = characterASCIIValue + 13;
      if (addThirteenToCharacterASCIIValue <= 90) {
        updatedArgs = updatedArgs.concat(String.fromCharCode(addThirteenToCharacterASCIIValue))
      } else if (addThirteenToCharacterASCIIValue <= 99) {
        let val = 64 + (addThirteenToCharacterASCIIValue % 10);
        updatedArgs= updatedArgs.concat(String.fromCharCode(val));
      } else {
        let val = 64 + (addThirteenToCharacterASCIIValue % 90);
        updatedArgs = updatedArgs.concat(String.fromCharCode(val));
      }
    } else {
      updatedArgs = updatedArgs.concat(String.fromCharCode(characterASCIIValue));
    }
  }

  return updatedArgs;
}

export { rot13 };
