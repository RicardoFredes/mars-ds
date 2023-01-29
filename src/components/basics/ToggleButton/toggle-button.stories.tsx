import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ButtonSizes } from "@/components/basics/Button";
import icons from "@/components/basics/Icon/lib";

import { ICONS } from "@/configs/icons.config";
import ToggleButton from "./toggle-button.component";

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
  argTypes: {
    size: {
      options: Object.values(ButtonSizes),
      control: { type: "select" },
    },
    iconName: {
      options: Object.keys(icons),
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof ToggleButton>;

const ICON_NAME = ICONS.STORIES.DEFAULT;
const Template: ComponentStory<typeof ToggleButton> = (args) => <ToggleButton {...args} />;

const DefaultArgs = {
  iconName: ICON_NAME,
  size: ButtonSizes.Medium,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Small = Template.bind({});
Small.args = {
  ...DefaultArgs,
  size: ButtonSizes.Small,
};
