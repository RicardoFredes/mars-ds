/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require("fs-extra");
const { saveFile } = require("./helpers/files");
const { kebabCaseToPascalCase, camelCaseToKebabCase } = require("./helpers/convert-names");

const BASE_PATH = "./src/tokens";

const BASE_SIZE = 16;

const TOKENS = {
  BASE: "base",
  LIGHT: "light",
  DARK: "dark",
};

const TOKEN_TYPES = {
  COLOR: "color",
  SHADOW: "boxShadow",
  FONT_FAMILY: "fontFamilies",
  FONT_SIZE: "fontSizes",
  RADIUS: "borderRadius",
  SPACING: "spacing",
};

function main() {
  Object.values(TOKENS).forEach((tokenName) => {
    const isBase = tokenName === TOKENS.BASE;
    const { css, scss, json } = getContentFiles(tokenName);
    saveScss(css, scss, tokenName, isBase);
    if (isBase) saveIndex(json);
  });
}

main();

function saveScss(css, scss, tokenName, isBase = false) {
  if (isBase) {
    const VARIABLES = "variables";
    const allImports = Object.values(TOKENS).concat(VARIABLES);
    const themeImports = allImports.map((name) => `@import "./${name}.scss";`).join("\n");
    saveFile(BASE_PATH, `scss/${VARIABLES}.scss`, scss.join("\n"));
    saveFile(BASE_PATH, `scss/index.scss`, `${themeImports}\n`);
  }
  saveFile(BASE_PATH, `scss/${tokenName}.scss`, css);
}

function saveIndex(json) {
  const parsedJson = Object.entries(json).map(
    ([name, value]) => `  ${name}: "${value.replace(";", "")}",`
  );
  // saveFile(BASE_PATH, `index.js`, `module.exports = {\n${parsedJson.join("\n")}\n};\n`);
  saveFile(
    BASE_PATH,
    `index.ts`,
    `const Tokens = {\n${parsedJson.join("\n")}\n};\n\nexport default Tokens;\n`
  );
}

function getContentFiles(tokenName) {
  const tokens = getTokens(tokenName);
  return {
    css: genCss(tokens, tokenName),
    scss: genScss(tokens, tokenName),
    json: genJslib(tokens, tokenName),
  };
}

function getTokens(tokenName) {
  if (!tokenName) return [];
  const path = `${BASE_PATH}/jsons/${tokenName}.json`;
  const theme = fs.readJsonSync(path);
  return tokensExtractor(theme).reduce((acc, { name, value }) => {
    if (name && value) {
      acc.push({ name: camelCaseToKebabCase(name), value });
    }
    return acc;
  }, []);
}

function genScss(tokens, tokenName) {
  const prefix = tokenName === "base" ? "" : `${tokenName}-`;
  return tokens.map(({ name }) => `$${prefix}${name}: var(--${prefix}${name});`);
}

function genCss(tokens, tokenName) {
  const isBase = tokenName === "base";
  const prefix = isBase ? "" : `${tokenName}-`;
  const variables = tokens.map(({ name, value }) => `  --${prefix}${name}: ${value};`).join("\n");
  const rootCss = `:root {\n${variables}\n}\n`;
  if (isBase) return rootCss;
  const themeVariables = tokens
    .map(({ name }) => `  --${name}: var(--${prefix}${name});`)
    .join("\n");
  const theme = `.theme-${tokenName} {\n${themeVariables}\n}\n`;
  return `${rootCss}\n${theme}`;
}

function genJslib(tokens) {
  return tokens.reduce((acc, { name }) => {
    acc[kebabCaseToPascalCase(name)] = `var(--${name});`;
    return acc;
  }, {});
}

function tokensExtractor(token, name = "") {
  if (!token) return name;
  name = name.replace("%", "");
  if (typeof token.value !== "undefined") return valueExtractor(name, token);
  let result = [];
  for (const key in token) {
    const newValues = tokensExtractor(token[key], name ? `${name}-${key}` : key);
    if (Array.isArray(newValues)) result = result.concat(...newValues);
    else result.push(newValues);
  }
  return result;
}

function valueExtractor(name, { value, type }) {
  if (!value) return { name, value };
  if (type === TOKEN_TYPES.COLOR) return { name, value };
  if (type === TOKEN_TYPES.SHADOW) return { name, value: getShadowValue(value) };
  if (type === TOKEN_TYPES.FONT_FAMILY) return { name, value };
  if (type === TOKEN_TYPES.FONT_SIZE) return { name, value: getValueUnit(value) };
  if (type === TOKEN_TYPES.RADIUS) return { name, value: getValueUnit(value, true) };
  if (type === TOKEN_TYPES.SPACING) return { name, value: getValueUnit(value, true) };
  return { name, value: "" };
}

function getValueUnit(value, forcePX = false) {
  if (forcePX) return `${value}px`;
  const remValue = value / BASE_SIZE;
  if (!remValue) return "";
  return `${remValue}rem`;
}

function getShadowValue(value) {
  const parseShadow = (s) => `${s.x}px ${s.y}px ${s.blur}px ${s.spread}px ${s.color}`;
  if (!Array.isArray(value)) return parseShadow(value);
  return value.map(parseShadow).join(", ");
}
