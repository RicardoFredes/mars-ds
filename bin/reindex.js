/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");

const COMPONENTS_FOLDER = "./src/components";
const INDEX_FILE = "./src/index.ts";

function getFiles(dir, $files) {
  $files = $files || [];
  const files = fs.readdirSync(dir);
  for (const i in files) {
    const name = dir + "/" + files[i];
    if (fs.statSync(name).isDirectory()) {
      getFiles(name, $files);
    } else {
      $files.push(name);
    }
  }
  return $files;
}

function isGroup(name) {
  const character = name[0];
  return character == character.toLowerCase();
}

function getComponentNameFromPath(path) {
  return path
    .split("/")
    .slice(-1)[0]
    .replace(/\..*/g, "")
    .split("-")
    .map((part) => part[0].toUpperCase() + part.substring(1))
    .join("");
}

function getComponentsAndTypes(list = []) {
  let auxiliary = "";

  return list.reduce((acc, path) => {
    const componentName = getComponentNameFromPath(path);

    if (/component.tsx/.test(path)) {
      const group = path.split("/")[2];

      if (acc.length > 0) acc.push("");
      else acc.push("// basic");

      if (isGroup(group) && group != auxiliary) {
        auxiliary = group;
        acc.push(`// ${auxiliary}`);
      }
      acc.push(`export { default as ${componentName} } from "${path.replace(".tsx", "")}";`);
    } else if (/types.ts/.test(path)) {
      acc.push(`export type { ${componentName}Props } from "${path.replace(".ts", "")}";`);
    }

    return acc;
  }, []);
}

function main() {
  const scssImport = `import "./styles/index.scss";`;
  const filesList = getFiles(COMPONENTS_FOLDER).map((path) => path.replace("/src", ""));

  const content = [].concat(scssImport, "", ...getComponentsAndTypes(filesList), "").join("\n");

  fs.writeFileSync(INDEX_FILE, content);

  console.log("Success reindex");
}

main();
