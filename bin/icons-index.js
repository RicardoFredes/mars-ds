const WARNING = `/**
 * WARNING!
 * Do not change this file,
 * because it is automatically generated
 * run "yarn reindex:icons" to update
 */\n`;

const { getFiles, saveFile } = require("./helpers/files");
const { toCamelCase } = require("./helpers/convert-names");

const ICONS_FOLDER = "./src/libs/icons";
const EXCLUDED_FILES = ["/index.tsx", "/icons.types.ts"];

function main() {
  const filesList = getFiles(ICONS_FOLDER).map((path) => path.replace(ICONS_FOLDER, ""));

  const importsResult = [];
  const exportsResult = [];
  for (const file of filesList) {
    if (EXCLUDED_FILES.includes(file) || !/\.tsx$/.test(file)) continue;
    const pathName = file.replace(/\.tsx$/, "");
    const kebabName = pathName.split("/").pop();
    const camelName = toCamelCase(kebabName);
    importsResult.push(`import ${camelName} from ".${pathName}";`);
    exportsResult.push(`  "${kebabName}": ${camelName},`);
  }

  const content = joinContents([
    WARNING,
    renderImports(importsResult),
    "",
    renderExports(exportsResult),
  ]);
  saveFile(ICONS_FOLDER, "index.tsx", content);
}

function renderImports(children = []) {
  return joinContents([`import type { IconLibProps } from "./icons.types";`, "", ...children]);
}

function renderExports(children = []) {
  return joinContents([
    `const icons: { [key: string]: (props: IconLibProps) => JSX.Element } = {`,
    ...children,
    "};",
    "",
    "export default icons;",
    "",
  ]);
}

function joinContents(children = []) {
  return children.join("\n");
}

main();
