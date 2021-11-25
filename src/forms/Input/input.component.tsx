import classNames from "classnames";

import { InputProps } from "./input.types";

const hash = `field-${(Math.random() * 1000000).toFixed(0)}`

const Input = ({ className, placeholder, type, name, label, id, ...props }: InputProps) => {
  const cn = classNames("field", className);
  if (!id) id = name || hash
  return (
    <div className={cn}>
      <fieldset className="field__fieldset">
        <input id={id} className="field__input" type={type} placeholder={placeholder || label} name={name} {...props} />
        <label htmlFor={id} className="field__label">{label}</label>
        <legend className="field__legend">{label}</legend>
      </fieldset>
    </div>
  );
};

export default Input;
