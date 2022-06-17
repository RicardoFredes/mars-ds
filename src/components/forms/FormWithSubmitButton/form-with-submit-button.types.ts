import type { HTMLProps } from "react";

export interface FormWithSubmitButtonProps extends HTMLProps<HTMLFormElement> {
  submitButtonLabel: string;
  submitButtonId?: string;
  submitButtonIconName?: string;
  submitting?: boolean;
}
