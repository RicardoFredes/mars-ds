import type React from "react";
import { Sizes } from "@/types";

const { XSmall, Small, Medium, Large, XLarge, XXLarge } = Sizes;
export const HeadingSizes = {
  XSmall,
  Small,
  Medium,
  Large,
  XLarge,
  XXLarge,
} as const;

export type HeadingLevels = number | "1" | "2" | "3" | "4" | "5" | "6";

export interface HeadingProps extends Omit<React.HTMLProps<HTMLElement>, "as" | "size"> {
  as?: React.ElementType | string;
  level?: HeadingLevels;
  size?: typeof HeadingSizes[keyof typeof HeadingSizes];
}
