import type { ComponentItem } from "@/types";

interface RangeCompletionProps extends ComponentItem {
  label?: string;
  iconName?: string;
  total?: number;
  value?: number;
}

export type { RangeCompletionProps };
