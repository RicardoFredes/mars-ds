import type { TextFieldIconButtonProps } from "./text-field-icon-button.types";

import classNames from "classnames";

import Icon from "@/components/basics/Icon";

const TextFieldIconButton = ({
  className,
  name,
  hasAction,
  ...props
}: TextFieldIconButtonProps) => {
  const cn = classNames(className, { "field__icon--has-action": hasAction });
  return <Icon name={name} className={cn} {...props} />;
};

export default TextFieldIconButton;
