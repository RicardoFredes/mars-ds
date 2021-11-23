import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Button from './button.component';
import { Variants } from "../../types/variants";

export default {
  title: 'Components/Button',
  component: Button,
  argTypes: {},
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  variant: Variants.Primary,
  label: 'Button',
};