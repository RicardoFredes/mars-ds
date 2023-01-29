import type { LinkProps } from "./link.types";

import classNames from "classnames";

import LinkBase from "@/components/primitives/LinkBase";
import Icon from "../Icon";

const Link = ({
  as,
  variant,
  iconName,
  iconSize,
  className,
  children,
  href,
  ...props
}: LinkProps) => {
  const cn = classNames("link", className, `link--${variant || "primary"}`);
  const Component = as || href ? LinkBase : "a";
  return (
    <Component className={cn} href={href} {...props}>
      {iconName && <Icon className="mr-md" name={iconName} size={iconSize} />}
      {children}
    </Component>
  );
};

export default Link;
