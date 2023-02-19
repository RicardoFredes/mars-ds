import type { TextBaseProps } from "../../primitives/TextBase";

import { Sizes } from "@/types";

export const HeadingSizes = { ...Sizes } as const;

export type HeadingLevels = number | "1" | "2" | "3" | "4" | "5" | "6";

export interface HeadingProps extends Omit<TextBaseProps, "size"> {
  level?: HeadingLevels;
  size?: typeof HeadingSizes[keyof typeof HeadingSizes];
}
