import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Variants } from "../../types";
import Button from "./button.component";
import { ButtonSizes } from "./button.types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: Variants,
      control: { type: "select" },
    },
    size: {
      options: ButtonSizes,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const PrimaryArgs = {
  variant: Variants.Primary,
  size: ButtonSizes.Medium,
  children: "Primary Button",
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = PrimaryArgs;

export const Secondary = Template.bind({});
Secondary.args = {
  ...PrimaryArgs,
  variant: Variants.Secondary,
  children: "Secondary Button",
};

export const Neutral = Template.bind({});
Neutral.args = {
  ...PrimaryArgs,
  variant: Variants.Neutral,
  children: "Neutral Button",
};

export const Text = Template.bind({});
Text.args = {
  ...PrimaryArgs,
  variant: Variants.Text,
  children: "Text Button",
};
