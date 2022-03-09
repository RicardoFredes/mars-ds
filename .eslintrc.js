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
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
        "plugin:storybook/recommended",
        "plugin:prettier/recommended",
      ],
      parserOptions: {
        project: "./tsconfig.json",
      },
      settings: {
        "react": {
          version: "detect",
        },
        "import/parsers": {
          "@typescript-eslint/parser": [".ts", ".tsx"],
        },
        "import/resolver": {
          typescript: {
            alwaysTryTypes: true,
          },
        },
      },
      rules: {
        "@typescript-eslint/consistent-type-imports": ["error", { prefer: "type-imports" }],
        "@typescript-eslint/consistent-type-exports": [
          "error",
          { fixMixedExportsWithInlineTypeSpecifier: false },
        ],
        "import/no-cycle": "error",
        "import/no-self-import": "error",
        "import/order": [
          "warn",
          {
            "groups": [
              "type",
              "builtin",
              "external",
              ["internal", "parent", "sibling", "index"],
              "object",
            ],
            "pathGroups": [
              {
                pattern: "@/**",
                group: "internal",
                position: "before",
              },
              { pattern: "@!(/)**", group: "external" },
            ],
            "newlines-between": "always",
            "alphabetize": {
              order: "asc",
              caseInsensitive: false,
            },
          },
        ],
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
