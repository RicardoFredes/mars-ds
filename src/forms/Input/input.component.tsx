import classNames from "classnames";
import { useState } from "react";

import { InputProps } from "./input.types";

const hash = `field-${(Math.random() * 1000000).toFixed(0)}`

const Input = ({ className, placeholder, type, name, label, id, disabled, error, onBlur, onFocus, ...props }: InputProps) => {
  if (!id) id = name || hash
  const [isFocused, setIsFocused] = useState(false);
  const cn = classNames("field", className, [{ 'field--is-focused': isFocused }, { 'field--is-disabled': disabled }, {'field--has-error': error } ]);

  const handleFocus = (event) => {
    setIsFocused(true)
    onFocus?.(event)
  }

  const handleBlur = (event) => {
    setIsFocused(false)
    onBlur?.(event)
  }

  const labelText = error ? `${label}*` : label

  return (
    <div className={cn}>
      <fieldset className="field__fieldset">
        <input id={id} className="field__input" type={type} placeholder={ placeholder || " " } name={name} onBlur={handleBlur} onFocus={handleFocus} disabled={disabled} {...props} />
        <label htmlFor={id} className="field__label">{labelText}</label>
        <legend className="field__legend">{labelText}</legend>
      </fieldset>
      {(error || placeholder) && <div className="field__help">{error || placeholder}</div>}
    </div>
  );
};

export default Input;
