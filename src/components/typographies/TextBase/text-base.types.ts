import type React from "react";

import { Sizes } from "@/types";

const { Small, Medium } = Sizes;

export const TextBaseSizes = {
  Small,
  Medium,
} as const;

export interface TextBaseProps extends Omit<React.HTMLProps<HTMLElement>, "as" | "size"> {
  as?: React.ElementType | string;
  size?: typeof TextBaseSizes[keyof typeof TextBaseSizes];
  html?: string;
}
