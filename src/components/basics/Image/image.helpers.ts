import type { ImageItem } from "./image.types";

type Emulation = "none" | "dark" | "light";

export const mockPrefersColorScheme = (emulation: Emulation) => {
  const getMatch = (emulation: Emulation, query: string) =>
    query === `(prefers-color-scheme: ${emulation})`;

  Object.defineProperty(window, "matchMedia", {
    writable: true,
    value: jest.fn().mockImplementation((query) => ({
      matches: getMatch(emulation, query),
      media: query,
      onchange: null,
    })),
  });
};

type ParseImageSourcesProps = Partial<{
  src: string;
  darkModeSrc: string;
  forceDarkMode: boolean;
  sm: ImageItem;
  md: ImageItem;
  lg: ImageItem;
}>;

export const parseImageSources = ({
  src,
  darkModeSrc,
  forceDarkMode,
  sm,
  md,
  lg,
}: ParseImageSourcesProps) => {
  const defaultSrc = src || sm?.src || md?.src || lg?.src;
  const defaultDarkModeSrc = darkModeSrc || sm?.darkModeSrc || md?.darkModeSrc || lg?.darkModeSrc;
  if (forceDarkMode) {
    return {
      xs: defaultDarkModeSrc || defaultSrc,
      sm: sm?.darkModeSrc || sm?.src,
      md: md?.darkModeSrc || md?.src,
      lg: lg?.darkModeSrc || lg?.src,
    };
  }
  return {
    xs: defaultSrc || defaultDarkModeSrc,
    sm: sm?.src || sm?.darkModeSrc,
    md: md?.src || md?.darkModeSrc,
    lg: lg?.src || lg?.darkModeSrc,
  };
};
