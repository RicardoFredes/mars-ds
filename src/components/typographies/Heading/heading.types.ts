import type { TextBaseProps } from "../../primitives/TextBase";

import { Sizes } from "@/types";

const { XSmall, Small, Medium, Large } = Sizes;
export const HeadingSizes = {
  XSmall,
  Small,
  Medium,
  Large,
} as const;

export type HeadingLevels = number | "1" | "2" | "3" | "4" | "5" | "6";

export interface HeadingProps extends Omit<TextBaseProps, "size"> {
  level?: HeadingLevels;
  size?: typeof HeadingSizes[keyof typeof HeadingSizes];
}
