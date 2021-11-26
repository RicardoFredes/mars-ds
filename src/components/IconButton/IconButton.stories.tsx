import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Variants } from "../../types";
import IconButton from "./IconButton.component"
import { IconButtonSizes } from "./IconButton.types"

export default {
    title: "Component/IconButton",
    component: IconButton,
    argTypes: {
        variant: {
          options: Variants,
          control: { type: "select" },
        },
        size: {
          options: IconButtonSizes,
          control: { type: "select" },
        },
      },

} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

const PrimaryArgs = {
    variant: Variants.Primary,
    size: IconButtonSizes.Medium,
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
