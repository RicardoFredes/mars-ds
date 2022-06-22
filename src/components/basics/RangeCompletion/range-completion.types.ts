import type { IconProps } from "../Icon";

import type { ComponentItem } from "@/types";

interface RangeCompletionProps extends Omit<ComponentItem, "children"> {
  label?: string;
  iconName?: string;
  iconSize?: IconProps["size"];
  total?: number;
  value?: number;
}

export type { RangeCompletionProps };
