import { generateHash } from "./hash";

describe("hash", () => {
  describe("generateHash", () => {
    it("should generador random hashs", () => {
      const firstHash = generateHash();
      expect(generateHash()).not.toBe(firstHash);
    });

    it("should generador random hashs with default prefix", () => {
      const defaultPrefix = "hash";
      expect(generateHash()).toContain(defaultPrefix);
    });

    it("should generador random hashs with custom prefix", () => {
      const customPrefix = "cutom_prefix";
      expect(generateHash(customPrefix)).toContain(customPrefix);
    });
  });
});
