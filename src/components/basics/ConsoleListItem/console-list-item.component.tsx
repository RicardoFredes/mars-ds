import type { ConsoleListItemProps } from "./console-list-item.types";

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
      "console-list-item--is-connector-disabled": isConnectorDisabled,
      "console-list-item--is-first-item": isFirstItem,
      "console-list-item--is-last-item": isLastItem,
    },
    className
  );

  return (
    <Component data-testid="console-list-item" className={cn} href={href} {...props}>
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

      <div className="console-list-item__content">
        <Text as="h2">{title}</Text>
        {subtitle && <Caption className="console-list-item__subtitle">{subtitle}</Caption>}
      </div>

      <div className="ml-auto">{children}</div>
    </Component>
  );
};

export default ConsoleListItem;
