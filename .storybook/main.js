const tsconfigPaths = require("tsconfig-paths-webpack-plugin").default;

module.exports = {
  core: {
    builder: "webpack5",
  },
  stories: ["../src/**/*.stories.@(mdx|js|jsx|ts|tsx)"],
  addons: [
    "@storybook/preset-scss",
    "@storybook/addon-essentials",
    "@storybook/addon-a11y",
    "@storybook/addon-links",
  ],

  webpackFinal: async (config) => {
    return {
      ...config,
      resolve: {
        ...config.resolve,
        plugins: [new tsconfigPaths()],
      },
    };
  },
};
