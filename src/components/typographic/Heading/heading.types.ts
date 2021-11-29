import type React from "react";

export enum HeadingSizes {
  XSmalll = "xs",
  Small = "s",
  Medium = "m",
  Large = "l",
  XLarge = "xl",
  XXLarge = "xxl",
}

export type HeadingLevels = number | "1" | "2" | "3" | "4" | "5" | "6";

export interface HeadingProps extends Omit<React.HTMLProps<HTMLElement>, "as" | "size"> {
  as?: any;
  level?: HeadingLevels
  size?: HeadingSizes;
}
