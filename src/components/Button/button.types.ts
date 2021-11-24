export { Variants } from "../../types";
import { Variants } from "../../types";

export enum ButtonSizes {
  Small = "small",
  Medium = "medium",
}

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement | HTMLLinkElement>, "as" | "size"> {
  as?: JSX.Element;
  variant?: Variants;
  label?: string;
  size?: ButtonSizes;
}
