import classNames from "classnames";
import Icon from "@/components/basics/Icon";
import { TextFieldIconButtonProps } from ".";

const TextFieldIconButton = ({ className, name, ...props }: TextFieldIconButtonProps) => {
  const cn = classNames(className, { "field__icon--has-action": props.onClick });
  return <Icon name={name} className={cn} {...props} />;
};

export default TextFieldIconButton;
