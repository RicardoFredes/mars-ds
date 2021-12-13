import type { ItemButtonProps } from "./ItemButton.types";
import classNames from "classnames";
import Icon from "../Icon";
import Label from "../Label";
import Subtitle from "../../typographics/Subtitle";
import Caption from "../../typographics/Caption";
import Tokens from "@/tokens";
import Link from "@/components/basics/Link/link.component";

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

  // TODO: Change link type when we have a proper link (with Next.js support) component
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Component: any = as || props.href ? Link : "button";

  return (
    <Component className={cn} {...props} type={type}>
      <div className="item-button__main">
        <Icon name={iconName} style={{ color: iconColor }} />
        <div className="item-button__main-texts">
          <Subtitle className="item-button__main-texts__title">{title}</Subtitle>
          <Caption className="item-button__main-texts__caption" as="span">
            {subtitle}
          </Caption>
        </div>
      </div>

      {label && (
        <Label theme={labelTheme} variant={labelVariant}>
          {label}
        </Label>
      )}
    </Component>
  );
};

export default ItemButton;
