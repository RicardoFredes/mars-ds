import classNames from "classnames";
import { useState } from "react";

import { InputProps } from "./input.types";

const hash = `field-${(Math.random() * 1000000).toFixed(0)}`

const Input = ({ className, placeholder, type, name, label, id, onBlur, onFocus, ...props }: InputProps) => {
  if (!id) id = name || hash
  const [isFocused, setIsFocused] = useState(false);
  const cn = classNames("field", className, { 'field--is-focused': isFocused });

  const handleFocus = (event) => {
    setIsFocused(true)
    onFocus?.(event)
  }

  const handleBlur = (event) => {
    setIsFocused(false)
    onBlur?.(event)
  }

  return (
    <div className={cn}>
      <fieldset className="field__fieldset">
        <input id={id} className="field__input" type={type} placeholder={placeholder || label} name={name} onBlur={handleBlur} onFocus={handleFocus} {...props} />
        <label htmlFor={id} className="field__label">{label}</label>
        <legend className="field__legend">{label}</legend>
      </fieldset>
    </div>
  );
};

export default Input;
