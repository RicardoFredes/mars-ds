import type { ContainerProps } from "./container.types";

import classNames from "classnames";

const Container = ({ children, className, container = "lg", align, ...props }: ContainerProps) => {
  const cn = classNames(
    "container",
    {
      [`container--${container}`]: container,
      [`container--${align}`]: align,
    },
    className
  );
  return (
    <div className={cn} {...props}>
      {children}
    </div>
  );
};

export default Container;
