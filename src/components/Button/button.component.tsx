import React from 'react'
import classNames from 'classnames'
import { ButtonProps } from './button.types'
import { Sizes, Variants } from '../../types'

const Button = ({
  as,
  children,
  className,
  label,
  onClick,
  variant = Variants.Primary,
  size = Sizes.Medium,
  ...props
}: ButtonProps) => {
  const ButtonTag = as || props.href ? HTMLLink : HTMLButton
  const handleClick = event => {
    if (props.disabled) return
    onClick?.(event)
  }

  const cn = classNames('btn', `btn_${variant}`, `btn_${size}`, className)

  return (
    <ButtonTag className={cn} onClick={handleClick} {...props}>
      {label || children}
    </ButtonTag>
  )
}

const HTMLLink = props => <a {...props} />
const HTMLButton = props => <button {...props} />

export default Button
