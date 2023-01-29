export interface LabelProps extends React.HTMLProps<HTMLSpanElement> {
  theme?: LabelThemes;
  variant?: LabelVariants;
}

export enum LabelThemes {
  Ghost = "ghost",
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

