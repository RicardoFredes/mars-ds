import type { HTMLProps } from "react";

import type { RadioOption, RadioOptions } from "@/components/forms/Radio";

export interface RadioFieldsProps extends Omit<HTMLProps<HTMLDivElement>, "children" | "onSelect"> {
  options?: RadioOptions;
  name?: string;
  defaultOption?: RadioOption;
  onSelect?: (option: RadioOption) => void;
  disabled?: boolean;
}
