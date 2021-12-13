import { themes } from "@storybook/theming";
import mars from "./theme";

import "../src/styles/index.scss";

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    disable: true,
    default: "light",
    grid: {
      cellSize: 8,
      opacity: 0.25,
      cellAmount: 10,
      offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
    },
  },
  darkMode: {
    dark: { ...themes.dark, appBg: "black", appContentBg: "#919eab29" },
    light: mars,
    darkClass: "theme-dark",
    lightClass: "theme-light",
    classTarget: "body",
    backgrounds: {
      default: "dark",
    },
    stylePreview: true,
  },
};
