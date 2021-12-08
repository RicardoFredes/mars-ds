import type { ToggleButtonProps } from "./toggle-button.types";

import Icon from "@/components/basics/Icon/icon.component";
import Button from "@/components/basics/Button/button.component";
import { SizesEnum, VariantsEnum } from "@/types";
import classNames from "classnames";

const ToggleButton = ({ iconName, className, ...props }: ToggleButtonProps) => {
  if (!props.size || props.size === SizesEnum.Large) props.size = SizesEnum.Medium;
  const cn = classNames("toggle-btn", className);
  return (
    <Button variant={VariantsEnum.Neutral} className={cn} {...props}>
      <Icon name={iconName} size={props.size} />
    </Button>
  );
};

export default ToggleButton;
