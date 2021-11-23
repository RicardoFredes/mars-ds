import { Sizes } from "../../types";

export interface IconLibProps {
  color?: string;
  height?: string | number;
  width?: string | number;
}

export interface IconProps extends Omit<React.HTMLProps<HTMLElement>, "size"> {
  size?: Sizes;
  color?: string;
  name: string;
}
