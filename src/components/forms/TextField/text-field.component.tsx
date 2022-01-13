import { ChangeEvent, FocusEvent, MouseEvent, useRef } from "react";
import { IconProps } from "@/components/basics/Icon";
import { IconPosition, TextFieldProps } from "./";

import { useCallback, useEffect, useState } from "react";
import classNames from "classnames";

import { generateHash } from "@/services/hash";
import { masker } from "@/services/masker";

import TextFieldIconButton from "@/components/forms/TextFieldIconButton";

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
  inputDisabled,
  ...props
}: TextFieldProps) => {
  const [computedId] = useState(id || name || generateHash("field"));
  const [isFocused, setIsFocused] = useState(false);
  const [computedValue, setComputedValue] = useState("");

  const inputRef = useRef<HTMLInputElement>(null);

  const setValue = useCallback(
    (value) => {
      return new Promise((resolve) => {
        const str = String(value);
        const newValue = !mask ? str : masker(str, mask);
        setComputedValue(newValue);
        resolve(newValue);
      });
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

  const handleChange = async (event: ChangeEvent<HTMLInputElement>) => {
    const { value } = event.target as HTMLInputElement;
    await setValue(value);
    onChange?.(event);
  };

  const handleClick = () => {
    inputRef.current?.focus();
  };

  const labelText = error ? `${label}*` : label;
  const helpText = error || info;
  const statusIconName = error ? "alert-circle" : isSuccess ? "checkmark-circle" : undefined;
  return (
    <div className={cn}>
      <fieldset className="field__fieldset" onClick={handleClick}>
        <div className="field__content">
          {leftIconButton && (
            <IconButtonPosition position={IconPosition.Left} {...leftIconButton} />
          )}
          <input
            {...props}
            ref={inputRef}
            id={computedId}
            className="field__input"
            type={type}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
            disabled={inputDisabled || disabled}
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
  onClick,
  ...props
}: {
  position?: IconPosition;
} & IconProps) => {
  const handleClick = (event: MouseEvent<HTMLElement>) => {
    event.stopPropagation();
    onClick?.(event);
  };
  return (
    <TextFieldIconButton
      hasAction={!!onClick}
      className={`field__icon field__icon-${position}`}
      name={name}
      onClick={handleClick}
      {...props}
    />
  );
};

export default TextField;
