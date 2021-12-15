import { Elevations } from "@/types";
import type { HTMLProps } from "react";

export const CardElevations = {
  Default: "none",
  ...Elevations,
};

export interface CardProps extends HTMLProps<HTMLDivElement> {
  elevation?: typeof CardElevations[keyof typeof CardElevations];
}
