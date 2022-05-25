import type { DropdownMenuItemProps } from "../DropdownMenuItem";
import type { ToggleButtonProps } from "../ToggleButton";
import type { HTMLProps } from "react";

export interface ToggleDropdownProps
  extends Omit<HTMLProps<HTMLDivElement>, "list" | "children" | "defaultValue"> {
  list: DropdownMenuItemProps[];
  componentLink?: React.ElementType | string;
  toggleButton?: ToggleButtonProps;
  disabled?: boolean;
  onToggle?: (isOpen: boolean) => void;
  defaultValue?: boolean;
}
