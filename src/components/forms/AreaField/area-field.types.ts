import type { ReactNode } from "react";

export interface AreaFieldProps extends React.HTMLProps<HTMLTextAreaElement> {
  error?: string | boolean;
  success?: boolean;
  info?: string | ReactNode;
  dataKey?: string;
  value?: string;
  showCounter?: boolean;
}
