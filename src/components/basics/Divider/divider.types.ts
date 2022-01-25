import { HTMLProps } from "react";

export interface DividerProps extends Omit<HTMLProps<HTMLHRElement>, "size"> {
  vertical?: boolean;
}
