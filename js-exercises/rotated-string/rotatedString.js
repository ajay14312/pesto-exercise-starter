const rotatedString = (str1, str2) => {
  let str2FirstCharacter = str2[0];
  let str1CharacterID = str1.indexOf(str2FirstCharacter);
  let str2CharacterID = str2.indexOf(str2FirstCharacter);
  const pivotDifference = str1CharacterID - str2CharacterID;

  const str1FirstCharacter = str1[0];
  let str1BeforePivotCharacterID = str1.indexOf(str1FirstCharacter);
  let str2BeforePivotCharacterID = str2.indexOf(str1FirstCharacter);
  const beforPivotDifference = str2BeforePivotCharacterID - str1BeforePivotCharacterID;

  if (pivotDifference < 1 || str1.length !== str2.length) {
    return false;
  } else {
    for (let character of str2) {
      str1CharacterID = str1.indexOf(character);
      str2CharacterID = str2.indexOf(character);

      if (str1CharacterID - str2CharacterID > 0) {
        if (str1CharacterID - str2CharacterID !== pivotDifference) return false;
      } else if (str2CharacterID - str1CharacterID !== beforPivotDifference) {
        return false;
      }
    }
    return true;
  }
};

export { rotatedString };
