import type { HTMLProps } from "react";

import { ColorsEnum, Sizes } from "@/types";

export const LogoColorsEnum = {
  Primary: ColorsEnum.Primary,
  Neutral: ColorsEnum.Neutral,
} as const;

export type LogoColors = typeof LogoColorsEnum[keyof typeof LogoColorsEnum];

export interface LogoVariantProps {
  width?: string | number;
}

export interface LogoProps extends Omit<HTMLProps<HTMLSpanElement>, "size"> {
  variant?: "full" | "short";
  color?: LogoColors;
  size?: Sizes;
}
