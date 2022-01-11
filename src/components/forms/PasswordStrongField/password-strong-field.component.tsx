import { ChangeEvent, useState } from "react";
import classNames from "classnames";

import PasswordField from "@/components/forms/PasswordField";
import Icon from "@/components/basics/Icon";
import Text from "@/components/typographics/Text";

import Tokens from "@/tokens";
import { PasswordStrongFieldProps } from "./password-strong-field.types";
import {
  isStrongPassword,
  validateCapitalLetters,
  validateMin10Length,
  validateSpecialCharacters,
} from "@/services/validate";

const PasswordStrongField = ({
  className,
  label = "Senha",
  value,
  style,
  onValid,
  ...props
}: PasswordStrongFieldProps) => {
  const cn = classNames("password-strong-field", className);
  const defaultValue = value || "";
  const [computedValue, setComputedValue] = useState(defaultValue);

  const handleTextInput = (event: ChangeEvent<HTMLInputElement>) => {
    setComputedValue(event.target.value.trim());
    onValid?.(isStrongPassword(computedValue));
  };

  return (
    <div className={cn} style={style}>
      <PasswordField label={label} {...props} value={computedValue} onChange={handleTextInput} />
      <div className="password-strong-field-validations">
        <p>
          {validateMin10Length(computedValue) ? (
            <Icon name="checkmark" style={{ color: Tokens.ColorSuccess700 }} />
          ) : (
            <Icon name="close" style={{ color: Tokens.ColorError500 }} />
          )}
          <Text as="span">No mínimo 10 caracteres</Text>
        </p>
        <p>
          {validateCapitalLetters(computedValue) ? (
            <Icon name="checkmark" style={{ color: Tokens.ColorSuccess700 }} />
          ) : (
            <Icon name="close" style={{ color: Tokens.ColorError500 }} />
          )}
          <Text as="span"> Uma letra maiúscula </Text>
        </p>

        <p>
          {validateSpecialCharacters(computedValue) ? (
            <Icon name="checkmark" style={{ color: Tokens.ColorSuccess700 }} />
          ) : (
            <Icon name="close" style={{ color: Tokens.ColorError500 }} />
          )}
          <Text as="span">Um caracter especial (@,!,#,$,%)</Text>
        </p>
      </div>
    </div>
  );
};
export default PasswordStrongField;
