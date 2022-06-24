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
  disabled,
  isLoading,
  ...props
}: RatingStarProps) => {
  const cn = classNames("rating-star", className, {
    "rating-star--is-disabled": disabled || isLoading,
  });
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
          disabled={disabled || isLoading}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};

const StarField = ({
  value,
  onClick,
  currentValue,
  name,
  iconSize,
  iconName,
  disabled,
  isLoading,
}: StarProps) => {
  const isChecked = currentValue === value;
  const isActive = currentValue >= value;
  const cn = classNames("rating-star__star", { "skeleton-animation": isLoading });
  return (
    <label
      className={classNames("rating-star__icon", {
        "rating-star__icon--is-active": isActive,
        "rating-star__icon--is-disabled": disabled,
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
        disabled={disabled}
      />
      <Icon className={cn} name={isLoading ? "circle" : iconName} as="button" size={iconSize} />
    </label>
  );
};

export default RatingStar;
