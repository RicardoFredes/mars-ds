/* eslint-disable no-useless-escape */
import { CreditCardProps } from "./credit-card.types";
import classNames from "classnames";
import Icon from "@/components/basics/Icon";
import Text from "@/components/typographics/Text";
import ItemText from "@/components/typographics/ItemText";

const CreditCard = ({
  className,
  cardName,
  cardNumbers,
  variant = "primary",
  iconName = "mastercard",
  ...props
}: CreditCardProps) => {
  const cn = classNames("credit-card", className, `credit-card--${variant}`);

  const parsedNumbers = cardNumbers.trim().replace(/(\d{4} )/g, "•••• ");
  return (
    <div className={cn} {...props}>
      <div className="credit-card__header">
        <Icon name="me-salva-mini" size="lg" />

        {iconName && <Icon name={iconName} size="lg" />}
      </div>
      <div className="credit-card__footer">
        <ItemText className="credit-card__numbers">{parsedNumbers}</ItemText>
        <Text className="credit-card__name">{cardName}</Text>
      </div>
    </div>
  );
};

export default CreditCard;
