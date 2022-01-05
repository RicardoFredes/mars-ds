import type { HTMLProps } from "react";
import { Sizes } from "@/types";

export interface IconLibProps {
  height?: string | number;
  width?: string | number;
}

const { Small, Medium, Large, XLarge } = Sizes;

export const IconSizes = {
  Small,
  Medium,
  Large,
  XLarge,
} as const;

export interface IconProps extends Omit<HTMLProps<HTMLSpanElement>, "size"> {
  size?: typeof IconSizes[keyof typeof IconSizes];
  name: string;
}
