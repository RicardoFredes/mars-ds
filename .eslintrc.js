/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  env: {
    node: true,
    es6: true,
  },
  extends: "eslint:recommended",
  parserOptions: {
    sourceType: "module",
  },
  overrides: [
    {
      files: ["src/**/*.ts?(x)"],
      env: {
        browser: true,
        jest: true,
      },
      extends: [
        "plugin:@typescript-eslint/recommended",
        "plugin:jsx-a11y/recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended",
        "plugin:prettier/recommended",
      ],
      settings: {
        react: {
          version: "detect",
        },
      },
      overrides: [
        {
          files: ["**/*.stories.*"],
          rules: {
            "import/no-anonymous-default-export": "off",
          },
        },
      ],
    },
  ],
};
