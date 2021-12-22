import { useState } from "react";
import { PasswordFieldType, PasswordIconName, PasswordFieldProps } from ".";
import TextField from "@/components/forms/TextField";

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
