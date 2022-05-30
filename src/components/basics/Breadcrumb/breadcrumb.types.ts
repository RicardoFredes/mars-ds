import type { DropdownMenuItemProps } from "../DropdownMenuItem";
import type { HTMLProps } from "react";

export interface BreadcrumbProps extends Omit<HTMLProps<HTMLDivElement>, "list"> {
  list?: DropdownMenuItemProps[];
}
