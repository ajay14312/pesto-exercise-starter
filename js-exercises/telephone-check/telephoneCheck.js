function telephoneCheck(args) {
  const telephoneNumberRegex = /^(1\s?)?((\([0-9]{3}\))|[0-9]{3})[\s\-]?[\0-9]{3}[\s\-]?[0-9]{4}$/;
  return telephoneNumberRegex.test(args);
}

export { telephoneCheck };
