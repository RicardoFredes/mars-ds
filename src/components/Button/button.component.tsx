import { MouseEvent } from "react";
import classNames from "classnames";

import { Variants } from "../../types";
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

const HTMLLink = (props) => <a {...props} />;
const HTMLButton = (props) => <button {...props} />;

export default Button;
