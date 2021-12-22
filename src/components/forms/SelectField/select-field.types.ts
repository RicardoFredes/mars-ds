import { TextFieldProps } from "@/components/forms/TextField";
import { Option } from "@/types";

export interface SelectFieldProps extends Omit<TextFieldProps, "rightIconButton" | "onSelect"> {
  options: SelectFieldOptions;
  defaultOption?: SelectFieldOption;
  onSelect?: (option: SelectFieldOption) => void;
  enableFilter?: boolean;
}

export type SelectFieldOption = Option;
export type SelectFieldOptions = SelectFieldOption[];
