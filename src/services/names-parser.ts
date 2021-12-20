export const getInitialsByFullName = (name?: string) => {
  if (!name) return "";
  const parsedName = name.trim();
  const getLetter = (letter?: string) => letter?.toLocaleUpperCase() || "";
  const fistInitial = getLetter(parsedName[0]);
  let lastInitial = "";
  let getNext = false;
  for (let i = 1; i < parsedName.length; i++) {
    const caracter = parsedName[i];
    if (caracter === " ") {
      getNext = true;
      continue;
    }
    if (!getNext) continue;
    lastInitial = getLetter(caracter);
    getNext = false;
  }
  return `${fistInitial}${lastInitial}`;
};
