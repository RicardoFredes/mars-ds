import Label from "@/components/basics/Label";
import { LabelThemes } from "@/components/basics/Label/label.types";
import type { SubjectLabelProps } from "./subject-label.types";

const SubjectLabel = (props: SubjectLabelProps) => {
  return <Label theme={LabelThemes.Subject} {...props} />;
};
export default SubjectLabel;
