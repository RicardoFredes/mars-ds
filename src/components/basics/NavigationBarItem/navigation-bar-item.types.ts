import type { DropdownMenuItemProps } from "../DropdownMenuItem";
import type { LinkProps } from "../Link";
import type { ToggleDropdownProps } from "../ToggleDropdown";

import type { ButtonSizes } from "@/components/basics/Button";

export interface NavigationBarItemProps
  extends Omit<React.HTMLProps<HTMLButtonElement & LinkProps>, "list" | "size" | "defaultValue">,
    Pick<ToggleDropdownProps, "isRight" | "isAbove"> {
  iconName: string;
  text?: string;
  type?: string;
  showText?: boolean;
  size?: typeof ButtonSizes[keyof typeof ButtonSizes];
  list?: DropdownMenuItemProps[];
  componentLink?: React.ElementType | string;
}
