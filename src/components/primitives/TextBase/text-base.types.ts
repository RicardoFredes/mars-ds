import type React from "react";

type TextBaseChildren = string | number | TextBaseProps;

interface TextBaseProps extends Omit<React.HTMLProps<HTMLElement>, "as" | "size"> {
  as?: React.ElementType | string;
  html?: string;
  children?: TextBaseChildren | any;
}

export type { TextBaseChildren, TextBaseProps };
