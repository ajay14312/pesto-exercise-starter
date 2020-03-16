const alphabeticShift = input => {
  return alphaShift(input, 1);
};

function alphaShift(input, num) {
  let updatedInput = "";
  for (let character of input) {
    let characterASCIIValue = character.charCodeAt(0);
    if (characterASCIIValue >= 65 && characterASCIIValue <= 90) {
      let shiftCharacterASCIIValue = characterASCIIValue + num;
      if (shiftCharacterASCIIValue <= 90) {
        updatedInput = updatedInput.concat(String.fromCharCode(shiftCharacterASCIIValue));
      } else {
        let val = 64 + (shiftCharacterASCIIValue % 90);
        updatedInput = updatedInput.concat(String.fromCharCode(val));
      }
    } else if (characterASCIIValue >= 97 && characterASCIIValue <= 122) {
      let shiftCharacterASCIIValue = characterASCIIValue + num;
      if (shiftCharacterASCIIValue <= 122) {
        updatedInput = updatedInput.concat(String.fromCharCode(shiftCharacterASCIIValue));
      } else {
        let val = 96 + (shiftCharacterASCIIValue % 122);
        updatedInput = updatedInput.concat(String.fromCharCode(val));
      }
    } else {
      updatedInput = updatedInput.concat(String.fromCharCode(characterASCIIValue));
    }
  }
  return updatedInput;
}

export { alphabeticShift };
