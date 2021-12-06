import { useState } from "react";
import classNames from "classnames";
import Text from "../../typographic/Text/text.component";
import { TextSizes } from "@/components/typographic/Text/text.types";
import { CheckboxProps } from "./checkbox.types";

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

  const cn = classNames("checkbox", className);

  const handleChange = () => {
    if (!disabled) setChecked(!checked);
  };

  return (
    <div className={cn} {...props}>
      <label className="checkbox__container">
        <input
          id={id || name}
          disabled={disabled}
          type="checkbox"
          className="checkbox__checkbox"
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
