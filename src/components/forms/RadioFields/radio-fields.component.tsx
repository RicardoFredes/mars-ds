import type { RadioFieldsProps } from "./radio-fields.types";

import classNames from "classnames";
import { useState } from "react";

import type { RadioOption } from "@/components/forms/Radio";
import Radio from "@/components/forms/Radio";

const emptyOption: RadioOption = { value: undefined, label: undefined };

const RadioFields = ({
  name,
  options = [],
  defaultOption = emptyOption,
  className,
  onSelect,
  disabled,
  ...props
}: RadioFieldsProps) => {
  const [checkedOption, setCheckedOption] = useState(defaultOption);
  const cn = classNames("radio-fields", className);
  const handleSelectOption = (option: RadioOption) => {
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
            defaultChecked={isChecked}
            className={classNames({ "radio--is-checked": isChecked })}
            onClick={() => handleSelectOption(option)}
            disabled={disabled}
          />
        );
      })}
    </div>
  );
};

export default RadioFields;
