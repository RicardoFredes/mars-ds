import type { LabelProps } from "./label.types";

import classNames from "classnames";

import { LabelThemes, LabelVariants } from "./label.types";

const Label = ({
  className,
  theme = LabelThemes.Solid,
  variant = LabelVariants.Primary,
  children,
  ...props
}: LabelProps) => {
  const cn = classNames("label", `label--${theme}`, `label--${theme}-${variant}`, className);
  return (
    <span className={cn} {...props}>
      {children}
    </span>
  );
};
export default Label;
