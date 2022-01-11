import { PasswordFieldProps } from "@/components/forms/PasswordField";
export interface PasswordStrongFieldProps extends PasswordFieldProps {
  value?: string;
  onValid?: (isValid: boolean) => void;
}
