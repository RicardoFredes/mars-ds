import type { ListItemProps } from "./list-item.types";

import classNames from "classnames";

import Icon, { IconSizes } from "@/components/basics/Icon";
import Text, { TextSizes } from "@/components/typographies/Text";

const ListItem = ({
  text,
  children,
  bulletIconName,
  bulletColor,
  className,
  ...props
}: ListItemProps) => {
  const cn = classNames("list-item", className);
  return (
    <li className={cn} {...props}>
      {bulletIconName && (
        <Icon
          name={bulletIconName}
          className="list-item__bullet"
          size={IconSizes.Small}
          color={bulletColor}
        />
      )}
      <Text as="span" size={TextSizes.Small} className="list-item__content">
        {text || children}
      </Text>
    </li>
  );
};

export default ListItem;
