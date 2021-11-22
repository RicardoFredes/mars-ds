import React from 'react'

enum Variants {
  Primary = 'primary',
  Secondary = 'secondary',
  Negative = 'negative'
}

enum Sizes {
  Small = 'small',
  Medium = 'medium',
  Large = 'large'
}

interface ButtonProps {
  variant?: Variants
  size?: Sizes
  href?: string
  onClick?: () => void
}

export const Button = (props: ButtonProps) => {
  return <button>oi</button>
}
