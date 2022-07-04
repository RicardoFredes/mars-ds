import type { ConsoleListItemProps } from "./console-list-item.types";

import classNames from "classnames";

import Icon from "@/components/basics/Icon";
import Caption from "@/components/typographies/Caption";
import Text from "@/components/typographies/Text";

const ConsoleListItem = ({
  title,
  subtitle,
  iconName: icon,
  isActive,
  isDisabled,
  isConnectorDisabled,
  isAnswered,
  href,
  LinkComponent,
  className,
  ...props
}: ConsoleListItemProps) => {
  const Component = LinkComponent ? LinkComponent : href ? "a" : "div";

  const cn = classNames(
    "console-list-item",
    {
      "console-list-item--is-active": isActive,
      "console-list-item--is-disabled": isDisabled,
      "console-list-item--is-connector-disabled": isConnectorDisabled,
      "console-list-item--is-answered": isAnswered,
    },
    className
  );

  return (
    <Component data-testid="console-list-item" className={cn} href={href} {...props}>
      <div className="console-list-item__icon-container">
        <Icon name={icon} />
      </div>

      <div className="console-list-item__content">
        <Text as="h2">{title}</Text>
        {subtitle && <Caption className="console-list-item__subtitle">{subtitle}</Caption>}
      </div>
    </Component>
  );
};

export default ConsoleListItem;
