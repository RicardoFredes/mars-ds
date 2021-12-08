import { useState } from "react";
import Radio from "./";
import classNames from "classnames";
import type { RadioListProps } from "./radio.types";
import { Option } from "@/types";

const emptyOption: Option = { value: undefined, label: undefined };

const RadioList = ({
  name,
  options = [],
  defaultOption = emptyOption,
  className,
  onSelect,
  ...props
}: RadioListProps) => {
  const [checkedOption, setCheckedOption] = useState(defaultOption);
  const cn = classNames("radioList", className);
  const handleSelectOption = (option: Option) => {
    setCheckedOption(option);
    onSelect?.(option);
  };

  return (
    <div className={cn} {...props}>
      {options.map((option, key) => {
        const isChecked = option.value === checkedOption.value;
        return (
          <Radio
            {...option}
            key={key}
            name={name}
            checked={isChecked}
            className={classNames({ "radio--is-checked": isChecked })}
            onClick={() => handleSelectOption(option)}
          />
        );
      })}
    </div>
  );
};

export default RadioList;
