import type { LinkProps } from "./../Link/link.types";

import { Sizes, Variants } from "@/types";

const { Small, Medium } = Sizes;

export const ButtonSizes = { Medium, Small };
export const ButtonVariants = Variants;
export enum ButtonTypes {
  Button = "button",
  Submit = "submit",
  Reset = "reset",
}

export type ButtonKeyTypes = "button" | "submit" | "reset";

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement & LinkProps>, "as" | "size"> {
  variant?: typeof ButtonVariants[keyof typeof ButtonVariants];
  label?: string;
  size?: typeof ButtonSizes[keyof typeof ButtonSizes];
  iconName?: string;
  type?: ButtonKeyTypes;
  as?: React.ElementType | string;
  isRtl?: boolean;
  color?: string;
  hoverColor?: string;
  backgroundColor?: string;
  hoverBackgroundColor?: string;
  borderColor?: string;
  hoverBorderColor?: string;
  borderWidth?: string;
  isRounded?: boolean;
}
