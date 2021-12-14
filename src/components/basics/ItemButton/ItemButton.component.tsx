import type { ItemButtonProps } from "./ItemButton.types";
import classNames from "classnames";
import Tokens from "@/tokens";
import Caption from "@/components/typographics/Caption";
import Icon from "@/components/basics/Icon";
import Subtitle from "@/components/typographics/Subtitle";
import Label from "@/components/basics/Label";
import Link from "@/components/basics/Link";

const ItemButton = ({
  title,
  subtitle,
  label,
  labelTheme,
  labelVariant,
  iconName,
  iconColor = Tokens.ColorTextPrimary,
  className,
  as,
  type = "button",
  ...props
}: ItemButtonProps) => {
  const cn = classNames("item-button", className);

  const Component: React.ElementType | string = as || props.href ? Link : "button";

  return (
    <Component className={cn} {...props} type={type}>
      <Icon name={iconName} className="item-button__icon" style={{ color: iconColor }} />
      <div className="item-button__texts">
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
