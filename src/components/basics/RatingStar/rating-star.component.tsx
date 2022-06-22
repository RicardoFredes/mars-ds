import type { RatingStarProps, StarProps } from "./rating-star.types";

import classNames from "classnames";
import { useEffect, useState } from "react";

import Icon, { IconSizes } from "@/components/basics/Icon";
import Caption from "@/components/typographies/Caption";

const getDefaultValue = (value: number, total: number): number => {
  if (value <= 0) return 0;
  if (value >= total) return total;
  return value;
};
const RatingStar = ({
  className,
  iconName = "star",
  label = "Avaliação:",
  name = "rating",
  onSelect,
  size = IconSizes.Medium,
  total = 5,
  value = 0,
  ...props
}: RatingStarProps) => {
  const cn = classNames("rating-star", className);
  const defaultValue = getDefaultValue(value, total);
  const [currentValue, setCurrentValue] = useState(defaultValue);
  const starsLength = total <= 0 ? 5 : total;
  const handleSetValue = (newValue: number) => {
    setCurrentValue(newValue);
    onSelect?.(newValue);
  };

  useEffect(() => {
    setCurrentValue(defaultValue);
  }, [defaultValue]);

  return (
    <div className={cn} {...props}>
      <Caption className="rating-star__label">{label || "Avaliação:"}</Caption>
      {[...Array(starsLength)].map((_star, index) => (
        <StarField
          currentValue={currentValue}
          name={name}
          onClick={() => handleSetValue(index + 1)}
          key={index}
          value={index + 1}
          size={size}
          iconName={iconName}
        />
      ))}
    </div>
  );
};

const StarField = ({ value, onClick, currentValue, name, size, iconName }: StarProps) => {
  const isChecked = currentValue === value;
  const isActive = currentValue >= value;
  return (
    <label
      className={classNames("rating-star__icon", {
        "rating-star__icon--is-active": isActive,
      })}
      data-testid="label-star"
    >
      <input
        onClick={onClick}
        className="rating-star__radio"
        defaultChecked={isChecked}
        data-testid="radio-star"
        type="radio"
        value={value}
        name={name}
      />
      <Icon name={iconName} as="button" className="rating-star__star" size={size} />
    </label>
  );
};

export default RatingStar;
