import { ButtonProps } from "@/components/basics/Button";
import { Variants } from "@/types";

const { Neutral, Text } = Variants;
export const ToggleButtonVariants = { Neutral, Text };

export interface ToggleButtonProps extends ButtonProps {
  iconName: string;
  variant?: typeof ToggleButtonVariants[keyof typeof ToggleButtonVariants];
}
