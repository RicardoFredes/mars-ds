import type { MouseEvent } from "react";
import type { LinkProps } from "../Link";
import type { ButtonProps } from "./button.types";

import classNames from "classnames";
import { useMemo, useState } from "react";

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
  color,
  hoverColor = color,
  backgroundColor,
  hoverBackgroundColor = backgroundColor,
  borderColor = "none",
  hoverBorderColor = borderColor,
  borderWidth = "none",
  style,
  isRounded = true,
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
    {
      "btn--is-disabled": props.disabled,
      "btn--is-pressed": isPressed,
      "btn--is-rtl": isRtl,
      "btn--is-rounded": isRounded,
    },
    className
  );

  const text = label || children;

  const styles = useMemo(() => {
    if (variant !== "custom") return style;
    return {
      ...style,
      "--button-color": color,
      "--button-hover-color": hoverColor,
      "--button-background": backgroundColor,
      "--button-hover-background": hoverBackgroundColor,
      "--button-border-color": borderColor,
      "--button-hover-border-color": hoverBorderColor,
      "--button-border-width": borderWidth,
    };
  }, [
    backgroundColor,
    borderColor,
    borderWidth,
    color,
    hoverBackgroundColor,
    hoverBorderColor,
    hoverColor,
    style,
    variant,
  ]);

  return (
    <Component
      className={cn}
      onClick={handleClick}
      type={type}
      onAnimationEnd={() => setIsPressed(false)}
      style={styles}
      {...props}
    >
      {iconName && <Icon className="btn__icon" name={iconName} size={size} />}
      {text && <span className="btn__content">{text}</span>}
    </Component>
  );
};

export default Button;
