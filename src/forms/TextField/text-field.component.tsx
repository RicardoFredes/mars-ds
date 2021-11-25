import { useEffect, useState } from "react";
import classNames from "classnames";
import { masker } from "../../services/masker";
import { TextFieldProps, IconProps } from "./text-field.types";
import Icon from '../../components/Icon/icon.component'
import { generateHash } from "../../services/hash";


const TextField = ({ className, info, type, name, label, id, mask, disabled, error, sucess, onBlur, onFocus, onChange, rightIconButton, leftIconButton, value = "", ...props }: TextFieldProps) => {
  if (!id) id = name || generateHash('field')

  const [isFocused, setIsFocused] = useState(false);
  const [computedValue, setComputedValue] = useState('')

  const setValue = (newValue) => {
    const str = String(newValue)
    if (!mask) return setComputedValue(str)
    const maskedValue = masker(newValue, mask)
    setComputedValue(maskedValue)
  }

  useEffect(() => {
    setValue(value)
  }, [value])

  const isFilled = computedValue.length > 0
  const isSuccess = isFilled && !error && sucess

  const cn = classNames("field", className, [
    { 'field--is-focused': isFocused },
    { 'field--is-filled': isFilled },
    { 'field--is-disabled': disabled },
    { 'field--has-error': error },
    { 'field--has-success': isSuccess },
    { 'field--has-left-icon': leftIconButton },
    { 'field--has-right-icon': rightIconButton },
  ]);

  const handleFocus = (event) => {
    setIsFocused(true)
    onFocus?.(event)
  }

  const handleBlur = (event) => {
    setIsFocused(false)
    onBlur?.(event)
  }

  const handleChange = (event) => {
    const { value } = event.target
    setValue(value)
    onChange?.(event)
  }

  const labelText = error ? `${label}*` : label

  return (
    <div className={cn}>
      <fieldset className="field__fieldset">
        <div className="field__content">
          {leftIconButton && <TextFieldIconButton classNameField="field__icon field__icon-left" {...leftIconButton} />}
          <input id={id} className="field__input" type={type} onBlur={handleBlur} onFocus={handleFocus} onChange={handleChange} disabled={disabled} {...props} value={computedValue} />
          {rightIconButton && <TextFieldIconButton classNameField="field__icon field__icon-right" {...rightIconButton} />}
          {error && <TextFieldIconButton classNameField="field__icon field__icon-right" name="alert-circle" />}
          {isSuccess && <TextFieldIconButton classNameField="field__icon field__icon-right" name="checkmark-circle" />}
        </div>
        <label htmlFor={id} className="field__label">{labelText}</label>
        <legend className="field__legend">{labelText}</legend>
      </fieldset>
      {(error || info) && <div className="field__help">{error || info}</div>}
    </div>
  );
};

const TextFieldIconButton = ({ classNameField, className, name, ...props }: IconProps & { classNameField: string }) => {
  const cn = classNames(classNameField, className)
  return <Icon name={name} className={cn} {...props} />
}

export default TextField;
