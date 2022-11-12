import type { ToggleButtonProps } from "./toggle-button.types";

import classNames from "classnames";

import Button, { ButtonVariants } from "@/components/basics/Button";

import { ToggleButtonVariants } from "./toggle-button.types";

const ToggleButton = ({
  className,
  variant = ToggleButtonVariants.Neutral,
  children,
  ...props
}: ToggleButtonProps) => {
  const cn = classNames("toggle-btn", className, `toggle-btn--variant-${variant}`);
  return (
    <Button variant={ButtonVariants.Neutral} className={cn} {...props}>
      {children}
    </Button>
  );
};

export default ToggleButton;
