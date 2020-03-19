import { betterStringLib, reverse, equal } from "./betterStringLib";

describe("Template Test", () => {
  test("reverse Test", () => {
    expect(reverse("foo 𝌆 bar")).toBe("rab 𝌆 oof");
  });
  test("equal Test", () => {
    expect(equal("a", "a")).toBe(true);
  });
  test("equal Test", () => {
    expect(equal("mañana", "mañana")).toBe(true);
  });
  test("equal Test", () => {
    expect(equal("mañana", "añana")).toBe(false);
  });
});
