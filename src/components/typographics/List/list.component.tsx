import classNames from "classnames";
import ListItem from "@/components/typographics/ListItem";
import { ListProps } from "./";

const List = ({
  className,
  defaultBulletColor,
  defaultBulletIconName,
  list = [],
  children,
  ...props
}: ListProps) => {
  const cn = classNames("list", className);
  return (
    <ul className={cn} {...props}>
      {list.map(({ bulletColor, bulletIconName, ...item }, key) => (
        <ListItem
          key={key}
          bulletIconName={bulletIconName || defaultBulletIconName}
          bulletColor={bulletColor || defaultBulletColor}
          {...item}
        />
      ))}
      {children}
    </ul>
  );
};

export default List;
