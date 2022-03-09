import type { ItemElementProps } from ".";

import classNames from "classnames";

import Text, { TextSizes } from "@/components/typographics/Text";

import { ItemElementVariants } from "./item-element.types";

const ItemElement = ({
  children,
  className,
  variant = ItemElementVariants.Default,
  ...props
}: ItemElementProps) => {
  const cn = classNames("item-element", className, `item-element--variant-${variant}`);
  return (
    <Text className={cn} size={TextSizes.Small} {...props}>
      {children}
    </Text>
  );
};

export default ItemElement;
