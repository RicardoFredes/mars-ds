import type { TextBaseProps } from "../TextBase";

import { Sizes } from "@/types";

const { Small, Medium } = Sizes;

export const TextSizes = {
  Small,
  Medium,
} as const;

export type TextProps = TextBaseProps;
