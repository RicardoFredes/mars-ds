import type { LabelThemes, LabelVariants } from "@/components/basics/Label";
import type { TextFieldProps } from "@/components/forms/TextField";
import type { Option } from "@/types";

export interface SelectFieldProps extends Omit<TextFieldProps, "rightIconButton" | "onSelect"> {
  options: SelectFieldOptions;
  defaultOption?: SelectFieldOption;
  onSelect?: (option: SelectFieldOption) => void;
  enableFilter?: boolean;
  theme?: LabelThemes;
  variant?: LabelVariants;
}

export type SelectFieldOption = Option;
export type SelectFieldOptions = SelectFieldOption[];
