import { ToggleButtonProps } from ".";
import Button, { ButtonVariants } from "@/components/basics/Button";
import classNames from "classnames";

const ToggleButton = ({ className, ...props }: ToggleButtonProps) => {
  const cn = classNames("toggle-btn", className);
  return <Button variant={ButtonVariants.Neutral} className={cn} {...props} />;
};

export default ToggleButton;
