import type { DropdownMenuItemProps } from "../DropdownMenuItem";
import type { HTMLProps } from "react";

type ComponentLink = React.ElementType | string;

export interface BreadcrumbProps extends Omit<HTMLProps<HTMLDivElement>, "list"> {
  list?: DropdownMenuItemProps[];
  componentLink?: ComponentLink;
}
