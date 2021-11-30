import type { HeadingProps } from "../Heading/heading.types";

export enum SubtitlesSizes {
  Medium = "m",
  Small = "s",
}

export interface SubtitleProps extends Omit<HeadingProps, "size"> {
  size?: SubtitlesSizes;
}
