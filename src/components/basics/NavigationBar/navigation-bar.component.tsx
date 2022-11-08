import type { NavigationBarProps } from "./navigation-bar.types";

import classNames from "classnames";

import Text from "@/components/typographies/Text";

import Button from "../Button";
import Icon from "../Icon";

const NavigationBar = ({ items, showText = true, className, ...props }: NavigationBarProps) => {
  const cn = classNames("navigation-bar", className);

  return (
    <div className={cn} {...props}>
      {items.map(({ iconName, text, ...props }, index) => (
        <Button
          key={`navigation-bar-item-${index}`}
          variant="custom"
          className="navigation-bar__item"
          {...props}
        >
          <Icon className="navigation-bar__item__icon" name={iconName} />
          {text && showText && (
            <Text className="navigation-bar__item__icon" size="sm">
              {text}
            </Text>
          )}
        </Button>
      ))}
    </div>
  );
};

export default NavigationBar;
