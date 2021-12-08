import { Option } from "@/types";

export interface RadioProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
}

export interface RadioListProps extends Omit<React.HTMLProps<HTMLDivElement>, "onSelect"> {
  options: Option[];
  name: string;
  defaultOption?: Option;
  onSelect?: (option: Option) => void;
}
