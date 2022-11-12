import type { DropdownMenuItemProps } from "../DropdownMenuItem";
import type { LinkProps } from "../Link";

import type { ButtonSizes } from "@/components/basics/Button";

export interface NavigationBarItemProps
  extends Omit<React.HTMLProps<HTMLButtonElement & LinkProps>, "list" | "size"> {
  iconName: string;
  text?: string;
  type?: string;
  size?: typeof ButtonSizes[keyof typeof ButtonSizes];
  list?: DropdownMenuItemProps[];
}
