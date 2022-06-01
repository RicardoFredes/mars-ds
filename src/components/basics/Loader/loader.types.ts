import { Sizes } from "@/types";

const { XSmall, Small, Medium, Large, XLarge } = Sizes;

export const LoaderSizes = { XSmall, Small, Medium, Large, XLarge };

export interface LoaderProps {
  className?: string;
  size?: typeof LoaderSizes[keyof typeof LoaderSizes];
  color?: string;
}
