import type { DropdownMenuItemProps } from "./dropdown-menu-item.types";
import classNames from "classnames";
import Icon from "@/components/basics/Icon/icon.component";
import Link from "@/components/basics/Link/link.component";
import Text from "@/components/typographics/Text/text.component";

const DropdownMenuItem = ({
  className,
  children,
  leftIconName,
  rightIconName,
  ...props
}: DropdownMenuItemProps) => {
  const isLink = typeof props.onClick === "undefined" && typeof props.href === "string";
  const Component: any = isLink ? Link : "div";
  const cn = classNames("dropdown-menu__item", className);
  return (
    <Component className={cn} {...props}>
      {leftIconName && <Icon className="dropdown-menu__icon-left" name={leftIconName} />}
      <Text className="dropdown-menu__text" as="span">
        {children}
      </Text>
      {rightIconName && <Icon className="dropdown-menu__icon-right" name={rightIconName} />}
    </Component>
  );
};

export default DropdownMenuItem;
