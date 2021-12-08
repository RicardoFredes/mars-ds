import type { CardProps } from "../Card/card.types";
import type { DropdownMenuItemProps } from "./dropdown-menu-item.types";

export interface DropdownMenuProps extends Omit<CardProps, "list"> {
  list: DropdownMenuItemProps[];
}
