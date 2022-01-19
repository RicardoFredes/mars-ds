import { IconProps } from "@/components/basics/Icon";
import { ReactNode } from "react";

export interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
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
