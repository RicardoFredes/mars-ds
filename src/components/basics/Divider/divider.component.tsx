import classNames from "classnames";

import { DividerProps } from "./divider.types";

const Divider = ({ vertical, className, ...props }: DividerProps) => {
  const cn = classNames("divider", { "divider--vertical": vertical }, className);
  return <hr className={cn} {...props} />;
};

export default Divider;
