import type { HTMLProps } from "react";

export interface SliderProps extends Omit<HTMLProps<HTMLInputElement>, "onSelect"> {
  max?: number;
  min?: number;
  formatter?: (value: number) => string;
  defaultValue?: number;
  step?: number;
  onSelect?: (value: number) => void;
}
