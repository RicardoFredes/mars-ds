import type { ItemTextProps } from "./item-text.types";

import classNames from "classnames";

import TextBase from "../../primitives/TextBase/text-base.component";

const ItemText = ({ as = "div", className, children, ...props }: ItemTextProps) => {
  const cn = classNames("item-text", className);
  return (
    <TextBase as={as} className={cn} {...props}>
      {children}
    </TextBase>
  );
};

export default ItemText;
