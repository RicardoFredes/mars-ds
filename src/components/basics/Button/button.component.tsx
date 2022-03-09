import type { ButtonProps } from "./button.types";
import type { MouseEvent } from "react";

import classNames from "classnames";
import { useState } from "react";

import Icon from "@/components/basics/Icon";

import { ButtonSizes, ButtonTypes, ButtonVariants } from "./button.types";

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
    <button
      className={cn}
      onClick={handleClick}
      type={type}
      onAnimationEnd={() => setIsPressed(false)}
      {...props}
    >
      {iconName && <Icon className="btn__icon" name={iconName} size={size} />}
      {text && <span className="btn__content">{text}</span>}
    </button>
  );
};

export default Button;
