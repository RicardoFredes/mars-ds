type ColorScheme = "dark" | "light" | "auto";

const THEME_KEY = "theme";

const isColorSchemaForced = (colorScheme: ColorScheme) => {
  if (typeof window === "undefined" || typeof window.matchMedia === "undefined") return false;
  try {
    const themeName = getThemeValue(colorScheme);
    const localValue = localStorage.getItem(THEME_KEY) === themeName;
    const systemValue = matchMedia(`(prefers-color-scheme: ${colorScheme})`).matches;
    if (colorScheme === "dark" && window.localStorage.getItem("theme") === "theme-light") {
      return false;
    }
    return localValue !== systemValue;
  } catch (error) {
    console.error(error);
    return false;
  }
};

const getThemeValue = (themeName: ColorScheme) => `theme-${themeName}`;

export const isDarkModeForced = () => isColorSchemaForced("dark");
export const isLightModeForced = () => isColorSchemaForced("light");

export const setTheme = (theme?: ColorScheme) => {
  if (!theme) localStorage.removeItem(THEME_KEY);
  const colorSchema = matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  const themeName = getThemeValue(theme || colorSchema);
  localStorage.setItem(THEME_KEY, themeName);
  document.body.classList.add(themeName);
};
