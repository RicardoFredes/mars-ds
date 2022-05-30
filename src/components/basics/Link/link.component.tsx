import type { LinkProps } from "./link.types";

import classNames from "classnames";

const Link = ({ as: Component = "a", className, children, ...props }: LinkProps) => {
  const cn = classNames("link", className);
  return (
    <Component className={cn} {...props}>
      {children}
    </Component>
  );
};

export default Link;
