import type { HTMLProps } from "react";

export interface SliderProps extends Pick<HTMLProps<HTMLDivElement>, "className" | "style"> {
  max?: number;
  min?: number;
  formatter?: (value: number) => string;
  defaultValue?: number;
  step?: number;
  onSelect?: (value: number) => void;
  name?: string;
}
