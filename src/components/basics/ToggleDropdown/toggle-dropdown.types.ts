import type { DropdownMenuItemProps } from "../DropdownMenuItem";
import type { ToggleButtonProps } from "../ToggleButton";
import type { HTMLProps } from "react";

export interface ToggleDropdownProps
  extends Omit<HTMLProps<HTMLDivElement>, "list" | "children" | "defaultValue"> {
  list: DropdownMenuItemProps[];
  toggleButton?: ToggleButtonProps;
  disabled?: boolean;
  onToggle?: (isOpen: boolean) => void;
  defaultValue?: boolean;
  isRight?: boolean;
  isAbove?: boolean;
}
