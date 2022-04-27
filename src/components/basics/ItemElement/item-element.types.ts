import type { TextProps } from "@/components/typographies/Text";

export const ItemElementVariants = {
  Default: "default",
  Inline: "inline",
};

export interface ItemElementProps extends TextProps {
  variant?: typeof ItemElementVariants[keyof typeof ItemElementVariants];
}
