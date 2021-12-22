import { CardProps } from "@/components/basics/Card";
import type { DropdownMenuItemProps } from "./dropdown-menu-item.types";

export interface DropdownMenuProps extends Omit<CardProps, "list"> {
  list: DropdownMenuItemProps[];
}
