import type { CreditCardProps } from "./credit-card.types";

import classNames from "classnames";

import Icon, { IconSizes } from "@/components/basics/Icon";
import ItemText from "@/components/typographies/ItemText";
import Text from "@/components/typographies/Text";

import { CreditCardVariants } from "./credit-card.types";

const CreditCard = ({
  className,
  cardHolder,
  cardNumber,
  variant = CreditCardVariants.Primary,
  iconName,
  ...props
}: CreditCardProps) => {
  const cn = classNames("credit-card", className, `credit-card--${variant}`);
  const parsedNumbers = cardNumber?.trim().replace(/(\d{4} )/g, "•••• &nbsp;");
  return (
    <div className={cn} {...props}>
      <div className="credit-card__header">
        <Icon name="me-salva-mini" size={IconSizes.Medium} />
        {iconName && <Icon name={iconName} size={IconSizes.XLarge} />}
      </div>
      <div className="credit-card__footer">
        <ItemText
          className="credit-card__numbers"
          dangerouslySetInnerHTML={{ __html: parsedNumbers || "" }}
        />
        <Text className="credit-card__name">{cardHolder}</Text>
      </div>
    </div>
  );
};

export default CreditCard;
