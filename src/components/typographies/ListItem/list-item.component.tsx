import type { ListItemProps } from "./list-item.types";

import classNames from "classnames";

import Icon, { IconSizes } from "@/components/basics/Icon";
import { TextBaseSizes } from "@/components/typographies/TextBase";

import TextBase from "../TextBase/text-base.component";

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
      <TextBase as="span" size={TextBaseSizes.Small} {...props}>
        {text || children}
      </TextBase>
    </li>
  );
};

export default ListItem;
