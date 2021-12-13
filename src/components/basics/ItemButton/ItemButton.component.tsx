import type { ItemButtonProps } from "./ItemButton.types";
import classNames from "classnames";
import Icon from "../Icon";
import Label from "../Label";
import Subtitle from "../../typographics/Subtitle";
import Caption from "../../typographics/Caption";


const ItemButton = ({
  title,
  subtitle,
  label,
  labelTheme,
  labelVariant,
  iconName,
  iconColor = "#000",
  className,
  ...props
}: ItemButtonProps) => {
  const cn = classNames("item-button", className);
  return (
    <div className={cn} {...props}>
      <div className="item-button__info">
        <Icon name={iconName} style={{ color: iconColor }} />
        <div className="item-button__info-lettering">
          <Subtitle className="item-button__info-lettering__title">{title}</Subtitle>
          <Caption className="item-button__info-lettering__caption" as="span">
            {subtitle}
          </Caption>
        </div>
      </div>

      <Label theme={labelTheme} variant={labelVariant}>
        {label}
      </Label>
    </div>
  );
};

export default ItemButton;
