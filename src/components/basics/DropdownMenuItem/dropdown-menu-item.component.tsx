import type { DropdownMenuItemProps } from "./dropdown-menu-item.types";

import classNames from "classnames";

import Icon from "@/components/basics/Icon/icon.component";
import Link from "@/components/basics/Link";
import type { ComponentLink } from "@/components/experimental/Linker";
import Text from "@/components/typographies/Text/text.component";

import { ButtonTypes } from "../Button";
import { DropdownMenuItemSizes } from "./dropdown-menu-item.types";

const DropdownMenuItem = ({
  className,
  children,
  leftIconName,
  rightIconName,
  size = DropdownMenuItemSizes.Medium,
  label,
  ...props
}: DropdownMenuItemProps) => {
  const cn = classNames("dropdown-menu-item", className);
  const Component: ComponentLink = props.href ? Link : "button";
  return (
    <Component type={props.href ? undefined : ButtonTypes.Button} className={cn} {...props}>
      {leftIconName && (
        <Icon className="dropdown-menu-item__icon-left" name={leftIconName} size={size} />
      )}
      <Text className="dropdown-menu-item__text" as="span" size={size}>
        {label || children}
      </Text>
      {rightIconName && (
        <Icon className="dropdown-menu-item__icon-right" name={rightIconName} size={size} />
      )}
    </Component>
  );
};

export default DropdownMenuItem;
