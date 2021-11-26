import type { MouseEvent } from "react";

import classNames from "classnames";

import { Variants } from "@/types";
import { ButtonProps, ButtonSizes } from "./button.types";

const Button = ({
  as,
  children,
  className,
  label,
  onClick,
  variant = Variants.Primary,
  size = ButtonSizes.Medium,
  ...props
}: ButtonProps) => {
  // TODO: Change link type when we have a proper link (with Next.js support) component
  const ButtonTag = as || props.href ? HTMLLink : HTMLButton;
  const handleClick = (event: MouseEvent<HTMLButtonElement | HTMLLinkElement>) => {
    if (props.disabled) return;
    onClick?.(event);
  };

  const cn = classNames("btn", `btn_${variant}`, `btn_${size}`, className);

  return (
    <ButtonTag className={cn} onClick={handleClick} {...props}>
      {label || children}
    </ButtonTag>
  );
};

// @ts-expect-error Missing type on props
// eslint-disable-next-line jsx-a11y/anchor-has-content
const HTMLLink = (props) => <a {...props} />;
// @ts-expect-error Missing type on props
const HTMLButton = (props) => <button {...props} />;

export default Button;
