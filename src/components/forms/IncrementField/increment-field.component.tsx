import type { IncrementFieldProps } from "./increment-field.types";

import classNames from "classnames";
import { useState } from "react";

import Button from "@/components/basics/Button";
import Subtitle from "@/components/typographies/Subtitle";

const IncrementField = ({
  defaultValue = 0,
  step = 1,
  min = 0,
  max = 24,
  name,
  formatValue = (value: number): string => `${value}h`,
  onChange,
  className,
  ...props
}: IncrementFieldProps) => {
  const cn = classNames("increment-field", className);
  const [value, setValue] = useState(defaultValue);

  const handleIncrement = () => {
    const newValue = value + step;
    if (newValue > max) return;
    setValue(newValue);
    onChange?.(newValue, formatValue(newValue));
  };

  const handleDecrement = () => {
    const newValue = value - step;
    if (newValue < min) return;
    setValue(newValue);
    onChange?.(newValue, formatValue(newValue));
  };

  const displayValue = formatValue(value);

  return (
    <div className={cn} {...props}>
      <Button
        size="sm"
        iconName="minus"
        className="increment-field__decrement-button"
        onClick={handleDecrement}
        data-testid="decrement-button"
      />
      <Subtitle data-testid="display-value">{displayValue}</Subtitle>
      <Button
        size="sm"
        iconName="plus"
        className="increment-field__increment-button"
        onClick={handleIncrement}
        data-testid="increment-button"
      />
      <input type="hidden" name={name} value={value} />
    </div>
  );
};

export default IncrementField;
