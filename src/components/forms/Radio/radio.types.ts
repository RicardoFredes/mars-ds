import { Options } from "@/types/options";

export interface RadioProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
}

export interface RadioListProps extends React.HTMLProps<HTMLDivElement> {
  options: Options[];
  name: string;
}
