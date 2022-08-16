import type { ReactNode } from "react";

import type { IconProps } from "@/components/basics/Icon";

export interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
  error?: string | boolean;
  success?: boolean;
  info?: string | ReactNode;
  mask?: string | string[];
  rightIconButton?: IconProps;
  leftIconButton?: IconProps;
  dataKey?: string;
  inputDisabled?: boolean;
}

export enum IconPosition {
  Left = "left",
  Right = "right",
}
