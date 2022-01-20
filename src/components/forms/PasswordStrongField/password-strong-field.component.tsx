import { ChangeEvent, useState } from "react";
import classNames from "classnames";

import PasswordField from "@/components/forms/PasswordField";
import List from "@/components/typographics/List";

import { PasswordStrongFieldProps } from "./password-strong-field.types";
import { getValidations, isValid } from "./password-strong-field.helper";

const PasswordStrongField = ({
  className,
  label = "Senha",
  defaultValue,
  style,
  onValid,
  onChange,
  ...props
}: PasswordStrongFieldProps) => {
  const cn = classNames("password-strong-field", className);
  const [value, setValue] = useState(defaultValue || "");

  const handleTextInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.trim();
    setValue(newValue);
    onChange?.(event);
    onValid?.(isValid(newValue));
  };

  return (
    <div className={cn} style={style}>
      <PasswordField
        {...props}
        label={label}
        value={value}
        onChange={handleTextInput}
        info={<List list={getValidations(value)} className="password-strong-field__info" />}
      />
    </div>
  );
};

export default PasswordStrongField;
