import { Sizes, Variants } from "@/types";

const { Small, Medium } = Sizes;

export const ButtonSizes = {
  Medium,
  Small,
} as const;

export const ButtonVariants = Variants;

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement | HTMLLinkElement>, "as" | "size"> {
  as?: React.ElementType | string;
  variant?: typeof ButtonVariants[keyof typeof ButtonVariants];
  label?: string;
  size?: typeof ButtonSizes[keyof typeof ButtonSizes];
  iconName?: string;
}
