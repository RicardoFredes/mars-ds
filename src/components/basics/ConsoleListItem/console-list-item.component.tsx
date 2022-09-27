import type { ConsoleListItemLineProps, ConsoleListItemProps } from "./console-list-item.types";

import classNames from "classnames";

import Icon from "@/components/basics/Icon";
import Caption from "@/components/typographies/Caption";
import Text from "@/components/typographies/Text";

const ConsoleListItem = ({
  title,
  subtitle,
  iconName,
  isActive,
  isDisabled,
  isConnectorDisabled,
  isAnswered,
  isFirstItem,
  isLastItem,
  href,
  as,
  LinkComponent,
  className,
  children,
  ...props
}: ConsoleListItemProps) => {
  const Component = as || LinkComponent || "a";

  const cn = classNames(
    "console-list-item",
    {
      "console-list-item--is-answered": isAnswered && !isActive,
      "console-list-item--is-active": !isAnswered && isActive,
      "console-list-item--is-answered-and-active": isAnswered && isActive,
      "console-list-item--is-disabled": isDisabled,
    },
    className
  );

  return (
    <Component data-testid="console-list-item" className={cn} href={href} {...props}>
      <div className="console-list-item__indicators">
        <ConsoleListItemLine
          top
          isFirstItem={isFirstItem}
          isLastItem={isLastItem}
          isConnectorDisabled={isConnectorDisabled}
        />
        <div className="console-list-item__icon-container">
          {iconName && (
            <Icon
              name={iconName}
              style={{
                width: "20px",
                height: "20px",
              }}
            />
          )}
        </div>
        <ConsoleListItemLine
          bottom
          isFirstItem={isFirstItem}
          isLastItem={isLastItem}
          isConnectorDisabled={isConnectorDisabled}
        />
      </div>

      <div className="console-list-item__content">
        <Text as="h2">{title}</Text>
        {subtitle && <Caption className="console-list-item__subtitle">{subtitle}</Caption>}
      </div>

      <div className="console-list-item__content__control">{children}</div>
    </Component>
  );
};

const ConsoleListItemLine = ({
  isFirstItem,
  isLastItem,
  isConnectorDisabled,
  top,
  bottom,
  ...props
}: ConsoleListItemLineProps) => {
  const cn = classNames("console-list-item-line", {
    "console-list-item-line--is-connector-disabled": isConnectorDisabled,
    "console-list-item-line--is-first-item": isFirstItem,
    "console-list-item-line--is-last-item": isLastItem,
    "console-list-item-line--top": top,
    "console-list-item-line--bottom": bottom,
  });

  const cnInner = classNames("console-list-item-line__inner", {
    "console-list-item-line__inner--top": top,
    "console-list-item-line__inner--bottom": bottom,
  });

  return (
    <div data-testid="console-list-item-line" className={cn} {...props}>
      <div className={cnInner} />
    </div>
  );
};

export default ConsoleListItem;
