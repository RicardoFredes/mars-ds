import { useState, MouseEvent } from "react";
import { ButtonProps, ButtonSizes, ButtonVariants } from "./";

import classNames from "classnames";
import Icon from "@/components/basics/Icon";
import { ButtonTypes } from "./button.types";

const Button = ({
  children,
  className,
  iconName,
  label,
  onClick,
  type = ButtonTypes.Button,
  variant = ButtonVariants.Primary,
  size = ButtonSizes.Medium,
  ...props
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const handleClick = (event: MouseEvent<HTMLButtonElement>) => {
    if (props.disabled) return;
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 250);
    onClick?.(event);
  };

  const cn = classNames(
    "btn",
    `btn--${variant}`,
    `btn--size-${size}`,
    [{ "btn--is-disabled": props.disabled }, { "btn--is-pressed": isPressed }],
    className
  );

  const text = label || children;

  return (
    <button className={cn} onClick={handleClick} type={type} {...props}>
      {iconName && <Icon className="btn__icon" name={iconName} size={size} />}
      {text && <span className="btn__content">{text}</span>}
    </button>
  );
};

export default Button;
