import Label from "../Label/label.component";
import { LabelTheme } from "../Label/label.types";
import type { SubjectLabelProps } from "./subject-label.types";

const SubjectLabel = (props: SubjectLabelProps) => {
  return <Label theme={LabelTheme.Subject} {...props} />;
};
export default SubjectLabel;
