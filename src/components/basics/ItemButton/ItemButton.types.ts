import { LabelTheme, LabelVariants } from "../Label/label.types";

export interface ItemButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement | HTMLLinkElement>, "as"> {
  title: string;
  subtitle: string;
  label?: string;
  labelTheme: LabelTheme;
  labelVariant: LabelVariants;
  iconName: string;
  iconColor: string;
  as?: React.ElementType | string;
}
