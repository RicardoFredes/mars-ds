export const SizesEnum = {
  Small: "s",
  Medium: "m",
  Large: "l",
} as const;

export type Sizes = typeof SizesEnum[keyof typeof SizesEnum];
