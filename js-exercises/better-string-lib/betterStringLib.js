function betterStringLib(...args) {
  return args;
}

function reverse(string) {
  const normalized = string.normalize("NFC");
  return Array.from(normalized).reverse().join("");
}

function equal(string1, string2) {
  return reverse(string1) === reverse(string2);
}

export { betterStringLib, reverse, equal };
