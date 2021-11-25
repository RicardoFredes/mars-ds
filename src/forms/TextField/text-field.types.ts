interface IconButtonField {
  iconName: string
}

export interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  error?: string | boolean
  initialIconButton?: IconButtonField
  endIconButton?: IconButtonField
}
