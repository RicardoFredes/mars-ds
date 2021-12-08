import type { TextFieldProps } from "@/components/forms/TextField/text-field.types";

export enum PasswordFieldType {
  Hidden = "password",
  Visible = "text",
}

export enum PasswordIconName {
  Hidden = "eye",
  Visible = "eye-off",
}

export type PasswordFieldProps = Omit<TextFieldProps, "type" | "rightIconButton">;
