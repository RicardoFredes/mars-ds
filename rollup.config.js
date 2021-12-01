import path from "path";

import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import strip from "@rollup/plugin-strip";
import url from "@rollup/plugin-url";
import postcssPresetEnv from "postcss-preset-env";
import copy from "rollup-plugin-copy";
import clean from "rollup-plugin-delete";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import postcss from "rollup-plugin-postcss";
import progress from "rollup-plugin-progress";
import typescript from "rollup-plugin-typescript2";
import ttypescript from "ttypescript";

const packageJson = require("./package.json");
const srcDir = path.resolve(__dirname, "src");
const destDir = path.resolve(__dirname, "dist");

/** @type {Partial<import("rollup").RollupOptions>} */
const options = {
  input: `${srcDir}/index.ts`,
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
    {
      file: packageJson.module,
      format: "esm",
      sourcemap: true,
    },
  ],
  strictDeprecations: true,
  plugins: [
    clean({ targets: `${destDir}/*` }),
    // @ts-expect-error `rollup-plugin-progress` doesn't include type definitions.
    progress(),
    // @ts-expect-error `rollup-plugin-peer-deps-external` doesn't include type definitions.
    peerDepsExternal(),
    resolve({
      rootDir: srcDir,
    }),
    commonjs(),
    typescript({
      rollupCommonJSResolveHack: process.platform === "win32",
      typescript: ttypescript,
    }),
    strip(),
    image(),
    url({
      include: ["**/*.svg", "**/*.json"],
    }),
    postcss({
      extract: true,
      autoModules: true,
      minimize: true,
      sourceMap: true,
      plugins: [postcssPresetEnv()],
    }),
    copy({
      flatten: false,
      targets: [
        {
          src: `${srcDir}/styles/tokens/**/*.scss`,
          dest: `${destDir}/tokens`,
        },
      ],
    }),
  ],
};

export default options;
