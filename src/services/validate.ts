export const validateMin10Length = (value: string) => {
  return value.length > 9 ? true : false;
};

export const validateCapitalLetters = (value: string) => {
  return /(?=.*[A-Z])/.test(value);
};

export const validateSpecialCharacters = (value: string) => {
  return /(?=.*[@$!%*?&])/.test(value);
};

export const isStrongPassword = (value: string) => {
  if (!validateCapitalLetters(value)) return false;
  if (!validateMin10Length(value)) return false;
  if (!validateSpecialCharacters(value)) return false;
  return true;
};
