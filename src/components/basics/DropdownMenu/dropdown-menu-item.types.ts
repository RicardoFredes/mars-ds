import type React from "react";
import { AriaAttributes } from "react";

export interface DropdownMenuItemProps extends React.HTMLProps<HTMLElement>, AriaAttributes {
  label?: string;
  href?: string;
  rightIconName?: string;
  leftIconName?: string;
}
