import Text, { TextSizes } from "@/components/typographics/Text";
import classNames from "classnames";
import { ItemElementProps, ItemElementVariants } from ".";

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
