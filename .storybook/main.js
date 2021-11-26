const tsconfigPaths = require("tsconfig-paths-webpack-plugin").default

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: ["@storybook/addon-links", "@storybook/addon-essentials"],
  webpackFinal: async (config) => {
    config.resolve.plugins = [new tsconfigPaths()];
    return config;
  }
};
