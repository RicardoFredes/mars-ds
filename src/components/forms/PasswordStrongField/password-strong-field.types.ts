import type { PasswordFieldProps } from "@/components/forms/PasswordField";

export interface PasswordStrongFieldProps extends Omit<PasswordFieldProps, "info" | "label"> {
  defaultValue?: string;
  onValid?: (isValid: boolean) => void;
  label?: string;
}
