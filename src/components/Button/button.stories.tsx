import React from 'react'
import { ComponentStory, ComponentMeta } from '@storybook/react'

import Button from './button.component'
import { Sizes, Variants } from '../../types'

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: Variants,
      control: { type: 'radio' },
    },
    size: {
      options: Sizes,
      control: { type: 'radio' },
    },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

const PrimaryArgs = {
  variant: Variants.Primary,
  size: Sizes.Medium,
  children: 'Primary Button',
  disabled: false,
}

export const Primary = Template.bind({})
Primary.args = PrimaryArgs

export const Secondary = Template.bind({})
Secondary.args = {
  ...PrimaryArgs,
  variant: Variants.Secondary,
  children: 'Secondary Button',
}

export const Neutral = Template.bind({})
Neutral.args = {
  ...PrimaryArgs,
  variant: Variants.Neutral,
  children: 'Neutral Button',
}

export const Text = Template.bind({})
Text.args = {
  ...PrimaryArgs,
  variant: Variants.Text,
  children: 'Text Button',
}
