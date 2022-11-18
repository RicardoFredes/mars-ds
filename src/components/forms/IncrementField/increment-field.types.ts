export interface IncrementFieldProps extends Omit<React.HTMLProps<HTMLInputElement>, "onChange"> {
  defaultValue?: number;
  min?: number;
  max?: number;
  step?: number;
  formatValue?: (value: number) => string;
  onChange?: (value: number, formattedValue: string) => void;
}
