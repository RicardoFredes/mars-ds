import type { RadioProps } from "./radio.types";
import classNames from "classnames";

const Radio = ({ className, children, ...props }: RadioProps) => {
  const cn = classNames("radio", className);
  return (
    <div className={cn} {...props}>
      {children}
    </div>
  );
};

export default Radio;
