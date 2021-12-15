import type { TextFieldProps } from "@/components/forms/TextField/text-field.types";
import { Option } from "@/types";

export interface SelectFieldProps extends Omit<TextFieldProps, "rightIconButton" | "onSelect"> {
  options: SelectFieldOptions;
  defaultOption?: SelectFieldOption;
  onSelect?: (option: SelectFieldOption) => void;
  enableFilter?: boolean;
}

export type SelectFieldOption = Option;
export type SelectFieldOptions = SelectFieldOption[];
