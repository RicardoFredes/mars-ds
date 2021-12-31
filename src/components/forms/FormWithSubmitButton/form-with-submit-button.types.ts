import { HTMLProps } from "react";

export interface FormWithSubmitButtonProps extends HTMLProps<HTMLFormElement> {
  submitButtonLabel: string;
  submitting?: boolean;
}
