import type { ImageProps } from "@/components/basics/Image/image.types";
import type { LabelThemes, LabelVariants } from "@/components/basics/Label";

export interface ItemButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement | HTMLLinkElement>, "as"> {
  caption?: string;
  title?: string;
  subtitle?: string;
  label?: string;
  labelTheme?: LabelThemes;
  labelVariant?: LabelVariants;
  iconName: string;
  iconColor?: string;
  as?: React.ElementType | string;
  image?: string | ImageProps;
}
