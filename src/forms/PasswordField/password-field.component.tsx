import { PasswordFieldType, PasswordIconName, PasswordFieldProps } from "./password-field.types";

import { useState } from "react";
import TextField from "../TextField/text-field.component";

const PasswordField = (props: PasswordFieldProps) => {
  const [type, setType] = useState(PasswordFieldType.Hidden);

  const isVisible = type === PasswordFieldType.Hidden;

  const toggleReveal = () => {
    if (props.disabled) return;
    isVisible ? setType(PasswordFieldType.Visible) : setType(PasswordFieldType.Hidden);
  };

  const rightIconButton = {
    name: isVisible ? PasswordIconName.Visible : PasswordIconName.Hidden,
    onClick: toggleReveal,
  };

  return <TextField {...props} rightIconButton={rightIconButton} type={type} />;
};

export default PasswordField;
