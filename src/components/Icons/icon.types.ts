import { Sizes } from "../../types";

export interface IconLibProps {
  height?: string | number;
  width?: string | number;
}

export interface IconProps extends Omit<React.HTMLProps<HTMLElement>, "size"> {
  size?: Sizes;
  name: string;
}
