import type React from "react";

export const HeadingSizesEnum = {
  XSmalll: "xs",
  Small: "sm",
  Medium: "mf",
  Large: "lg",
  XLarge: "xl",
  XXLarge: "xxl",
} as const;

export type HeadingSizes = typeof HeadingSizesEnum[keyof typeof HeadingSizesEnum];

export type HeadingLevels = number | "1" | "2" | "3" | "4" | "5" | "6";

export interface HeadingProps extends Omit<React.HTMLProps<HTMLElement>, "as" | "size"> {
  as?: React.ElementType | string;
  level?: HeadingLevels;
  size?: HeadingSizes;
}
