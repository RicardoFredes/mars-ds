import type { MouseEvent } from "react";
import type { ButtonProps } from "./button.types";
import { Variants, Sizes } from "@/types";

import classNames from "classnames";

const Button = ({
  as,
  children,
  className,
  label,
  onClick,
  type="button",
  variant = Variants.Primary,
  size = Sizes.Medium,
  ...props
}: ButtonProps) => {
  // TODO: Change link type when we have a proper link (with Next.js support) component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const ButtonTag: any = as || props.href ? 'a' : 'button';
  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLLinkElement>) => {
    if (props.disabled) return;
    onClick?.(event);
  };

  const cn = classNames("btn", `btn_${variant}`, `btn_${size}`, className);

  return (
    <ButtonTag className={cn} onClick={handleClick}  type={type} {...props}>
      {label || children}
    </ButtonTag>
  );
};

export default Button;
