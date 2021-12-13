import type { HTMLProps } from "react";

export interface StepperProps extends HTMLProps<HTMLDivElement> {
  steps: Array<string>;
  position: number;
}
