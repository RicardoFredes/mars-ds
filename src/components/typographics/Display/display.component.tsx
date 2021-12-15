import { DisplayProps, DisplaySizes } from "./display.types";
import classNames from "classnames";

const Display = ({
  as,
  children,
  className,
  level = 1,
  size = DisplaySizes.Medium,
  ...props
}: DisplayProps) => {
  const Component = as || `h${level}`;
  const cn = classNames("display", `display--size-${size}`, className);
  return (
    <Component className={cn} {...props}>
      {children}
    </Component>
  );
};

export default Display;
