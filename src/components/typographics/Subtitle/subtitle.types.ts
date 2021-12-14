import type { HeadingProps } from "@/components/typographics/Heading/heading.types";

export enum SubtitlesSizes {
  Medium = "md",
  Small = "sm",
}

export interface SubtitleProps extends Omit<HeadingProps, "size"> {
  size?: SubtitlesSizes;
}
