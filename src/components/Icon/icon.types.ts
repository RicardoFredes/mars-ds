import type { Sizes } from "@/types";
import type { HTMLProps } from "react";

import IconLibrary from "./lib";

export interface IconLibProps {
  height?: string | number;
  width?: string | number;
}

export interface IconProps extends Omit<HTMLProps<HTMLSpanElement>, "name" | "size"> {
  size?: Sizes;
  name: keyof typeof IconLibrary;
}
