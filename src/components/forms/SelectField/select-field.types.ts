import type { TextFieldProps } from "../TextField/text-field.types";

export interface SelectFieldProps extends Omit<TextFieldProps, "rightIconButton" | "onSelect"> {
  options: SelectFieldOption[];
  defaultOption?: SelectFieldOption;
  onSelect?: (option: SelectFieldOption) => void;
}

export interface SelectFieldOption {
  label: string;
  value?: any;
}
