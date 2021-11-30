import type { ToggleButtonProps } from "./toggle-button.types";

import Icon from "../Icon/icon.component";
import Button from "../Button/button.component";
import { Sizes, VariantsEnum } from "@/types";
import classNames from "classnames";

const ToggleButton = ({ iconName, className, ...props }: ToggleButtonProps) => {
  if (!props.size || props.size === Sizes.Large) props.size = Sizes.Medium;
  const cn = classNames("toggle-btn", className);
  return (
    <Button variant={VariantsEnum.Neutral} className={cn} {...props}>
      <Icon name={iconName} size={props.size} />
    </Button>
  );
};

export default ToggleButton;
