import type { HTMLProps } from "react";

type SkeletonPropsHTML = Pick<HTMLProps<HTMLDivElement>, "className" | "children" | "style">;

export interface SkeletonProps extends SkeletonPropsHTML, SkeletonSizes {
  active?: boolean;
  variant?: SkeletonVariants;
}

export enum SkeletonVariants {
  Circle = "circle",
  Paragraph = "paragraph",
  Default = "default",
}

export interface SkeletonSizes {
  height?: string | number;
  width?: string | number;
}
