import type React from "react";
import { Sizes } from "@/types";

const { Small, Medium } = Sizes;

export const TextSizes = {
  Small,
  Medium,
} as const;

export interface TextProps extends Omit<React.HTMLProps<HTMLElement>, "as" | "size"> {
  as?: React.ElementType | string;
  size?: typeof TextSizes[keyof typeof TextSizes];
}
