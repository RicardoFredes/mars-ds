import type { Sizes, Variants } from "@/types";

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement | HTMLLinkElement>, "as" | "size"> {
  as?: JSX.Element | string;
  variant?: Variants;
  label?: string;
  size?: Sizes;
}
