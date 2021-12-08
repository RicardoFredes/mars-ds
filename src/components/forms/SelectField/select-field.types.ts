import type { TextFieldProps } from "@/components/forms/TextField/text-field.types";

export interface SelectFieldProps extends Omit<TextFieldProps, "rightIconButton" | "onSelect"> {
  options: SelectFieldOption[];
  defaultOption?: SelectFieldOption;
  onSelect?: (option: SelectFieldOption) => void;
  enableFilter?: boolean;
}

export interface SelectFieldOption {
  label: string;
  value?: any;
}
