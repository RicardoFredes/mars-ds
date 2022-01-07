import { ToggleButtonProps, ToggleButtonVariants } from ".";
import Button, { ButtonVariants } from "@/components/basics/Button";
import classNames from "classnames";

const ToggleButton = ({
  className,
  variant = ToggleButtonVariants.Neutral,
  ...props
}: ToggleButtonProps) => {
  const cn = classNames("toggle-btn", className, `toggle-btn--variant-${variant}`);
  return <Button variant={ButtonVariants.Neutral} className={cn} {...props} />;
};

export default ToggleButton;
