function kebabCaseToPascalCase(path) {
  if (!path) return path;
  let a = path.replace(/(\.\/|\..*)/g, "");
  if (a.includes("/")) {
    a = a.split("/").slice(-1)[0];
  }
  if (a.includes("-")) {
    a = a.split("-");
  } else a = [a];
  return a
    .map((part) => {
      if (part.length === 0) return "";
      return part[0].toUpperCase() + part.substring(1);
    })
    .join("");
}

module.exports = {
  kebabCaseToPascalCase,
};
