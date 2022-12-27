export interface ItemCheckboxProps extends Omit<React.HTMLProps<HTMLLabelElement>, "onChange"> {
  label?: string;
  html?: string;
  checkRight?: boolean;
  full?: boolean;
  checked?: boolean;
  iconLeft?: string;
  iconLeftColor?: string;
  iconRight?: string;
  iconRightColor?: string;
  imgLeft?: string;
  imgRight?: string;
  imgLeftAlt?: string;
  imgRightAlt?: string;
  imgWidth?: string;
  imgHeight?: string;
  onChange?: (status: boolean) => void;
}
