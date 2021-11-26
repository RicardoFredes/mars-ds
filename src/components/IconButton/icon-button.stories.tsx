import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Sizes, Variants } from "@/types";
import IconButton from "./icon-button.component";

export default {
  title: "Components/IconButton",
  component: IconButton,
  argTypes: {
    variant: {
      options: Variants,
      control: { type: "select" },
    },
    size: {
      options: Sizes,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

const PrimaryArgs = {
  variant: Variants.Primary,
  size: Sizes.Medium,
  children: "Primary Button",
  disabled: false,
  iconName: "me-salva-mini",
};

export const Primary = Template.bind({});
Primary.args = PrimaryArgs;

export const Secondary = Template.bind({});
Secondary.args = {
  ...PrimaryArgs,
  children: "Secondary Button",
  variant: Variants.Secondary,
};

export const Neutral = Template.bind({});
Neutral.args = {
  ...PrimaryArgs,
  children: "Neutral Button",
  variant: Variants.Neutral,
};

export const Text = Template.bind({});
Text.args = {
  ...PrimaryArgs,
  children: "Text Button",
  variant: Variants.Text,
};
