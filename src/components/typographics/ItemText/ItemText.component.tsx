import { ItemTextProps } from ".";
import classNames from "classnames";

const ItemText = ({ as, className, children, ...props }: ItemTextProps) => {
  const cn = classNames("item-text", className);
  const ItemTextTag = as || "div";

  return (
    <ItemTextTag className={cn} {...props}>
      {children}
    </ItemTextTag>
  );
};

export default ItemText;
