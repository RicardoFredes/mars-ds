import { sanitize } from "./sanitize";

describe("sanitize", () => {
  it("should return pure HTML", () => {
    expect(sanitize("<img src=x onerror=alert(1)//>")).toEqual('<img src="x">');
    expect(sanitize("<svg><g/onload=alert(2)//<p>")).toEqual("<svg><g></g></svg>");
  });

  it('should automatically add attribute rel="noopener" in anchors with target="_blank"', () => {
    expect(
      sanitize('<a role="anchor" href="https://www.google.com" target="_blank">hello</a>').includes(
        'rel="noopener"'
      )
    ).toBe(true);
    expect(
      sanitize('<a href="https://www.google.com" target="_blank" rel="any">hello</a>').includes(
        'rel="noopener"'
      )
    ).toBe(true);
  });

  it('should NOT automatically add attribute rel="noopener" in anchors without target="_blank"', () => {
    expect(
      sanitize('<a role="anchor" href="https://www.google.com">hello</a>').includes(
        'rel="noopener"'
      )
    ).toBe(false);
    expect(
      sanitize('<a href="https://www.google.com" rel="any">hello</a>').includes('rel="noopener"')
    ).toBe(false);
  });
});
