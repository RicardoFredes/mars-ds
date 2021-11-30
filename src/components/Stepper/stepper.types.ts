import type { ReactElement } from "react";

export interface StepperProps extends ReactElement<HTMLElement> {
  steps: Array<string>;
  position: number;
}
