import type React from "react";

export enum HeadingSizes {
  Medium = "medium",
  Large = "large",
  ExtraLarge = "extra-large",
}

export interface HeadingProps extends Omit<React.HTMLProps<HTMLElement>, "as" | "size"> {
  as: any;
  level: number | "1" | "2" | "3" | "4" | "5" | "6";
  size: HeadingSizes;
}
