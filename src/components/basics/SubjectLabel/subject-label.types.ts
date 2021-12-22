import { LabelProps, LabelSubjectVariants } from "@/components/basics/Label";

export interface SubjectLabelProps extends Omit<LabelProps, "theme" | "variant"> {
  variant: LabelSubjectVariants;
}
