function longestWordInString(args) {
  const splitTheString = args.split(" ");
  const findLongestWord = splitTheString.reduce(
    (longest, passedWord) => passedWord.length > longest.length ? passedWord : longest,""
  );
  return findLongestWord.length;
}

export { longestWordInString };
