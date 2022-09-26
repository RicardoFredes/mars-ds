import type { TextBaseProps } from "../../primitives/TextBase";

import { Sizes } from "@/types";

const { Small, Medium } = Sizes;

export const TextSizes = {
  Small,
  Medium,
};

export type TextProps = TextBaseProps & { size?: typeof TextSizes[keyof typeof TextSizes] };
