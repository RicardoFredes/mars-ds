import type { NavigationBarItemProps } from "./navigation-bar-item.types";

import classNames from "classnames";

import Button, { ButtonSizes } from "@/components/basics/Button";
import Text from "@/components/typographies/Text";

import Icon from "../Icon";
import ToggleDropdown from "../ToggleDropdown";

const NavigationBarItem = ({
  className,
  iconName,
  type = "button",
  list = [],
  text,
  showText = true,
  size = ButtonSizes.Small,
  componentLink = "a",
  ...props
}: NavigationBarItemProps) => {
  const cn = classNames("navigation-bar-item", className);
  const isButton = type === "button";
  const isDropdown = type === "dropdown";
  const shouldShowText = showText && text;
  const Component = props.href ? componentLink : Button;

  return (
    <>
      {isButton && (
        <Component variant="custom" className={cn} size={size} {...props}>
          <Icon className="navigation-bar-item__icon" name={iconName} />
          {shouldShowText && (
            <Text className="navigation-bar-item__icon" size="sm">
              {text}
            </Text>
          )}
        </Component>
      )}

      {isDropdown && (
        <div className={cn}>
          <ToggleDropdown
            list={list}
            componentLink={componentLink}
            toggleButton={{
              iconName: iconName,
              size: "sm",
              title: "Abrir mais opções para o item",
              variant: "text",
            }}
            {...props}
          >
            {text}
          </ToggleDropdown>
        </div>
      )}
    </>
  );
};

export default NavigationBarItem;
