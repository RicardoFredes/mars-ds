import type { ItemTextProps } from "./ItemText.types";
import classNames from "classnames";

const ItemText = ({ className, children, ...props }: ItemTextProps) => {
  const cn = classNames("item-text", className);
  const ItemTextTag = "li";

  return (
    <ItemTextTag className={cn} {...props}>
      {children}
    </ItemTextTag>
  );
};

export default ItemText;
