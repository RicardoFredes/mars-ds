import type { LabelProps, LabelSubjectVariants } from "../Label/label.types";

export interface SubjectLabelProps extends Omit<LabelProps, "theme" | "variant"> {
  variant: LabelSubjectVariants;
}
