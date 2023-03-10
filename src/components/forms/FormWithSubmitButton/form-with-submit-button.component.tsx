import type { FormWithSubmitButtonProps } from "./form-with-submit-button.types";
import type { FormEvent } from "react";

import classNames from "classnames";

import SubmitButton from "@/components/forms/SubmitButton";

const FormWithSubmitButton = ({
  children,
  className,
  onSubmit,
  disabled,
  submitButtonLabel,
  submitButtonId,
  submitButtonIconName,
  submitting,
  ...props
}: FormWithSubmitButtonProps) => {
  const cn = classNames("form-with-submit-button", className);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit?.(event);
  };
  return (
    <form className={cn} onSubmit={handleSubmit} {...props}>
      <div className="form-with-submit-button__container">{children}</div>
      <SubmitButton
        id={submitButtonId}
        iconName={submitButtonIconName}
        className="form-with-submit-button__submit-button"
        disabled={disabled}
        submitting={submitting}
      >
        {submitButtonLabel}
      </SubmitButton>
    </form>
  );
};

export default FormWithSubmitButton;
