import { sanitize } from "./sanitize";

describe("sanitize", () => {
  it("should return pure HTML", () => {
    expect(sanitize("<img src=x onerror=alert(1)//>")).toEqual('<img src="x">');
    expect(sanitize("<svg><g/onload=alert(2)//<p>")).toEqual("<svg><g></g></svg>");
  });
});
