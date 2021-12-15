export interface LabelProps extends React.HTMLProps<HTMLSpanElement> {
  theme: LabelThemes;
  variant: LabelVariants | LabelSubjectVariants;
}

export enum LabelThemes {
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
