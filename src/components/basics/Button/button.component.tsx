import type { LinkProps } from "../Link";
import type { ButtonProps } from "./button.types";
import type { MouseEvent } from "react";

import classNames from "classnames";
import { useState } from "react";

import Icon from "@/components/basics/Icon";

import Link from "../Link";
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
  as,
  isRtl = false,
  ...props
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);
  const Component = as || props.href ? Link : "button";

  const handleClick = (event: MouseEvent<HTMLButtonElement & LinkProps>) => {
    if (props.disabled) return;
    setIsPressed(true);
    onClick?.(event);
  };

  const cn = classNames(
    "btn",
    `btn--${variant}`,
    `btn--size-${size}`,
    { "btn--is-disabled": props.disabled, "btn--is-pressed": isPressed, "btn--is-rtl": isRtl },
    className
  );

  const text = label || children;

  return (
    <Component
      className={cn}
      onClick={handleClick}
      type={type}
      onAnimationEnd={() => setIsPressed(false)}
      {...props}
    >
      {iconName && <Icon className="btn__icon" name={iconName} size={size} />}
      {text && <span className="btn__content">{text}</span>}
    </Component>
  );
};

export default Button;
