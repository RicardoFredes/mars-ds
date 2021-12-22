import { ListItemProps } from ".";
import classNames from "classnames";
import Icon, { IconSizes } from "@/components/basics/Icon";
import Text, { TextSizes } from "@/components/typographics/Text";

const ListItem = ({ text, children, bullet = {}, className, ...props }: ListItemProps) => {
  const cn = classNames("list-item", className);
  const icon = { name: "", size: IconSizes.Small, ...bullet };
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
