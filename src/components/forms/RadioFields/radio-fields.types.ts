import { RadioOption, RadioOptions } from "@/components/forms/Radio";
import { HTMLProps } from "react";

export interface RadioFieldsProps extends Omit<HTMLProps<HTMLDivElement>, "children" | "onSelect"> {
  options?: RadioOptions;
  name?: string;
  defaultOption?: RadioOption;
  onSelect?: (option: RadioOption) => void;
  disabled?: boolean;
}
