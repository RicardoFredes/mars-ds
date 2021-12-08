import type { Sizes } from "@/types";
import type { HTMLProps } from "react";

export interface IconLibProps {
  height?: string | number;
  width?: string | number;
}

export interface IconProps extends Omit<HTMLProps<HTMLSpanElement>, "size"> {
  size?: Sizes;
  name: string;
}
