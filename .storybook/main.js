const { resolve } = require("path");
const { mergeConfig } = require("vite");

module.exports = {
  stories: ["../src/**/*.stories.@(ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storycap"
  ],
  core: {
    builder: "@storybook/builder-vite",
  },
  async viteFinal(config) {
    return mergeConfig(config, {
      resolve: {
        alias: { "~": resolve(__dirname, "../src") },
      },
    });
  },
};
