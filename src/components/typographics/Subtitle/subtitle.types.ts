import type { HeadingProps } from "@/components/typographics/Heading";
import { Sizes } from "@/types";

const { Small, Medium } = Sizes;

export const SubtitleSizes = {
  Medium,
  Small,
} as const;

export interface SubtitleProps extends Omit<HeadingProps, "size"> {
  size?: typeof SubtitleSizes[keyof typeof SubtitleSizes];
}
