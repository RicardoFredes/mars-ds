import { useState } from "react";
import classNames from "classnames";
import Text from "@/components/typographic/Text/text.component";
import { TextSizes } from "@/components/typographic/Text/text.types";
import { CheckboxProps } from "./checkbox.types";
import Icon from "@/components/basics/Icon/icon.component";

const Checkbox = ({
  className,
  defaultChecked = false,
  disabled,
  id,
  label,
  name,
  ...props
}: CheckboxProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  const cn = classNames("checkbox", className, [
    { "checkbox--is-checked": checked },
    { "checkbox--is-disabled": disabled },
  ]);

  const handleChange = () => {
    if (!disabled) setChecked(!checked);
  };

  const iconName = checked ? "checkmark-square" : "square";

  return (
    <div className={cn} {...props}>
      <label className="checkbox__container">
        <Icon className="checkbox__icon" name={iconName} />
        <input
          id={id || name}
          disabled={disabled}
          type="checkbox"
          className="checkbox__input"
          name={name}
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
