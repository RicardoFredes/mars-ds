import {
  isStrongPassword,
  validateCapitalLetters,
  validateMin10Length,
  validateSpecialCharacters,
} from "./validate";

describe("validate", () => {
  describe("validateMin10Length", () => {
    it("should return true for more than 9 characters passed", () => {
      expect(validateMin10Length("1234567890")).toBe(true);
      expect(validateMin10Length("MarllonDomingos")).toBe(true);
      expect(validateMin10Length("Marllon")).toBe(false);
      expect(validateMin10Length("asdf")).toBe(false);
    });
  });

  describe("validateSpecialCharacters", () => {
    it("should return true if characters like '@$!%*?&' are passed", () => {
      expect(validateSpecialCharacters("Marllon.Campos")).toBe(false);
      expect(validateSpecialCharacters("Marllon@Campos")).toBe(true);
      expect(validateSpecialCharacters("Marllon$Campos")).toBe(true);
      expect(validateSpecialCharacters("Marllon!Campos")).toBe(true);
      expect(validateSpecialCharacters("Marllon%Campos")).toBe(true);
      expect(validateSpecialCharacters("Marllon*Campos")).toBe(true);
      expect(validateSpecialCharacters("Marllon?Campos")).toBe(true);
      expect(validateSpecialCharacters("Marllon&Campos")).toBe(true);
    });
  });

  describe("validateCapitalLetters", () => {
    it("should return true if the string has at least one capital letter", () => {
      expect(validateCapitalLetters("marllon campos ")).toBe(false);
      expect(validateCapitalLetters("Marllon campos ")).toBe(true);
      expect(validateCapitalLetters("mArllon campos ")).toBe(true);
      expect(validateCapitalLetters("marllon Campos ")).toBe(true);
      expect(validateCapitalLetters("marllon CampOs ")).toBe(true);
    });
  });

  describe("pass validadeCapitalLetters & validadeSpecialCharacters & validateMin10Length", () => {
    it("should return true if pass on all validate tests", () => {
      expect(isStrongPassword("Marllon.Campos1")).toBe(false);
      expect(isStrongPassword("M@rllon.Campos1")).toBe(true);
    });
  });
});
