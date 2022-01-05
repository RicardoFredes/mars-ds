import { CardProps } from "@/components/basics/Card";
import {
  DropdownMenuItemKeySizes,
  DropdownMenuItemProps,
} from "@/components/basics/DropdownMenuItem";

export interface DropdownMenuProps extends Omit<CardProps, "list" | "size"> {
  list: DropdownMenuItemProps[];
  size?: DropdownMenuItemKeySizes;
}
