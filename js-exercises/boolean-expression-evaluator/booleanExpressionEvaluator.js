function booleanExpressionEvaluator(expression) {
  if (typeof expression !== "string")
    throw new Error(`Type reference error. ${expression} is not a string.`);
  return new Boolean(new Function(`return ${expression}`)()).valueOf();
}

export { booleanExpressionEvaluator };
