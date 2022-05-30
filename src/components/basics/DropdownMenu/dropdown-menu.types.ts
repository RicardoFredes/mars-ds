import type { CardProps } from "@/components/basics/Card";
import type {
  DropdownMenuItemKeySizes,
  DropdownMenuItemProps,
} from "@/components/basics/DropdownMenuItem";

export interface DropdownMenuProps extends Omit<CardProps, "list" | "size"> {
  list: DropdownMenuItemProps[];
  size?: DropdownMenuItemKeySizes;
  componentLink?: React.ElementType | string;
}
