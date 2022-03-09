import type { DividerProps } from "./divider.types";

import classNames from "classnames";

const Divider = ({ vertical, className, ...props }: DividerProps) => {
  const cn = classNames("divider", { "divider--vertical": vertical }, className);
  return <hr className={cn} {...props} />;
};

export default Divider;
