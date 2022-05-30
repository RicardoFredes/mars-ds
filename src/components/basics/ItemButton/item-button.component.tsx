import type { ItemButtonProps } from "./item-button.types";

import classNames from "classnames";

import Icon from "@/components/basics/Icon";
import Label from "@/components/basics/Label";
import Link from "@/components/basics/Link";
import type { ComponentLink } from "@/components/experimental/Linker";
import Caption from "@/components/typographies/Caption";
import Subtitle from "@/components/typographies/Subtitle";
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

  const Component: ComponentLink = as || props.href ? Link : "button";

  return (
    <Component className={cn} {...props} type={type}>
      <Icon name={iconName} className="item-button__icon" style={{ color: iconColor }} />
      {image && <img className="item-button__image" src={image} alt={title} />}
      <div className="item-button__texts">
        {caption && <Caption className="item-button__texts-caption">{caption}</Caption>}
        <Subtitle className="item-button__texts-title">{title}</Subtitle>
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

export default ItemButton;
