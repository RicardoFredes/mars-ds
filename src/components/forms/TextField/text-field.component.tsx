import type { FocusEvent, FormEvent } from "react";
import type { IconProps } from "../../Icon/icon.types";
import { IconPosition, TextFieldProps } from "./text-field.types";

import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";

import { generateHash } from "@/services/hash";
import { masker } from "@/services/masker";

import TextFieldIconButton from "../common/text-field-icon-button.component";

const TextField = ({
  className,
  info,
  type,
  name,
  label,
  id,
  mask,
  disabled,
  error,
  success,
  onBlur,
  onFocus,
  onChange,
  rightIconButton,
  leftIconButton,
  value = "",
  dataKey,
  ...props
}: TextFieldProps) => {
  const [computedId] = useState(id || name || generateHash("field"));
  const [isFocused, setIsFocused] = useState(false);
  const [computedValue, setComputedValue] = useState("");

  const setValue = useCallback(
    (newValue) => {
      const str = String(newValue);
      if (!mask) return setComputedValue(str);
      const maskedValue = masker(str, mask);
      setComputedValue(maskedValue);
    },
    [mask]
  );

  useEffect(() => {
    setValue(value);
  }, [setValue, value, dataKey]);

  const isFilled = computedValue.length > 0;
  const isSuccess = isFilled && !error && success;

  const cn = classNames("field", className, [
    { "field--is-focused": isFocused },
    { "field--is-filled": isFilled },
    { "field--is-disabled": disabled },
    { "field--has-error": error },
    { "field--has-success": isSuccess },
    { "field--has-left-icon": leftIconButton },
    { "field--has-right-icon": rightIconButton },
  ]);

  const handleFocus = (event: FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  const handleChange = (event: FormEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    setValue(value);
    onChange?.(event);
  };

  const labelText = error ? `${label}*` : label;
  const helpText = error || info;
  const statusIconName = error ? "alert-circle" : isSuccess ? "checkmark-circle" : undefined;

  return (
    <div className={cn}>
      <fieldset className="field__fieldset">
        <div className="field__content">
          {leftIconButton && (
            <IconButtonPosition position={IconPosition.Left} {...leftIconButton} />
          )}
          <input
            {...props}
            id={computedId}
            className="field__input"
            type={type}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
            disabled={disabled}
            value={computedValue}
          />
          {statusIconName && <IconButtonPosition name={statusIconName} />}
          {rightIconButton && <IconButtonPosition {...rightIconButton} />}
        </div>
        <label htmlFor={computedId} className="field__label">
          {labelText}
        </label>
        <legend className="field__legend">{labelText}</legend>
      </fieldset>
      {helpText && <div className="field__help">{helpText}</div>}
    </div>
  );
};

const IconButtonPosition = ({
  position = IconPosition.Right,
  name,
  ...props
}: {
  position?: IconPosition;
} & IconProps) => {
  return (
    <TextFieldIconButton className={`field__icon field__icon-${position}`} name={name} {...props} />
  );
};

export default TextField;
