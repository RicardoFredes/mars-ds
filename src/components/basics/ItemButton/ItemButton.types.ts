import { LabelTheme, LabelVariants } from "../Label/label.types";

export interface ItemButtonProps extends React.HTMLProps<HTMLDivElement> {
  title: string;
  subtitle: string;
  label?: string;
  labelTheme: LabelTheme;
  labelVariant: LabelVariants;
  iconName: string;
  iconColor: string;
}
