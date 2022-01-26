import { useEffect, useState } from "react";
import classNames from "classnames";

import Icon, { IconSizes } from "@/components/basics/Icon";
import { RatingStarProps } from "./rating-star.types";

import { StarProps } from ".";

const getDefaultValue = (defaultValue: number, maxValue: number): number => {
  if (defaultValue <= 0) return 0;
  if (defaultValue >= maxValue) return maxValue;
  return defaultValue;
};
const RatingStar = ({
  className,
  maxValue = 5,
  onSelect,
  defaultValue = 0,
  name = "rating",
  ...props
}: RatingStarProps) => {
  const cn = classNames("rating-star", className);
  const defaultStarSelected = getDefaultValue(defaultValue, maxValue);
  const [value, setValue] = useState(defaultStarSelected);
  const starsLength = maxValue <= 0 ? 5 : maxValue;
  const handleSetValue = (newvalue: number) => {
    setValue(newvalue);
    onSelect?.(newvalue);
  };

  useEffect(() => {
    setValue(defaultStarSelected);
  }, [defaultStarSelected]);

  return (
    <div className={cn} {...props}>
      {[...Array(starsLength)].map((_star, index) => (
        <StarField
          value={value}
          name={name}
          onClick={() => handleSetValue(index + 1)}
          key={index}
          position={index + 1}
        />
      ))}
    </div>
  );
};

const StarField = ({ position, onClick, value, name }: StarProps) => {
  const isChecked = value === position;
  const isActive = value >= position;
  return (
    <label
      className={classNames("rating-star__label", {
        "rating-star__label--is-active": isActive,
      })}
      data-testid="label-star"
    >
      <input
        onClick={onClick}
        className="rating-star__radio"
        defaultChecked={isChecked}
        data-testid="radio-star"
        type="radio"
        value={position}
        name={name}
      />
      <Icon name="star" as="button" className="rating-star__star" size={IconSizes.Large} />
    </label>
  );
};

export default RatingStar;
