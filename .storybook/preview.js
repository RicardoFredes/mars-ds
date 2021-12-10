import mars from "./theme";

import "../src/styles/index.scss";

export const parameters = {
  docs: {
    theme: mars,
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  backgrounds: {
    default: 'light',
    values: [
      {
        name: 'light',
        value: '#f4f6f8',
      },
      {
        name: 'dark',
        value: '#919eab29',
      },
    ],
    grid: {
      cellSize: 8,
      opacity: 0.25,
      cellAmount: 10,
      offsetX: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
      offsetY: 16, // default is 0 if story has 'fullscreen' layout, 16 if layout is 'padded'
    },
  },
};
