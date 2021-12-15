import { Sizes } from "@/types";
import { HeadingLevels, HeadingProps } from "@/components/typographics/Heading/heading.types";

const { Medium, Large } = Sizes;
export const DisplaySizes = {
  Medium,
  Large,
} as const;

export type DisplayLevels = HeadingLevels;

export interface DisplayProps extends Omit<HeadingProps, "size"> {
  size?: typeof DisplaySizes[keyof typeof DisplaySizes];
}
