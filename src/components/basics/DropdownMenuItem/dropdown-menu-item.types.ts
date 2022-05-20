import type { HTMLProps, AriaAttributes } from "react";

import { Sizes } from "@/types";

const { Medium, Small } = Sizes;
export const DropdownMenuItemSizes = { Medium, Small };
export type DropdownMenuItemKeySizes =
  typeof DropdownMenuItemSizes[keyof typeof DropdownMenuItemSizes];

export interface DropdownMenuItemProps
  extends Omit<HTMLProps<HTMLButtonElement>, "size" | "type" | "as">,
    AriaAttributes {
  label?: string;
  rightIconName?: string;
  leftIconName?: string;
  size?: DropdownMenuItemKeySizes;
  componentLink?: React.ElementType | string;
}
