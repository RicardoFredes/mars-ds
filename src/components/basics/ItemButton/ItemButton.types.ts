import { LabelThemes, LabelVariants } from "@/components/basics/Label/label.types";

export interface ItemButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement | HTMLLinkElement>, "as"> {
  title: string;
  subtitle: string;
  label?: string;
  labelTheme: LabelThemes;
  labelVariant: LabelVariants;
  iconName: string;
  iconColor: string;
  as?: React.ElementType | string;
}
