import type { HTMLProps } from "react";
import { Sizes } from "@/types";

export interface IconLibProps {
  height?: string | number;
  width?: string | number;
}

const { Small, Medium, Large } = Sizes;

export const IconSizes = {
  Small,
  Medium,
  Large,
} as const;

export interface IconProps extends Omit<HTMLProps<HTMLSpanElement>, "size"> {
  size?: typeof IconSizes[keyof typeof IconSizes];
  name: string;
}
