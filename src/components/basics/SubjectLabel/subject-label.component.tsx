import Label from "@/components/basics/Label/label.component";
import { LabelTheme } from "@/components/basics/Label/label.types";
import type { SubjectLabelProps } from "./subject-label.types";

const SubjectLabel = (props: SubjectLabelProps) => {
  return <Label theme={LabelTheme.Subject} {...props} />;
};
export default SubjectLabel;
