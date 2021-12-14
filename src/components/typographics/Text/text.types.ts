import type React from "react";

export enum TextSizes {
  Small = "s",
  Medium = "m",
}

export interface TextProps extends Omit<React.HTMLProps<HTMLElement>, "as" | "size"> {
  as?: React.ElementType | string;
  size?: TextSizes;
}
