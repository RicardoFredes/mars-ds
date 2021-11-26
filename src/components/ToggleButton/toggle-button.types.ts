import type { Sizes } from "@/types";

export interface ToggleButtonProps extends Omit<React.HTMLProps<HTMLButtonElement>, "as" | "size" | "label"> {
  iconName: string
  size?: Sizes
}
