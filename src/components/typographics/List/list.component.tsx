import classNames from "classnames";
import ListItem from "./list-item.component";
import { ListProps } from "./list.types";

const List = ({ className, defaultBullet, list = [], children, ...props }: ListProps) => {
  const cn = classNames("list", className);
  return (
    <ul className={cn} {...props}>
      {list.map(({ bullet, ...item }, key) => (
        <ListItem key={key} bullet={{ ...defaultBullet, ...bullet }} {...item} />
      ))}
      {children}
    </ul>
  );
};

export default List;
