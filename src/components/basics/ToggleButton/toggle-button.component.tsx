import type { ToggleButtonProps } from "./toggle-button.types";

import Button from "@/components/basics/Button";
import classNames from "classnames";
import { ButtonVariants } from "../Button/button.types";

const ToggleButton = ({ className, ...props }: ToggleButtonProps) => {
  const cn = classNames("toggle-btn", className);
  return <Button variant={ButtonVariants.Neutral} className={cn} {...props} />;
};

export default ToggleButton;
