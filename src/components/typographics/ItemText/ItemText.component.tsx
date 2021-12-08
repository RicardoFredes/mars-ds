import type { ItemTextProps } from "./ItemText.types";
import classNames from "classnames";

const ItemText = ({ className, children, ...props }: ItemTextProps) => {
  const cn = classNames("ItemText", className);
  return (
    <div className={cn} {...props}>
      {children}
    </div>
  );
};

export default ItemText;
