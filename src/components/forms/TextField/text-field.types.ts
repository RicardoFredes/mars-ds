import type { ReactNode } from "react";

import type { IconProps } from "@/components/basics/Icon";
import type { ComponentCommon } from "@/types";

type InputProps = Pick<
  React.HTMLProps<HTMLInputElement>,
  | "label"
  | "name"
  | "onClick"
  | "onChange"
  | "onFocus"
  | "onKeyDown"
  | "onBlur"
  | "disabled"
  | "type"
  | "value"
>;

export interface TextFieldProps extends InputProps, ComponentCommon {
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
