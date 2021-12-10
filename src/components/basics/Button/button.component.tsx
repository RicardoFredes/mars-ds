import { useState, MouseEvent } from "react";
import type { ButtonProps } from "./button.types";
import { SizesEnum, VariantsEnum } from "@/types";

import classNames from "classnames";
import Link from "@/components/basics/Link/link.component";

const Button = ({
  as,
  children,
  className,
  label,
  onClick,
  type = "button",
  variant = VariantsEnum.Primary,
  size = SizesEnum.Medium,
  ...props
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  // TODO: Change link type when we have a proper link (with Next.js support) component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: any = as || props.href ? Link : "button";
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
