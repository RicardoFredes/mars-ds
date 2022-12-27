import type { TextFieldLabelProps } from "./text-field-label.types";
import type { ChangeEvent, FocusEvent, MouseEvent } from "react";

import classNames from "classnames";
import { useRef, useCallback, useEffect, useState } from "react";

import type { IconProps } from "@/components/basics/Icon";
import { LabelThemes, LabelVariants } from "@/components/basics/Label";
import TextFieldIconButton from "@/components/forms/TextFieldIconButton";
import { generateHash } from "@/services/hash";
import { masker } from "@/services/masker";

import { IconPosition } from "../TextField/text-field.types";

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
  onBlur,
  onChange,
  onFocus,
  rightIconButton,
  success,
  value = "",
  theme = LabelThemes.Solid,
  variant = LabelVariants.Default,
  ...props
}: TextFieldLabelProps) => {
  const [computedId] = useState(id || props.name || generateHash("field"));
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

  const cnTheme = theme ? `field-label--${theme}` : "";

  const cnVariant = variant ? `field-label--${theme}-${variant}` : "";

  const cn = classNames("field-label", className, [
    { "field-label--is-focused": isFocused },
    cnTheme,
    cnVariant,
    { "field-label--is-filled": isFilled },
    { "field-label--is-disabled": disabled },
    { "field-label--has-error": error },
    { "field-label--has-success": isSuccess },
    { "field-label--has-left-icon": leftIconButton },
    { "field-label--has-right-icon": rightIconButton },
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
      <fieldset className="field-label__fieldset" onClick={handleClick}>
        <div className="field-label__content">
          {leftIconButton && (
            <IconButtonPosition position={IconPosition.Left} {...leftIconButton} />
          )}
          <input
            ref={inputRef}
            id={computedId}
            className="field-label__input"
            onBlur={handleBlur}
            onFocus={handleFocus}
            onChange={handleChange}
            disabled={inputDisabled || disabled}
            value={computedValue}
            {...props}
          />
          {statusIconName && <IconButtonPosition name={statusIconName} />}
          {rightIconButton && <IconButtonPosition {...rightIconButton} />}
        </div>
        <label htmlFor={computedId} className="field-label__label">
          {labelText}
        </label>
        <legend className="field-label__legend">{labelText}</legend>
      </fieldset>
      {helpText && <div className="field-label__help">{helpText}</div>}
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
