import type { DropdownMenuItemProps } from "./dropdown-menu-item.types";
import classNames from "classnames";
import Icon from "../Icon/icon.component";
import Link from "../Link/link.component";
import Text from "../typographic/Text/text.component";

const DropdownMenuItem = ({ className, children, iconName, ...props }: DropdownMenuItemProps) => {
  const isLink = typeof props.onClick === "undefined" && typeof props.href === "string";
  const Component: any = isLink ? Link : "div";
  const cn = classNames("dropdown-menu__item", className);
  return (
    <Component className={cn} {...props}>
      {iconName && <Icon className="dropdown-menu__icon" name={iconName} />}
      <Text as="span">{children}</Text>
    </Component>
  );
};

export default DropdownMenuItem;
