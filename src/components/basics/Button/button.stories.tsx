import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { SizesEnum, VariantsEnum } from "@/types";
import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: VariantsEnum,
      control: { type: "select" },
    },
    size: {
      options: SizesEnum,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const PrimaryArgs = {
  variant: VariantsEnum.Primary,
  size: SizesEnum.Medium,
  children: "Primary Button",
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = PrimaryArgs;

export const Secondary = Template.bind({});
Secondary.args = {
  ...PrimaryArgs,
  variant: VariantsEnum.Secondary,
  children: "Secondary Button",
};

export const Neutral = Template.bind({});
Neutral.args = {
  ...PrimaryArgs,
  variant: VariantsEnum.Neutral,
  children: "Neutral Button",
};

export const Text = Template.bind({});
Text.args = {
  ...PrimaryArgs,
  variant: VariantsEnum.Text,
  children: "Text Button",
};
