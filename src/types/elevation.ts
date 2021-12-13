export const ElevationEnum = {
  XLow: "xl",
  Low: "lw",
  Medium: "md",
  High: "hg",
  XHigh: "xh",
  XXHigh: "xxh",
} as const;

export type Elevation = typeof ElevationEnum[keyof typeof ElevationEnum];
