import { isString } from "util";

function abbreviateString(str) {
  return isString(str)?createAbbreviateString(str):throError(str);
}

function throError(str) {
  new throError(`${str} Not a string`)
}

function createAbbreviateString(str) {
  const splitTheString = str.split(' ');
  const splittedStringLength = splitTheString.length - 1;
  const lastWord = splitTheString[splittedStringLength][0].toUpperCase();
  return `${splitTheString[0]} ${lastWord}.`
}

export { abbreviateString };
