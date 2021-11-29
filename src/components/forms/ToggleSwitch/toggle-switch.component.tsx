import { useState } from "react";
import classNames from "classnames";
import Text from "../../typographic/Text/text.component";
import { TextSizes } from "@/components/typographic/Text/text.types";

const ToggleSwitch = ({
  className,
  defaultChecked = false,
  disabled,
  id,
  label,
  name,
  ...props
}: any) => {
  const [checked, setChecked] = useState(defaultChecked);

  const cn = classNames("toggle-switch", className, [
    { "toggle-switch--is-checked": checked },
    { "toggle-switch--is-disabled": disabled },
  ]);

  const handleChange = () => {
    if (!disabled) setChecked(!checked)
  }

  return (
    <div className={cn} {...props}>
      <label className="toggle-switch__container">
        {label && (
          <Text className="toggle-switch__label" as="span" size={TextSizes.Small}>
            {label}
          </Text>
        )}
        <span className="toggle-switch__track">
          <span className="toggle-switch__thumb" />
        </span>
        <input
          id={id}
          disabled={disabled}
          type="checkbox"
          className="toggle-switch__checkbox"
          name={name}
          onChange={handleChange}
          defaultChecked={defaultChecked}
        />
      </label>
    </div>
  );
};

export default ToggleSwitch;
