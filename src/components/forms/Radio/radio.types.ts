import { Option } from "@/types";

export type RadioOption = Option;
export type RadioOptions = Option[];

export interface RadioProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
}

export interface RadioListProps extends Omit<React.HTMLProps<HTMLDivElement>, "onSelect"> {
  options: RadioOptions;
  name: string;
  defaultOption?: RadioOption;
  onSelect?: (option: RadioOption) => void;
}
