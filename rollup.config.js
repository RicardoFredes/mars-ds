import commonjs from "@rollup/plugin-commonjs";
import image from "@rollup/plugin-image";
import resolve from "@rollup/plugin-node-resolve";
import strip from "@rollup/plugin-strip";
import url from "@rollup/plugin-url";
import postcssPresetEnv from "postcss-preset-env";
import copy from "rollup-plugin-copy";
import clean from "rollup-plugin-delete";
import postcss from "rollup-plugin-postcss";
import progress from "rollup-plugin-progress";
import typescript from "rollup-plugin-typescript2";
import ttypescript from "ttypescript";

import packageJson from "./package.json";

const destDir = packageJson.files[0];

/** @type {Partial<import("rollup").RollupOptions>} */
const options = {
  input: "./src/index.ts",
  output: [
    {
      file: packageJson.main,
      format: "cjs",
      sourcemap: true,
    },
  ],
  strictDeprecations: true,
  external: [
    ...Object.keys(packageJson.peerDependencies || {}),
    ...Object.keys(packageJson.dependencies || {}),
  ],
  plugins: [
    clean({ targets: `${destDir}/*` }),
    // @ts-expect-error `rollup-plugin-progress` doesn't include type definitions.
    progress(),
    resolve({
      rootDir: "./src",
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
      minimize: true,
      sourceMap: true,
      plugins: [postcssPresetEnv()],
    }),
    copy({
      verbose: true,
      targets: [
        {
          src: "./src/tokens",
          dest: `${destDir}`,
        },
      ],
    }),
  ],
};

export default options;
