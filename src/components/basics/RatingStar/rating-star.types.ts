import type { IconSizes } from "../Icon";

import type { ComponentItem } from "@/types";

export interface RatingStarProps extends Omit<ComponentItem, "onSelect"> {
  iconName?: string;
  label?: string;
  size?: typeof IconSizes[keyof typeof IconSizes];
  total?: number;
  value?: number;
  onSelect?: (value: number) => void;
}

export interface StarProps extends ComponentItem {
  value: number;
  currentValue: number;
  size: typeof IconSizes[keyof typeof IconSizes];
  iconName: string;
}
