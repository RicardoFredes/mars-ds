/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs");
const { kebabCaseToPascalCase } = require("./helpers/convertNames");

const COMPONENTS_FOLDER = "./src/components";
const INDEX_FILE = "./src/index.ts";
const STYLE_FILE = "./src/styles/index.scss";

function main() {
  const filesList = getFiles(COMPONENTS_FOLDER).map((path) => path.replace("/src", ""));

  reindexComponents(filesList);
  reindexStyles(filesList);

  console.log("Success");
}

function reindexStyles(filesList) {
  const scssImports = ["./tokens/index.scss", "./basics/index.scss"].map(
    (path) => `@import "${path}";`
  );

  const content = [].concat(...scssImports, "", ...getStylesFiles(filesList), "").join("\n");

  fs.writeFileSync(STYLE_FILE, content);
  console.log("Done: styles reindex");
}

function reindexComponents(filesList) {
  const scssImport = `import "./styles/index.scss";`;

  const content = [].concat(scssImport, ...getComponentsAndTypes(filesList), "").join("\n");

  fs.writeFileSync(INDEX_FILE, content);
  console.log("Done: components reindex");
}

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

function getComponentsAndTypes(list = []) {
  return list.reduce((acc, path) => {
    const componentName = kebabCaseToPascalCase(path);

    if (/component.tsx/.test(path)) {
      acc.push("");
      acc.push(`export { default as ${componentName} } from "${path.replace(".tsx", "")}";`);
    } else if (/types.ts/.test(path)) {
      acc.push(`export type { ${componentName}Props } from "${path.replace(".ts", "")}";`);
    }

    return acc;
  }, []);
}

function getStylesFiles(list = []) {
  return list.reduce((acc, path) => {
    if (/module.scss/.test(path)) {
      acc.push(`@import ".${path}";`);
    }
    return acc;
  }, []);
}

main();
