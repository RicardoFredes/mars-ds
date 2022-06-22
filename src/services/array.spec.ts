import { isStringArray, makeArray } from "./array";

describe("makeArray", () => {
  it("should return null array with the length provided", () => {
    expect(makeArray(2, null)).toEqual([null, null]);
    expect(makeArray(3, null)).toEqual([null, null, null]);
    expect(makeArray(4, null)).toEqual([null, null, null, null]);
  });
  it("should return a array with length equal two filled with strings", () => {
    const array = makeArray(2, "makeArray");
    expect(array).toEqual(["makeArray", "makeArray"]);
    expect(array.length).toEqual(2);
  });

  it("should return an empty array if length equals 0", () => {
    const array = makeArray(0, null);
    expect(array).toEqual([]);
  });
});

describe("isStringArray", () => {
  it("should return true if the array is an array of strings", () => {
    expect(isStringArray(["a", "b", "c"])).toBeTruthy();
  });

  it("should return false if the array is not an array of strings", () => {
    expect(isStringArray(["a", "b", "c", 1, 2, 3])).toBeFalsy();
  });
});
