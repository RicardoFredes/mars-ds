import type { HTMLProps } from "react";

export interface SkeletonProps
  extends Pick<HTMLProps<HTMLDivElement>, "className" | "children" | "style"> {
  active?: boolean;
}
