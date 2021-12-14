import type { IconButtonProps } from "./icon-button.types";

import Button from "@/components/basics/Button";
import Icon from "@/components/basics/Icon";
import { SizesEnum } from "@/types";
import classNames from "classnames";

const IconButton = ({ iconName, className, children, label, ...props }: IconButtonProps) => {
  // @ts-expect-error FIXME: Figure out how to type this
  if (!props.size || props.size === SizesEnum.Large) props.size = SizesEnum.Medium;
  const cn = classNames("icon-btn", className);
  return (
    <Button className={cn} {...props}>
      <Icon className="icon-btn__icon" name={iconName} size={props.size} />
      {(label || children) && <span className="icon-btn__content">{label || children}</span>}
    </Button>
  );
};

export default IconButton;
