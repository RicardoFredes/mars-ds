import { CardProps } from "@/components/basics/Card/card.types";
export interface NotificationProps extends CardProps {
  variant: typeof NotificationVariants[keyof typeof NotificationVariants];
  onClose?: () => void;
}

export const NotificationVariants = {
  Info: "info",
  Success: "success",
  Warning: "warning",
  Error: "error",
  Default: "default",
};
