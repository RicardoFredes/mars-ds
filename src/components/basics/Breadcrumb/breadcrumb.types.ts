import type { DropdownMenuItemProps } from "../DropdownMenuItem";
import type { HTMLProps } from "react";

import type { ComponentLink } from "@/types";

export interface BreadcrumbProps extends Omit<HTMLProps<HTMLDivElement>, "list"> {
  list?: DropdownMenuItemProps[];
  componentLink?: ComponentLink;
}
