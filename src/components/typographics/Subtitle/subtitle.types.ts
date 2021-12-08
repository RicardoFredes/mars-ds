import type { HeadingProps } from "@/components/typographics/Heading/heading.types";

export enum SubtitlesSizes {
  Medium = "m",
  Small = "s",
}

export interface SubtitleProps extends Omit<HeadingProps, "size"> {
  size?: SubtitlesSizes;
}
