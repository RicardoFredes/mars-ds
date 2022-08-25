import type { AreaFieldProps } from "./area-field.types";
import type { ChangeEvent, FocusEvent } from "react";

import classNames from "classnames";
import { useRef, useEffect, useState } from "react";

import Icon from "@/components/basics/Icon";
import { generateHash } from "@/services/hash";

const AreaField = ({
  className,
  dataKey,
  disabled,
  error,
  id,
  info,
  label,
  onBlur,
  onChange,
  onFocus,
  success,
  value: externalValue = "",
  maxLength,
  minLength,
  showCounter,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  children,
  ...props
}: AreaFieldProps) => {
  const [computedId] = useState(id || props.name || generateHash("area-field"));
  const [isFocused, setIsFocused] = useState(false);
  const [value, setInternalValue] = useState("");

  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const setAutoHeight = () => {
    const textArea = textareaRef.current;
    if (!textArea) return;
    textArea.style.height = "auto";
    textArea.style.height = `${textArea.scrollHeight}px`;
  };

  const setValue = (value: string) => {
    setInternalValue(value);
    setTimeout(setAutoHeight, 0);
  };

  useEffect(() => {
    setValue(externalValue);
  }, [externalValue, dataKey, textareaRef]);

  const isFilled = value.length > 0;
  const isSuccess = isFilled && !error && success;

  const cn = classNames("area-field", className, [
    { "area-field--is-focused": isFocused },
    { "area-field--is-filled": isFilled },
    { "area-field--is-disabled": disabled },
    { "area-field--has-error": error },
    { "area-field--has-success": isSuccess },
  ]);

  const handleFocus = (event: FocusEvent<HTMLTextAreaElement, Element>) => {
    setIsFocused(true);
    onFocus?.(event);
  };

  const handleBlur = (event: FocusEvent<HTMLTextAreaElement, Element>) => {
    setIsFocused(false);
    onBlur?.(event);
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    const { value } = event.target as HTMLTextAreaElement;
    setValue(value);
    onChange?.(event);
  };

  const handleClick = () => textareaRef.current?.focus();

  const labelText = error ? `${label}*` : label;
  const helpText = error || info;
  const statusIconName = error ? "alert-circle" : isSuccess ? "checkmark-circle" : undefined;
  return (
    <div className={cn}>
      <fieldset className="area-field__fieldset" onClick={handleClick}>
        <div className="area-field__content">
          <textarea
            ref={textareaRef}
            id={computedId}
            className="area-field__textarea"
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
            disabled={disabled}
            value={value}
            rows={1}
            maxLength={maxLength}
            minLength={minLength}
            {...props}
          />
          <div className="area-field__info">
            {showCounter && (
              <Counter length={value.length} minLength={minLength} maxLength={maxLength} />
            )}
            {statusIconName && <Icon className="area-field__info__icon" name={statusIconName} />}
          </div>
          <label htmlFor={computedId} className="area-field__label">
            {labelText}
          </label>
        </div>
        {labelText && <legend className="area-field__legend">{labelText}</legend>}
      </fieldset>
      {helpText && <div className="area-field__help">{helpText}</div>}
    </div>
  );
};

interface CounterProps {
  length: number;
  maxLength?: number;
  minLength?: number;
}

const Counter = ({ length = 0, maxLength = 0, minLength = 0 }: CounterProps) => {
  if (maxLength) {
    return (
      <span className="area-field__info__counter">
        {length} / {maxLength}
      </span>
    );
  }

  if (minLength) {
    const isSuccess = length >= minLength;
    const cn = classNames({
      "area-field__info__counter--is-success": isSuccess,
      "area-field__info__counter--is-error": !isSuccess,
    });
    return (
      <span className="area-field__info__counter">
        <span className={cn}>{length}</span> / {minLength}
      </span>
    );
  }

  return <span className="area-field__info__counter">{length}</span>;
};

export default AreaField;
