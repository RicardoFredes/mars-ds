import type { HTMLAttributes } from "react";

type Align = "center" | "left" | "right";
type Container = "none" | "md" | "lg" | "sm";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  align?: Align;
  container?: Container;
}

export type { ContainerProps };
