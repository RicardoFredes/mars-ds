import { PasswordFieldProps } from "@/components/forms/PasswordField";
export interface PasswordStrongFieldProps extends Omit<PasswordFieldProps, "error" | "info"> {
  defaultValue?: string;
  onValid?: (isValid: boolean) => void;
}
