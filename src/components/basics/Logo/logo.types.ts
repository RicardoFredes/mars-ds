import type { HTMLProps } from "react";

import { Variants } from "@/types";

export const LogoVariants = {
  Primary: Variants.Primary,
  Neutral: Variants.Neutral,
} as const;

export const LogoNames = {
  Full: "full",
  Short: "short",
} as const;

export interface LogoIconProps {
  height?: string | number;
}

export interface LogoProps extends HTMLProps<HTMLSpanElement> {
  name?: typeof LogoNames[keyof typeof LogoNames];
  variant?: typeof LogoVariants[keyof typeof LogoVariants];
  height?: string | number;
}
