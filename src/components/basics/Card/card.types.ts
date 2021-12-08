import type { Elevation } from "@/types";
import type { HTMLProps } from "react";

export interface CardProps extends HTMLProps<HTMLDivElement> {
  elevation?: Elevation;
}
