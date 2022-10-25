import type { ToggleSwitchProps } from "./toggle-switch.types";

import classNames from "classnames";
import { useEffect, useState } from "react";

import Text, { TextSizes } from "@/components/typographies/Text";

const ToggleSwitch = ({
  className,
  defaultChecked = false,
  disabled,
  id,
  label,
  onChange,
  checked: externalChecked,
  name,
  ...props
}: ToggleSwitchProps) => {
  const [checked, setChecked] = useState(externalChecked || defaultChecked);

  const cn = classNames("toggle-switch", className, [
    { "toggle-switch--is-checked": checked },
    { "toggle-switch--is-disabled": disabled },
  ]);

  const handleChange = () => {
    if (disabled) return;
    setChecked(!checked);
    onChange?.(!checked);
  };

  useEffect(() => {
    if (typeof externalChecked === "boolean" && externalChecked !== checked) {
      setChecked(externalChecked);
    }
  }, [externalChecked]);

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
          id={id || name}
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
