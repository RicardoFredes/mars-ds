import { MouseEvent, useState } from "react";
import type { ButtonProps } from "./button.types";
import { Variants, Sizes } from "@/types";

import classNames from "classnames";

const Button = ({
  as,
  children,
  className,
  label,
  onClick,
  type = "button",
  variant = Variants.Primary,
  size = Sizes.Medium,
  ...props
}: ButtonProps) => {
  const [isPressed, setIsPressed] = useState(false);

  // TODO: Change link type when we have a proper link (with Next.js support) component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ButtonTag: any = as || props.href ? "a" : "button";
  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLLinkElement>) => {
    if (props.disabled) return;
    setIsPressed(true);
    setTimeout(() => setIsPressed(false), 250);
    onClick?.(event);
  };

  const cn = classNames(
    "btn",
    `btn--variant-${variant}`,
    `btn--size-${size}`,
    [{ "btn--is-disabled": props.disabled }, { "btn--is-pressed": isPressed }],
    className
  );

  return (
    <ButtonTag className={cn} onClick={handleClick} type={type} {...props}>
      {label || children}
    </ButtonTag>
  );
};

export default Button;
