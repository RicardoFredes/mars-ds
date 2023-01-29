import { create, themes } from "@storybook/theming";

/** @type {import("@storybook/theming").Theme} */
export const light = create({
  base: "light",
  colorPrimary: "rgba(237, 67, 67, 1)",
  colorSecondary: "rgba(24, 144, 255, 1)",

  // UI
  appBg: "rgba(244, 246, 248, 1)",
  appContentBg: "#FFFFFF",
  appBorderColor: "rgba(145, 158, 171, 0.24)",
  appBorderRadius: 8,

  // Typography
  fontBase: "Roboto, Arial, sans-serif",
  fontCode:
    "'JetBrains Mono', 'Cascadia Code', 'Iosevka Custom', Iosevka, 'Fira Code', 'Fira Mono' 'Roboto Mono', monospace",

  // Text colors
  textColor: "rgba(33, 43, 54, 1)",
  textInverseColor: "rgba(244, 246, 248, 1)",
  textMutedColor: "rgba(145, 158, 171, 1)",

  // Toolbar default and active colors
  barTextColor: "rgba(99, 115, 129, 1)",
  barSelectedColor: "rgba(237, 67, 67, 1)",
  // barBg: 'hotpink',

  // Form colors
  inputBg: "rgba(244, 246, 248, 1)",
  inputBorder: "rgba(145, 158, 171, 0.24)",
  inputTextColor: "rgba(33, 43, 54, 1)",
  inputBorderRadius: 8,

  // Branding
  brandTitle: "Mars Design System",
  brandUrl: "https://github.com/ricardofredes/mars-ds",
  brandImage:
    "",

  // Grid
  gridCellSize: 8,
});

export const dark = { ...light, ...themes.dark, appBg: "black", appContentBg: "#161c24" };
