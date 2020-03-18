function bizarreStringIncrementer(str) {
  let carry = 0;
  const strArr = str.split("");
  const strLength = str.length - 1;
  if (isNaN(str[strLength])) return `${str}1`;

  for (let i = strArr.length - 1; i >= 0; i--) {
    if (!isNaN(strArr[i])) {
      if (carry) {
        let addedCarry = parseInt(strArr[i]) + parseInt(carry);
        if (addedCarry > 9) {
          let addedCarryStr = `${addedCarry}`;
          carry = addedCarryStr.split("")[0];
          strArr[i] = addedCarryStr.split("")[1];
        } else {
          strArr[i] = addedCarry;
          carry = 0;
        }
      }

      if (i === strLength) {
        let addedCarry = parseInt(strArr[i]) + 1 + carry;
        if (addedCarry > 9) {
          let addedCarryStr = `${addedCarry}`;
          carry = addedCarryStr.split("")[0];
          strArr[i] = addedCarryStr.split("")[1];
        } else {
          strArr[i] = addedCarry;
          carry = 0;
        }
      }
    } else if (carry) {
      strArr[i] = `${strArr[i]}${carry}`;
      carry = 0;
    }
  }

  return strArr.join("");
}

export { bizarreStringIncrementer };
