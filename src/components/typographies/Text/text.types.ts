import type { TextBaseProps } from "../../primitives/TextBase";

import { Sizes } from "@/types";

const { XSmall, Small, Medium, Large, XLarge, XXLarge } = Sizes;

export const TextSizes = { XSmall, Small, Medium, Large, XLarge, XXLarge };

export type TextProps = TextBaseProps & { size?: typeof TextSizes[keyof typeof TextSizes] };
