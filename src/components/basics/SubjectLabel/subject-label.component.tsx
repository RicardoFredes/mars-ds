import type { SubjectLabelProps } from "./subject-label.types";

import Label, { LabelThemes } from "@/components/basics/Label";

const SubjectLabel = (props: SubjectLabelProps) => {
  return <Label theme={LabelThemes.Subject} {...props} />;
};
export default SubjectLabel;
