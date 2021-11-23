import classNames from "classnames";

import { InputProps } from "./input.types";

const Input = ({ className, placeholder, type, name, title, ...props }: InputProps) => {
  const cn = classNames("input-group", className);
  return (
    <div className={cn} {...props}>
      <span className="input-group__title">{title}</span>
      <input className="input-group__input" type={type} placeholder={placeholder} name={name} />
    </div>
  );
};

export default Input;
