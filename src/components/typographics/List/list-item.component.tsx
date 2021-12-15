import { ListItemProps } from "./list.types";
import classNames from "classnames";
import Icon from "@/components/basics/Icon";
import Text from "@/components/typographics/Text";
import { TextSizes } from "@/components/typographics/Text/text.types";
import { Sizes } from "@/types";

const ListItem = ({ text, children, bullet = {}, className, ...props }: ListItemProps) => {
  const cn = classNames("list-item", className);
  const icon = { name: "", size: Sizes.Small, ...bullet };
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
