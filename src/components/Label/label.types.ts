import type { ReactNode } from "react";

export interface LabelProps extends React.HTMLProps<HTMLSpanElement> {
  theme: LabelTheme;
  variant: LabelVariants | LabelSubjectVariants;
}

export enum LabelTheme {
  Ghost = "ghost",
  Subject = "subject",
  Solid = "solid",
}

export enum LabelVariants {
  Default = "default",
  Primary = "primary",
  Info = "info",
  Success = "success",
  Warning = "warning",
  Error = "error",
}

export enum LabelSubjectVariants {
  Redacao = "redacao",
  Medicina = "medicina",
  Linguagens = "linguagens",
  Humanas = "humanas",
  Natureza = "natureza",
  Matematica = "matematica",
}
