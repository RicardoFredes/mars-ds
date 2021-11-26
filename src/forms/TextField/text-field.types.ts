import type { IconProps } from "@/components/Icon/icon.types";

export interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  error?: string | boolean
  success?: boolean
  info?: string
  mask?: string | string[]
  rightIconButton?: IconProps
  leftIconButton?: IconProps
}
