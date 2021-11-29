import type { IconProps } from "@/components/Icon/icon.types";
import type { FocusEvent, FormEvent } from "react";
import type { TextFieldProps } from "./text-field.types";

import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";

import Icon from "@/components/Icon/icon.component";
import { generateHash } from "@/services/hash";
import { masker } from "@/services/masker";

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
  ...props
}: TextFieldProps) => {
  if (!id) id = name || generateHash("field");

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
  }, [setValue, value]);

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

  return (
    <div className={cn}>
      <fieldset className="field__fieldset">
        <div className="field__content">
          {leftIconButton && (
            <TextFieldIconButton
              classNameField="field__icon field__icon-left"
              {...leftIconButton}
            />
          )}
          <input
            id={id}
            className="field__input"
            type={type}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
            disabled={disabled}
            {...props}
            value={computedValue}
          />
          {rightIconButton && (
            <TextFieldIconButton
              classNameField="field__icon field__icon-right"
              {...rightIconButton}
            />
          )}
          {error && (
            <TextFieldIconButton
              classNameField="field__icon field__icon-right"
              name="alert-circle"
            />
          )}
          {isSuccess && (
            <TextFieldIconButton
              classNameField="field__icon field__icon-right"
              name="checkmark-circle"
            />
          )}
        </div>
        <label htmlFor={id} className="field__label">
          {labelText}
        </label>
        <legend className="field__legend">{labelText}</legend>
      </fieldset>
      {(error || info) && <div className="field__help">{error || info}</div>}
    </div>
  );
};

const TextFieldIconButton = ({
  classNameField,
  className,
  name,
  ...props
}: IconProps & { classNameField: string }) => {
  const cn = classNames(classNameField, className);
  return <Icon name={name} className={cn} {...props} />;
};

export default TextField;
