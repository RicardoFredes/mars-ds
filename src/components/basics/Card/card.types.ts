import type { HTMLProps } from "react";

import { Elevations } from "@/types";

export const CardElevations = {
  Default: "none",
  ...Elevations,
};

export interface CardProps extends HTMLProps<HTMLDivElement> {
  elevation?: typeof CardElevations[keyof typeof CardElevations];
}
