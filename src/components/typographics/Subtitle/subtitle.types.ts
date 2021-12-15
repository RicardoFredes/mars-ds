import type { HeadingProps } from "@/components/typographics/Heading/heading.types";
import { Sizes } from "@/types";

const { Small, Medium } = Sizes;

export const SubtitlesSizes = {
  Medium,
  Small,
} as const;

export interface SubtitleProps extends Omit<HeadingProps, "size"> {
  size?: typeof SubtitlesSizes[keyof typeof SubtitlesSizes];
}
