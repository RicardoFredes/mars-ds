export interface SliderProps extends React.HTMLProps<HTMLInputElement> {
  max?: number;
  min?: number;
  formatter?: (value: number) => string;
  defaultValue?: number;
  step?: number;
}
