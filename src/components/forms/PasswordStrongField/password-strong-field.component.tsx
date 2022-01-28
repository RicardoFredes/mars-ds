import { ChangeEvent, useEffect, useState } from "react";
import classNames from "classnames";

import PasswordField from "@/components/forms/PasswordField";
import List from "@/components/typographics/List";

import { PasswordStrongFieldProps } from "./password-strong-field.types";
import { getValidations, isValid } from "./password-strong-field.helper";

const PasswordStrongField = ({
  className,
  label = "Senha",
  defaultValue,
  onValid,
  onChange,
  error,
  ...props
}: PasswordStrongFieldProps) => {
  const [value, setValue] = useState(defaultValue || "");
  const [hasError, setHasError] = useState(!!error);
  const cn = classNames("password-strong-field", { "field--has-error": hasError }, className);

  useEffect(() => {
    setHasError(!!error);
  }, [error]);

  const handleTextInput = (event: ChangeEvent<HTMLInputElement>) => {
    const newValue = event.target.value.trim();
    setValue(newValue);
    onChange?.(event);
    const isValueValid = isValid(newValue);
    setHasError(!isValueValid);
    onValid?.(isValueValid);
  };

  return (
    <PasswordField
      className={cn}
      {...props}
      label={label}
      value={value}
      onChange={handleTextInput}
      info={<List list={getValidations(value)} className="password-strong-field__info" />}
    />
  );
};

export default PasswordStrongField;
