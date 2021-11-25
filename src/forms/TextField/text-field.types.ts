export { IconProps } from '../../components/Icon/icon.types'
import { IconProps } from '../../components/Icon/icon.types'

export interface TextFieldProps extends React.HTMLProps<HTMLInputElement> {
  label: string;
  error?: string | boolean
  sucess?: boolean
  rightIconButton?: IconProps
  leftIconButton?: IconProps
}
