import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { SizesEnum, VariantsEnum } from "@/types";
import IconButton from "./icon-button.component";

export default {
  title: "Components/IconButton",
  component: IconButton,
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
} as ComponentMeta<typeof IconButton>;

const Template: ComponentStory<typeof IconButton> = (args) => <IconButton {...args} />;

const PrimaryArgs = {
  variant: VariantsEnum.Primary,
  size: SizesEnum.Medium,
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
  variant: VariantsEnum.Secondary,
};

export const Neutral = Template.bind({});
Neutral.args = {
  ...PrimaryArgs,
  children: "Neutral Button",
  variant: VariantsEnum.Neutral,
};

export const Text = Template.bind({});
Text.args = {
  ...PrimaryArgs,
  children: "Text Button",
  variant: VariantsEnum.Text,
};
