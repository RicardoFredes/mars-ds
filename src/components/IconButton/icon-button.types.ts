import type { IconProps } from "@/components/Icon/icon.types";
import type { ButtonProps } from "../Button/button.types";

export interface IconButtonProps extends ButtonProps {
  iconName: IconProps["name"];
}
