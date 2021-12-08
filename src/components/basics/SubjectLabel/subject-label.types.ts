import type { LabelProps, LabelSubjectVariants } from "@/components/basics/Label/label.types";

export interface SubjectLabelProps extends Omit<LabelProps, "theme" | "variant"> {
  variant: LabelSubjectVariants;
}
