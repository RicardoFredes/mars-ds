import { cutText } from "@/services/string";

describe("string", () => {
  describe("cutText", () => {
    it("should return empty string if text is of invalid type", () => {
      // @ts-expect-error - text is of invalid type
      expect(cutText()).toBe("");
    });

    it("should return the same text if it's shorter than maxLength", () => {
      expect(cutText("123456789", 10)).toBe("123456789");
    });

    it("should return the first maxLength characters of the text with '...'", () => {
      expect(cutText("123456789", 5)).toBe("12345...");
    });

    it("should use maxLength as 28 if it's not defined", () => {
      const result = cutText("Sua redação corrigida no formato do ENEM.");
      expect(result).toBe("Sua redação corrigida no for...");
      expect(result).toHaveLength(28 + 3);
    });

    it("should use a custom end", () => {
      const customEnd = ":)";
      const maxLength = 12;
      const result = cutText("Sua redação corrigida no formato do ENEM.", maxLength, customEnd);
      expect(result).toBe(`Sua redação ${customEnd}`);
      expect(result).toHaveLength(maxLength + customEnd.length);
    });
  });
});
