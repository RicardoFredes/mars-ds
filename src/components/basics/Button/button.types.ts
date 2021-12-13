import { SizesEnum, VariantsEnum } from "@/types";

const { Small, Medium } = SizesEnum;

export const ButtonSizesEnum = {
  Medium,
  Small,
} as const;

export const ButtonVariantsEnum = VariantsEnum;

export type ButtonSizes = typeof ButtonSizesEnum[keyof typeof ButtonSizesEnum];

export type ButtonVariants = typeof ButtonVariantsEnum[keyof typeof ButtonVariantsEnum];

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement | HTMLLinkElement>, "as" | "size"> {
  as?: JSX.Element | string;
  variant?: ButtonVariants;
  label?: string;
  size?: ButtonSizes;
}
