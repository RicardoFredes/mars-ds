import type { TextBaseProps } from "../../primitives/TextBase";

import { Sizes } from "@/types";

const { Small, Medium, Large } = Sizes;

export const TextSizes = {
  Small,
  Medium,
  Large,
};

export type TextProps = TextBaseProps & { size?: typeof TextSizes[keyof typeof TextSizes] };
