function balancedBraces(args) {
  const bracesObject = {};
  for (let character in args) {
    if (["[", "{", "(", ")", "}", "]"].indexOf(character) >= 0) {
      if (bracesObject[character]) {
        bracesObject[character] += 1;
      } else {
        bracesObject[character] = 1;
      }
    }
  }
  for (let capturedCharacter of bracesObject) {
    if (capturedCharacter === "[") {
      if (bracesObject[capturedCharacter] !== bracesObject["]"]) return false;
    } else if (capturedCharacter === "{") {
      if (bracesObject[capturedCharacter] !== bracesObject["}"]) return false;
    } else if (capturedCharacter === "(") {
      if (bracesObject[capturedCharacter] !== bracesObject[")"]) return false;
    }
  }
  return true;
}

export { balancedBraces };

function isValid(str) {

  if (str.length <= 1)
    return false

  let matchingOpeningBracket, ch
  let stack = []

  let openingBrackets = ['[', '{', '(']
  let closingBrackets = [']', '}', ')']

  for (let i of str) {
if (["[", "{", "(", ")", "}", "]"].indexOf(i) > -1) {
ch = i

    if (closingBrackets.indexOf(ch) > -1) {
      matchingOpeningBracket = openingBrackets[closingBrackets.indexOf(ch)]
      if (stack.length == 0 || (stack.pop() != matchingOpeningBracket)) {
        return false
      }
    } else {
      stack.push(ch)
    }}
  }

  return (stack.length == 0)
};