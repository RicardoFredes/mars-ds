export const SizesEnum = {
  ExtraSmall: "xs",
  Small: "sm",
  Medium: "md",
  Large: "lg",
  ExtraLarge: "xl",
} as const;

export type Sizes = typeof SizesEnum[keyof typeof SizesEnum];
