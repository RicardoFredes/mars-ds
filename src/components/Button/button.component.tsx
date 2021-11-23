import React from 'react'
import { ButtonProps } from './button.types'

const Button = (props: ButtonProps) => {
  return <button className="btn">{props.label} <span>yes</span></button>
}

export default Button