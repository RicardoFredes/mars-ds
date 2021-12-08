import type { HTMLProps } from "react";

import { ColorsEnum } from "@/types";

export const LogoVariantsEnum = {
  Primary: ColorsEnum.Primary,
  Neutral: ColorsEnum.Neutral,
} as const;

export type LogoVariants = typeof LogoVariantsEnum[keyof typeof LogoVariantsEnum];

export const LogoNameEnums = {
  Full: "full",
  Short: "short",
} as const;

export type LogoNames = typeof LogoNameEnums[keyof typeof LogoNameEnums];

export interface LogoIconProps {
  height?: string | number;
}

export interface LogoProps extends HTMLProps<HTMLSpanElement> {
  name?: LogoNames;
  variant?: LogoVariants;
  height?: string | number;
}
