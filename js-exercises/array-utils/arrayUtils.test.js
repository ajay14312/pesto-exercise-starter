// Write your own test cases.
import { forEach, map, filter, reduce } from "./arrayUtils";

describe("arrayUtils map", () => {
  it("should return a new array", () => {
    const foo = element => element * element;
    expect(map([1, 2, 3], foo)).toBe([1, 4, 9]);
  });
});
