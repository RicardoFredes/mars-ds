import type { SubmitButtonProps } from "./submit-button.types";

import classNames from "classnames";

import Button from "@/components/basics/Button";
import Loader from "@/components/basics/Loader";

const SubmitButton = ({ className, children, submitting, label, ...props }: SubmitButtonProps) => {
  const cn = classNames("submit-button", className);
  return (
    <Button type="submit" className={cn} {...props}>
      {submitting ? <Loader size={props.size} /> : children || label}
    </Button>
  );
};

export default SubmitButton;
