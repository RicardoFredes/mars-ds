import { useState, MouseEvent } from "react";
import { ButtonProps, ButtonSizesEnum, ButtonVariantsEnum } from "./button.types";

import classNames from "classnames";
import Link from "@/components/basics/Link/link.component";

const Button = ({
  as,
  children,
  className,
  label,
  onClick,
  type = "button",
  variant = ButtonVariantsEnum.Primary,
  size = ButtonSizesEnum.Medium,
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

  return (
    <Component className={cn} onClick={handleClick} type={type} {...props}>
      {label || children}
    </Component>
  );
};

export default Button;
