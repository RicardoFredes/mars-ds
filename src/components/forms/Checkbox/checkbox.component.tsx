import type { CheckboxProps } from "./checkbox.types";

import classNames from "classnames";
import { useEffect, useState } from "react";

import Icon from "@/components/basics/Icon";
import Text, { TextSizes } from "@/components/typographies/Text";

const Checkbox = ({
  className,
  defaultChecked = false,
  disabled,
  id,
  label,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  const cn = classNames("checkbox", className, [
    { "checkbox--is-checked": checked },
    { "checkbox--is-disabled": disabled },
  ]);

  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  const handleChange = () => {
    if (!disabled) setChecked(!checked);
  };

  const iconName = checked ? "checkmark-square" : "square";

  return (
    <div data-testid="checkbox" className={cn} {...props}>
      <label data-testid="checkbox-label" className="checkbox__container">
        <div className="checkbox__icon">
          <Icon name={iconName} />
        </div>
        <input
          id={id || props.name}
          disabled={disabled}
          data-testid="checkbox-input"
          type="checkbox"
          className="checkbox__input"
          onChange={handleChange}
          defaultChecked={defaultChecked}
        />
        {label && (
          <Text className="checkbox__label" as="span" size={TextSizes.Small}>
            {label}
          </Text>
        )}
      </label>
    </div>
  );
};

export default Checkbox;
