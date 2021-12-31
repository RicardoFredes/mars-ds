import { Sizes } from "@/types";

const { Small, Medium, Large } = Sizes;

export const LoaderSizes = { Small, Medium, Large };

export interface LoaderProps {
  className?: string;
  size?: typeof LoaderSizes[keyof typeof LoaderSizes];
  color?: string;
}
