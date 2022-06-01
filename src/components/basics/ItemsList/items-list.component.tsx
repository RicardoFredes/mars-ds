import type { ItemsListProps } from "./items-list.types";

import classNames from "classnames";

import Icon from "@/components/basics/Icon";
import Link from "@/components/basics/Link";
import Subtitle from "@/components/typographies/Subtitle";
import Text from "@/components/typographies/Text";

const ItemsList = ({ list, className, componentLink, ...props }: ItemsListProps) => {
  const cn = classNames("items-list", className);
  const ComponentLink = componentLink || Link;

  return (
    <ol className={cn} {...props}>
      {list.map(
        (
          {
            title,
            subtitle,
            link,
            icon,
            iconColor = "var(--color-background-primary)",
            circleColor = "var(--color-text-primary)",
            children,
          },
          index
        ) => {
          const itemCn = classNames("items-list__item", {
            "items-list__item--has-icon": icon,
          });

          const containerCn = classNames("items-list__container", {
            "items-list__container--has-icon": icon,
          });

          const circleCn = classNames("items-list__circle", {
            "items-list__circle--has-icon": icon,
          });

          return (
            <li className={itemCn} key={index}>
              <ComponentLink {...link} className="items-list__link">
                <div className={containerCn}>
                  <div
                    className={circleCn}
                    data-testid="items-list__circle"
                    style={{ backgroundColor: circleColor }}
                  >
                    {icon && (
                      <Icon
                        name={icon}
                        className="items-list__icon"
                        data-testid="items-list__icon"
                        color={iconColor}
                      />
                    )}
                  </div>

                  <div className="items-list__content">
                    <Text className="items-list__title" data-testid="items-list__title">
                      {title}
                    </Text>
                    {subtitle && (
                      <Subtitle className="items-list__subtitle" data-testid="items-list__subtitle">
                        {subtitle}
                      </Subtitle>
                    )}
                  </div>
                </div>
              </ComponentLink>

              {children && (
                <div className="items-list__children" data-testid="items-list__children">
                  {children}
                </div>
              )}
            </li>
          );
        }
      )}
    </ol>
  );
};

export default ItemsList;
