import type { IconProps } from "../Icon";

import type { ComponentItem } from "@/types";

export interface RatingStarProps extends Omit<ComponentItem, "onSelect"> {
  iconName?: string;
  label?: string;
  iconSize?: IconProps["size"];
  total?: number;
  value?: number;
  onSelect?: (value: number) => void;
  disabled?: boolean;
  isLoading?: boolean;
}

export interface StarProps extends ComponentItem {
  value: number;
  currentValue: number;
  iconSize?: IconProps["size"];
  iconName: string;
  isLoading?: boolean;
  disabled?: boolean;
}
