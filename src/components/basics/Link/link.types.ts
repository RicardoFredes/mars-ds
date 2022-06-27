import type { IconProps } from "../Icon";
import type React from "react";

import { Variants } from "@/types";

const { Primary, Secondary } = Variants;

export const LinkVariants = { Primary, Secondary };

interface LinkProps extends Omit<React.HTMLProps<HTMLAnchorElement>, "as"> {
  as?: React.ElementType | string;
  variant?: typeof LinkVariants[keyof typeof LinkVariants];
  iconName?: IconProps["name"];
  iconSize?: IconProps["size"];
}

export type { LinkProps };
