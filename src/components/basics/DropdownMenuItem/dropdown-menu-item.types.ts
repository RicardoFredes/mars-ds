import { Sizes } from "@/types";
import { HTMLProps } from "react";
import { AriaAttributes } from "react";

const { Medium, Small } = Sizes;
export const DropdownMenuItemSizes = { Medium, Small };
export type DropdownMenuItemKeySizes =
  typeof DropdownMenuItemSizes[keyof typeof DropdownMenuItemSizes];

export interface DropdownMenuItemProps
  extends Omit<HTMLProps<HTMLButtonElement>, "size" | "type">,
    AriaAttributes {
  label?: string;
  rightIconName?: string;
  leftIconName?: string;
  size?: DropdownMenuItemKeySizes;
}
