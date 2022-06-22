import type { RatingStarProps, StarProps } from "./rating-star.types";

import classNames from "classnames";
import { useEffect, useState } from "react";

import Icon from "@/components/basics/Icon";
import Caption from "@/components/typographies/Caption";
import { makeArray } from "@/services";

const getDefaultValue = (value: number, total: number): number => {
  if (value <= 0) return 0;
  if (value >= total) return total;
  return value;
};
const RatingStar = ({
  className,
  iconName = "star",
  label,
  name = "rating",
  onSelect,
  iconSize,
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
      {label && <Caption className="rating-star__label">{label}</Caption>}
      {makeArray(starsLength).map((_, index) => (
        <StarField
          currentValue={currentValue}
          name={name}
          onClick={() => handleSetValue(index + 1)}
          key={index}
          value={index + 1}
          iconSize={iconSize}
          iconName={iconName}
        />
      ))}
    </div>
  );
};

const StarField = ({ value, onClick, currentValue, name, iconSize, iconName }: StarProps) => {
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
      <Icon name={iconName} as="button" className="rating-star__star" size={iconSize} />
    </label>
  );
};

export default RatingStar;
