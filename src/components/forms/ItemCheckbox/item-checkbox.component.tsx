import type { ItemCheckboxProps } from "./item-checkbox.types";

import classNames from "classnames";
import { useEffect, useState } from "react";

import Icon from "@/components/basics/Icon";
import Image from "@/components/basics/Image";
import Text from "@/components/typographies/Text";

const ItemCheckbox = ({
  label,
  html,
  checkRight = false,
  full = true,
  iconLeft,
  iconLeftColor,
  iconRight,
  iconRightColor,
  imgLeft,
  imgRight,
  className,
  onChange,
  ...props
}: ItemCheckboxProps) => {
  const [checked, setChecked] = useState(props?.checked ?? false);
  const cn = classNames("item-checkbox", className, [
    { "item-checkbox--is-checked": checked },
    { "item-checkbox--is-disabled": props.disabled },
    { "item-checkbox--block": full },
  ]);

  useEffect(() => {
    setChecked(props?.checked ?? false);
  }, [props.checked]);

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
        onChange={handleChange}
        checked={checked}
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
      {(imgLeft?.src || imgLeft?.darkModeSrc) && (
        <Image
          title={imgLeft?.title}
          width={imgLeft?.width}
          height={imgLeft?.height}
          src={imgLeft?.src}
          darkModeSrc={imgLeft?.darkModeSrc}
          autoDarkMode={imgLeft?.autoDarkMode}
          maxHeight={imgLeft?.maxHeight}
          sm={imgLeft?.sm}
          md={imgLeft?.md}
          lg={imgLeft?.lg}
          className="item-checkbox__img-left"
          data-testid="item-checkbox-img-left"
        />
      )}
      <Text html={html} className="item-checkbox__label">
        {label}
      </Text>
      {iconRight && (
        <Icon name={iconRight} color={iconRightColor} className="item-checkbox__icon-right" />
      )}
      {(imgRight?.src || imgRight?.darkModeSrc) && (
        <Image
          title={imgRight?.title}
          width={imgRight?.width}
          height={imgRight?.height}
          src={imgRight?.src}
          darkModeSrc={imgRight?.darkModeSrc}
          autoDarkMode={imgRight?.autoDarkMode}
          maxHeight={imgRight?.maxHeight}
          sm={imgRight?.sm}
          md={imgRight?.md}
          lg={imgRight?.lg}
          className="item-checkbox__img-right"
          data-testid="item-checkbox-img-right"
        />
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
