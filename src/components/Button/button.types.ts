import { Sizes, Variants } from '../../types'

export interface ButtonProps
  extends Omit<React.HTMLProps<HTMLButtonElement | HTMLLinkElement | HTMLElement>, 'as' | 'size'> {
  as?: JSX.Element
  variant?: Variants
  label?: string
  size?: Sizes
}
