import classNames from "classnames";
import { ChangeEvent, useState } from "react";
import { SliderProps } from ".";

const Slider = ({
  min = 0,
  max = 100,
  className,
  defaultValue,
  formatter = (value) => String(value),
  step = 0.05,
  style,
  onSelect = (value: number) => value,
  name,
}: SliderProps) => {
  const cn = classNames("slider", className);
  const [value, setValue] = useState(defaultValue || max / 2);

  const handleGetPercentage = (value: number) => {
    return getPercentage(value, min, max);
  };

  const [gradientPercentage, setGradientPercentage] = useState(
    handleGetPercentage(defaultValue || max / 2)
  );

  const handleSetValue = (numberValue: number) => {
    setGradientPercentage(handleGetPercentage(numberValue));
    setValue(numberValue);
  };

  const onRangeChange = (event: ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    const numberValue = Number(inputValue);
    onSelect(numberValue);
    handleSetValue(numberValue);
  };

  const onRangeClick = (event: React.MouseEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    const inputValue = target.value;
    const numberValue = Number(inputValue);
    handleSetValue(numberValue);
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const computedStyle: any = { "--progress-percentage": `${gradientPercentage}%` };

  return (
    <label className={cn} style={style}>
      <input
        type="range"
        className="slider__input"
        min={min}
        max={max}
        onChange={onRangeChange}
        onClick={onRangeClick}
        value={value}
        step={step}
        style={computedStyle}
        name={name}
      />
      <span className="slider__value">{formatter(value)}</span>
    </label>
  );
};

const getPercentage = (value: number, min: number, max: number) => {
  return ((value - min) / (max - min)) * 100;
};

export default Slider;
