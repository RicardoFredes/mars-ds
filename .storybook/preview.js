import addons from '@storybook/addons';
import * as themes from "./themes";

import "../src/styles/index.scss";

function isDarkMode() {
  return parent.document.body.classList.contains('theme-dark');
}

const channel = addons.getChannel();
let isDark = isDarkMode();

channel.on('DARK_MODE', (dark) => {
  if (isDark === dark) return;
  
  const iframe = parent.document.querySelector('#storybook-preview-iframe');
  const { src } = iframe;

  iframe.src = src;
  isDark = dark;
});

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
    dark: themes.dark,
    light: themes.light,
    darkClass: "theme-dark",
    lightClass: "theme-light",
    classTarget: "body",
    stylePreview: true,
    styleDocs: true,
  },
  docs: {
    get theme() {
      return isDarkMode() ? themes.dark : themes.light;
    },
  }
};
