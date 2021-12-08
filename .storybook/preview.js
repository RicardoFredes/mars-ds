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
};
