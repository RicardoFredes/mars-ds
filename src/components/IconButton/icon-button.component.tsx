import type { IconButtonProps } from "./icon-button.types";
import classNames from "classnames";
import Button from "../Button/button.component";
import Icon from "../Icon/icon.component";
import { Sizes } from "@/types";

const IconButton = ({ iconName, className, children, label, ...props }: IconButtonProps) => {
  if (!props.size || props.size === Sizes.Large) props.size = Sizes.Medium;
  const cn = classNames("icon-btn", className);
  return (
    <Button className={cn} {...props}>
      <Icon className="icon-btn__icon" name={iconName} size={props.size} />
      <span className="icon-btn__content">{label || children}</span>
    </Button>
  );
};

export default IconButton;
