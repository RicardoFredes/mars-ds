const warningDontChangeFile = `/**
 * WARNING!
 * Do not change this file,
 * because it is automatically generated 
 * run "yarn reindex" to update
 */\n`;

const fs = require("fs-extra");
const { kebabCaseToPascalCase } = require("./helpers/convert-names");
const { getFiles } = require("./helpers/files");

const COMPONENTS_FOLDER = "./src/components";
const INDEX_FILE = "./src/index.ts";
const STYLE_FILE = "./src/styles/components.scss";

function main() {
  const filesList = getFiles(COMPONENTS_FOLDER).map((path) => path.replace("/src", ""));

  reindexComponents(filesList);
  reindexRoot(filesList);
  reindexStyles(filesList);

  console.log("Success");
  process.exit(0);
}

function reindexStyles(filesList) {
  const content = [].concat(warningDontChangeFile, ...getStylesFiles(filesList), "").join("\n");

  fs.writeFileSync(STYLE_FILE, content);
  console.log("Done: styles reindex");
}

function reindexComponents(filesList) {
  const list = filesList.reduce((acc, file) => {
    if (/component\.tsx/.test(file)) {
      const dir = file.replace(/(.*)\/.*/, "$1");
      const name = file.replace(/(.*)\/(.*)\.component.*/, "$2");
      if (!acc.find((a) => a === dir)) acc.push([name, dir]);
    }
    return acc;
  }, []);

  console.log("Run: components reindex");

  for (const file of list) {
    const [kebabName, dir] = file;
    const pascalName = kebabCaseToPascalCase(kebabName);
    const content = `${warningDontChangeFile}\nimport ${pascalName} from "./${kebabName}.component";\nexport default ${pascalName};\nexport * from "./${kebabName}.types";\n`;
    const pathDir = `${dir.replace("./components", COMPONENTS_FOLDER)}/index.ts`;
    fs.writeFileSync(pathDir, content);
    console.log(`  > ${pascalName}`);
  }
  console.log("Done: components reindex");
}

function reindexRoot(filesList) {
  const scssImport = `import "./styles/index.scss";`;

  const tokensImport = `export { default as Tokens } from "./tokens";`;

  const servicesImport = `\nexport * from "./services";`

  const content = []
    .concat(
      warningDontChangeFile,
      scssImport,
      tokensImport,
      servicesImport,
      ...getComponentsAndTypes(filesList),
      ""
    )
    .join("\n");

  fs.writeFileSync(INDEX_FILE, content);
  console.log("Done: root reindex");
}

function getComponentsAndTypes(list = []) {
  return list.reduce((acc, path) => {
    const componentName = kebabCaseToPascalCase(path);

    if (/component\.tsx/.test(path)) {
      acc.push("");
      acc.push(`export { default as ${componentName} } from "${path.replace(".tsx", "")}";`);
    } else if (/types\.ts/.test(path)) {
      acc.push(`export * from "${path.replace(".ts", "")}";`);
    }

    return acc;
  }, []);
}

function getStylesFiles(list = []) {
  return list.reduce((acc, path) => {
    if (/styles.scss/.test(path)) {
      acc.push(`@import ".${path}";`);
    }
    return acc;
  }, []);
}

main();
