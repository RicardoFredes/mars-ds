const removeSpecialCharacters = (str: string) => {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
};

const removeWordsSeparators = (str: string) => {
  return str.replace(/\s|[-,_;.]/g, "");
};

const fuzzyMatch = (query?: string, referenceValue?: string) => {
  if (!query || !referenceValue) return true;
  const pattern = ".*" + query.split("").join(".*") + ".*";
  const re = new RegExp(pattern, "i");
  return re.test(referenceValue);
};

export const mathQuery = (query: string, referenceValue: string) => {
  const nQuery = removeSpecialCharacters(removeWordsSeparators(query));
  const nReference = removeSpecialCharacters(removeWordsSeparators(referenceValue));
  return fuzzyMatch(nQuery, nReference);
};
