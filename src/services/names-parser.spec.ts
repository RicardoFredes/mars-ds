import { getInitialsByFullName } from "./names-parser";

describe("names-parser", () => {
  describe("getInitialsByFullName", () => {
    it("should return empty string if provided empty argument", () => {
      expect(getInitialsByFullName()).toBe("");
      expect(getInitialsByFullName(undefined)).toBe("");
    });

    it("should return first and last initials", () => {
      expect(getInitialsByFullName("Ricardo")).toBe("R");
      expect(getInitialsByFullName("Ricardo Fredes")).toBe("RF");
      expect(getInitialsByFullName("Ricardo Fredes da Silveira")).toBe("RS");
      expect(getInitialsByFullName("Marllon Domingos Campos da Silva Pereira")).toBe("MP");
    });

    it("should ignore blank spaces", () => {
      expect(getInitialsByFullName("Ricardo Fredes  ")).toBe("RF");
      expect(getInitialsByFullName("  Ricardo Fredes")).toBe("RF");
      expect(getInitialsByFullName("Ricardo    Fredes")).toBe("RF");
    });
  });
});
