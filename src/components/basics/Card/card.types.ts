import { ElevationEnum } from "@/types";
import type { HTMLProps } from "react";

export const CardElevationsEnum = {
  Default: "none",
  ...ElevationEnum,
};
export type CardElevations = typeof CardElevationsEnum[keyof typeof CardElevationsEnum];

export interface CardProps extends HTMLProps<HTMLDivElement> {
  elevation?: CardElevations;
}
