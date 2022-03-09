import {
  validateCapitalLetters,
  validateMinCharacteres,
  validateNumbers,
  validateSpecialCharacters,
} from "@/services/validate";
import Tokens from "@/tokens";

const ICON = {
  INVALID: {
    bulletColor: Tokens.ColorError500,
    bulletIconName: "close",
  },
  VALID: {
    bulletColor: Tokens.ColorSuccess500,
    bulletIconName: "checkmark",
  },
};

const validations = [
  {
    text: "No mínimo 8 caracteres",
    validator: validateMinCharacteres,
  },
  {
    text: "Uma letra maiúscula",
    validator: validateCapitalLetters,
  },
  {
    text: "Um caracter especial (@ ! # $ % _ *)",
    validator: validateSpecialCharacters,
  },
  {
    text: "Um número",
    validator: validateNumbers,
  },
];

export const getValidations = (value: string) => {
  return validations.map(({ text, validator }) => ({
    text,
    ...(validator(value) ? ICON.VALID : ICON.INVALID),
  }));
};

export const isValid = (value: string) => {
  for (const { validator } of validations) {
    if (!validator(value)) return false;
  }
  return true;
};
