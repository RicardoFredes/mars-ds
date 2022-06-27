import type { LinkProps } from "./link.types";

import classNames from "classnames";

import Icon from "../Icon";

const Link = ({
  as: Component = "a",
  variant,
  iconName,
  iconSize,
  className,
  children,
  ...props
}: LinkProps) => {
  const cn = classNames("link", className, `link--${variant || "primary"}`);
  return (
    <Component className={cn} {...props}>
      {iconName && <Icon name={iconName} size={iconSize} />} {children}
    </Component>
  );
};

export default Link;
