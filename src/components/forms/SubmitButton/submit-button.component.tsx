import Button from "@/components/basics/Button";
import Loader from "@/components/basics/Loader";
import classNames from "classnames";
import { SubmitButtonProps } from "./submit-button.types";

const SubmitButton = ({ className, children, submitting, label, ...props }: SubmitButtonProps) => {
  const cn = classNames("submit-button", className);
  return (
    <Button type="submit" className={cn} {...props}>
      {submitting ? <Loader size={props.size} /> : children || label}
    </Button>
  );
};

export default SubmitButton;
