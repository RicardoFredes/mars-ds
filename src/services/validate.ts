export const validateMinCharacteres = (value: string, min = 8) => {
  return value.length >= min ? true : false;
};

export const validateCapitalLetters = (value: string) => {
  return /(?=.*[A-Z])/.test(value);
};

export const validateSpecialCharacters = (value: string) => {
  return /(?=.*[@$!%*?#&_-])/.test(value);
};

export const isStrongPassword = (value: string) => {
  if (!validateCapitalLetters(value)) return false;
  if (!validateMinCharacteres(value)) return false;
  if (!validateSpecialCharacters(value)) return false;
  return true;
};
