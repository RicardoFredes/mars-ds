import type { ItemButtonProps } from "./item-button.types";

import classNames from "classnames";

import Icon from "@/components/basics/Icon";
import Image from "@/components/basics/Image";
import Label from "@/components/basics/Label";
import Link from "@/components/basics/Link";
import Caption from "@/components/typographies/Caption";
import Heading from "@/components/typographies/Heading";
import Tokens from "@/tokens";

const ItemButton = ({
  caption,
  title,
  subtitle,
  label,
  labelTheme,
  labelVariant,
  iconName,
  iconColor = Tokens.ColorTextPrimary,
  className,
  image,
  as,
  type = "button",
  ...props
}: ItemButtonProps) => {
  const cn = classNames("item-button", className);

  const Component: React.ElementType | string = as || props.href ? Link : "button";

  return (
    <Component className={cn} {...props} type={type}>
      <Icon name={iconName} className="item-button__icon" style={{ color: iconColor }} />
      <ItemButtonImage image={image} title={title} />
      <div className="item-button__texts">
        {caption && <Caption className="item-button__texts-caption">{caption}</Caption>}
        <Heading size="sm" className="item-button__texts-title">
          {title}
        </Heading>
        {subtitle && <Caption className="item-button__texts-caption">{subtitle}</Caption>}
      </div>
      {label && (
        <Label className="item-button__label" theme={labelTheme} variant={labelVariant}>
          {label}
        </Label>
      )}
    </Component>
  );
};

const ItemButtonImage = ({ image, title }: Pick<ItemButtonProps, "image" | "title">) => {
  if (!image) return null;

  if (typeof image === "string") {
    return <Image className="item-button__image" src={image} alt={title} />;
  }

  return <Image className="item-button__image" alt={title} {...image} />;
};

export default ItemButton;
