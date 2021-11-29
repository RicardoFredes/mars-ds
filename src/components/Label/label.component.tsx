import classNames from "classnames";
import { LabelProps, LabelTheme, LabelVariants } from "./label.types";

const Label = ({
  className,
  theme = LabelTheme.Solid,
  variant = LabelVariants.Primary,
  children,
  ...props
}: LabelProps) => {
  const cn = classNames("label", `label--${theme}`, `label--${theme}-${variant}`);
  return (
    <span className={cn} {...props}>
      {children}
    </span>
  );
};
export default Label;
