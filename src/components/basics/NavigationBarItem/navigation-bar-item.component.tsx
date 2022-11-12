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
  size = ButtonSizes.Small,
  ...props
}: NavigationBarItemProps) => {
  const cn = classNames("navigation-bar-item", className);
  const isButton = type === "button";
  const isDropdown = type === "dropdown";

  return (
    <>
      {isButton && (
        <Button variant="custom" className={cn} size={size} {...props}>
          <Icon className="navigation-bar-item__icon" name={iconName} />
          {text && (
            <Text className="navigation-bar-item__icon" size="sm">
              {text}
            </Text>
          )}
        </Button>
      )}

      {isDropdown && (
        <div className={cn}>
          <ToggleDropdown
            isAbove={true}
            list={list}
            toggleButton={{
              iconName: iconName,
              size: "sm",
              title: "Abrir mais opções para o item",
              variant: "text",
            }}
          >
            {text}
          </ToggleDropdown>
        </div>
      )}
    </>
  );
};

export default NavigationBarItem;
