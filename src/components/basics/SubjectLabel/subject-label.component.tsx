import Label, { LabelThemes } from "@/components/basics/Label";
import { SubjectLabelProps } from ".";

const SubjectLabel = (props: SubjectLabelProps) => {
  return <Label theme={LabelThemes.Subject} {...props} />;
};
export default SubjectLabel;
