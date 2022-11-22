export interface ItemCheckboxProps extends Omit<React.HTMLProps<HTMLLabelElement>, "onChange"> {
  label?: string;
  html?: string;
  checkRight?: boolean;
  full?: boolean;
  defaultChecked?: boolean;
  iconLeft?: string;
  iconLeftColor?: string;
  iconRight?: string;
  iconRightColor?: string;
  onChange?: (status: boolean) => void;
}
