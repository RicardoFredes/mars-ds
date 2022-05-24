import { range, getPaginationRange } from "./pagination.helpers";

describe("range", () => {
  it("should return empty array if the order of numbers is descending", () => {
    const result = range(5, 1);
    expect(result).toEqual([]);
  });

  it("should return an array with the same number, if the start and end are the same", () => {
    const result = range(7, 7);
    expect(result).toEqual([7]);
  });

  it("should return an array of increasing numbers", () => {
    const result = range(1, 5);
    expect(result).toEqual([1, 2, 3, 4, 5]);
  });
});

describe("getPaginationRange", () => {
  it("should return '...' only to right of center if current is low", () => {
    assertGetPaginationRangeTest({
      total: 10,
      current: 1,
      siblingCount: 2,
      expected: [1, 2, 3, 4, 5, 6, 7, "...", 10],
    });
  });

  it("should return '...' only to left if current is right", () => {
    assertGetPaginationRangeTest({
      total: 10,
      current: 7,
      siblingCount: 2,
      expected: [1, "...", 4, 5, 6, 7, 8, 9, 10],
    });
  });

  it("should return '...' on both sides if current is centered", () => {
    assertGetPaginationRangeTest({
      total: 10,
      current: 5,
      siblingCount: 2,
      expected: [1, "...", 3, 4, 5, 6, 7, "...", 10],
    });
  });

  it("should not return '...' if the total is low", () => {
    assertGetPaginationRangeTest({
      total: 3,
      current: 2,
      siblingCount: 2,
      expected: [1, 2, 3],
    });
  });

  function assertGetPaginationRangeTest({
    total,
    current,
    siblingCount,
    expected,
  }: {
    total: number;
    current: number;
    siblingCount: number;
    expected: (number | string)[];
  }) {
    const result = getPaginationRange(total, current, siblingCount);
    expect(result).toEqual(expected);
  }
});
