// write your own test cases
import { flipArgs, reverseArguments } from "./flipArgs";

describe("flipArgs", () => {
  it("should return a function", () => {
    expect(typeof flipArgs()).toBe("function");
  });
  it("should reverse arguments", () => {
    const flipped = flipArgs();
    expect(flipped("a", "b", "c")).toBe(["c", "b", "a"]);
  });
});
