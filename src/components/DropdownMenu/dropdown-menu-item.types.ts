import type React from "react";

export interface DropdownMenuItemProps extends React.HTMLProps<HTMLElement> {
  label?: string;
  href?: string;
  iconName?: string
}
