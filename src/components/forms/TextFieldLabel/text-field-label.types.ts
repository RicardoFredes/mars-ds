import type { ReactNode } from "react";

import type { IconProps } from "@/components/basics/Icon";
import type { LabelThemes, LabelVariants } from "@/components/basics/Label";

export interface TextFieldLabelProps extends React.HTMLProps<HTMLInputElement> {
  error?: string | boolean;
  success?: boolean;
  info?: string | ReactNode;
  mask?: string | string[];
  rightIconButton?: IconProps;
  leftIconButton?: IconProps;
  dataKey?: string;
  inputDisabled?: boolean;
  theme?: LabelThemes;
  variant?: LabelVariants;
}
