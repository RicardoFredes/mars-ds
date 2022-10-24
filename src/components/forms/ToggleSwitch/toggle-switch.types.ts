export interface ToggleSwitchProps extends Omit<React.HTMLProps<HTMLDivElement>, "onChange"> {
  defaultChecked?: boolean;
  disabled?: boolean;
  label?: string;
  name?: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}
