import { useState, MouseEvent } from "react";
import { ButtonProps, ButtonSizes, ButtonVariants } from "./";

import classNames from "classnames";
import Icon from "@/components/basics/Icon";
import Link from "@/components/basics/Link/link.component";

const Button = ({
  as,
  children,
  className,
  iconName,
  label,
  onClick,
  type = "button",
  variant = ButtonVariants.Primary,
  size = ButtonSizes.Medium,
  ...props
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  const Component: React.ElementType | string = as || props.href ? Link : "button";
  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLLinkElement>) => {
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
    <Component className={cn} onClick={handleClick} type={type} {...props}>
      {iconName && <Icon className="btn__icon" name={iconName} size={size} />}
      {text && <span className="btn__content">{text}</span>}
    </Component>
  );
};

export default Button;
