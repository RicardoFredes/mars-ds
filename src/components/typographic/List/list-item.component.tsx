import { ListItemProps } from "./list.types";
import classNames from "classnames";
import Icon from "@/components/basics/Icon/icon.component";
import Text from "@/components/typographic/Text/text.component";
import { TextSizes } from "@/components/typographic/Text/text.types";
import { SizesEnum } from "@/types";

const ListItem = ({ text, children, bullet = {}, className, ...props }: ListItemProps) => {
  const cn = classNames("list-item", className);
  const icon = { name: "", size: SizesEnum.Small, ...bullet };
  return (
    <li className={cn} {...props}>
      <Icon {...icon} className={classNames(bullet.className, "list-item__bullet")} />
      <Text as="span" size={TextSizes.Small} className="list-item__content">
        {text || children}
      </Text>
    </li>
  );
};

export default ListItem;
