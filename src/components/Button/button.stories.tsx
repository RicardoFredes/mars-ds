import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './button.component';
import { Sizes, Variants } from "../../types";

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {
    variant: {
      options: Variants,
      control: { type: 'select' }
    },
    size: {
      options: Sizes,
      control: { type: 'select' }
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: Variants.Primary,
  size: Sizes.Medium,
  children: 'Primary Button',
  disabled: false,
};

export const Secondary = Template.bind({});
Secondary.args = {
  variant: Variants.Secondary,
  size: Sizes.Medium,
  children: 'Secondary Button',
  disabled: false,
};

export const Neutral = Template.bind({});
Neutral.args = {
  variant: Variants.Neutral,
  size: Sizes.Medium,
  children: 'Neutral Button',
  disabled: false,
};

export const Text = Template.bind({});
Text.args = {
  variant: Variants.Text,
  size: Sizes.Medium,
  children: 'Text Button',
  disabled: false,
};
