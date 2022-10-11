import type { HeadingLevels, HeadingProps } from "@/components/typographies/Heading";
import { Sizes } from "@/types";

const { Small, Medium, Large } = Sizes;
export const DisplaySizes = {
  Small,
  Medium,
  Large,
} as const;

export type DisplayLevels = HeadingLevels;

export interface DisplayProps extends Omit<HeadingProps, "size"> {
  size?: typeof DisplaySizes[keyof typeof DisplaySizes];
}
