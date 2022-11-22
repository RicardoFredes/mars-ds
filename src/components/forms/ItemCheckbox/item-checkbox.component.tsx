import type { ItemCheckboxProps } from "./item-checkbox.types";

import classNames from "classnames";
import { useEffect, useState } from "react";

import Icon from "@/components/basics/Icon";
import Text from "@/components/typographies/Text";

const ItemCheckbox = ({
  label,
  html,
  checkRight = false,
  full = true,
  defaultChecked = false,
  iconLeft,
  iconLeftColor,
  iconRight,
  iconRightColor,
  className,
  onChange,
  ...props
}: ItemCheckboxProps) => {
  const [checked, setChecked] = useState(defaultChecked);

  const cn = classNames("item-checkbox", className, [
    { "item-checkbox--is-checked": checked },
    { "item-checkbox--is-disabled": props.disabled },
    { "item-checkbox--block": full },
  ]);

  useEffect(() => {
    setChecked(defaultChecked);
  }, [defaultChecked]);

  const handleChange = () => {
    if (!props.disabled) setChecked(!checked);
    onChange?.(!checked);
  };

  const checkIcon = checked ? "checkmark-square" : "square";

  return (
    <label data-testid="item-checkbox" className={cn} {...props}>
      <input
        className="item-checkbox__input"
        type="checkbox"
        tabIndex={0}
        disabled={props.disabled}
        defaultChecked={defaultChecked}
        onChange={handleChange}
        id={props.id}
        name={props.name}
        data-testid="item-checkbox-input"
      />
      {!checkRight && (
        <div className="item-checkbox__check-left">
          <Icon name={checkIcon} />
        </div>
      )}
      {iconLeft && (
        <Icon name={iconLeft} color={iconLeftColor} className="item-checkbox__icon-left" />
      )}
      <Text html={html} className="item-checkbox__label">
        {label}
      </Text>
      {iconRight && (
        <Icon name={iconRight} color={iconRightColor} className="item-checkbox__icon-right" />
      )}
      {checkRight && (
        <div className="item-checkbox__check-right">
          <Icon name={checkIcon} />
        </div>
      )}
    </label>
  );
};

export default ItemCheckbox;
