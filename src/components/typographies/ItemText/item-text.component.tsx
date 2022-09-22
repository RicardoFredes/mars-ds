import type { ItemTextProps } from "./item-text.types";

import classNames from "classnames";

import TextBase from "../TextBase/text-base.component";

const ItemText = ({ as, className, children, ...props }: ItemTextProps) => {
  const cn = classNames("item-text", className);
  return (
    <TextBase as={as || "div"} className={cn} {...props}>
      {children}
    </TextBase>
  );
};

export default ItemText;
