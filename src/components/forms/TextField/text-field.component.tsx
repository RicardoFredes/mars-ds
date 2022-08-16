import type { TextFieldProps } from "./text-field.types";
import type { ChangeEvent, FocusEvent, MouseEvent } from "react";

import classNames from "classnames";
import { useRef, useCallback, useEffect, useState } from "react";

import type { IconProps } from "@/components/basics/Icon";
import TextFieldIconButton from "@/components/forms/TextFieldIconButton";
import { generateHash } from "@/services/hash";
import { masker } from "@/services/masker";

import { IconPosition } from "./text-field.types";

const TextField = ({
  className,
  dataKey,
  disabled,
  error,
  id,
  info,
  inputDisabled,
  label,
  leftIconButton,
  mask,
  name,
  onBlur,
  onChange,
  onClick,
  onFocus,
  onKeyDown,
  rightIconButton,
  style,
  success,
  type,
  value = "",
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
            name={name}
            ref={inputRef}
            id={computedId}
            className="field__input"
            type={type}
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
            onClick={onClick}
            style={style}
            onKeyDown={onKeyDown}
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
