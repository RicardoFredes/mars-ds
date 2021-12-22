export type RadioOption = {
  value?: string | number;
  label?: string;
};

export type RadioOptions = RadioOption[];

export interface RadioProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
}

export interface RadioListProps extends Omit<React.HTMLProps<HTMLDivElement>, "onSelect"> {
  options: RadioOptions;
  name: string;
  defaultOption?: RadioOption;
  onSelect?: (option: RadioOption) => void;
}
