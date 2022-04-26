import { makeArray } from "./makeArray";

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
