import type { IconProps } from "../../Icon/icon.types";
import classNames from "classnames";
import Icon from "../../Icon/icon.component";

const TextFieldIconButton = ({ className, name, ...props }: IconProps) => {
  const cn = classNames(className, { "field__icon--has-action": props.onClick });
  return <Icon name={name} className={cn} {...props} />;
};

export default TextFieldIconButton;