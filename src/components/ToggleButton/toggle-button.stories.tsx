import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { SizesEnum } from "@/types";
import icons from "../Icon/lib";
import ToggleButton from "./toggle-button.component";

export default {
  title: "Components/ToggleButton",
  component: ToggleButton,
  argTypes: {
    size: {
      options: SizesEnum,
      control: { type: "select" },
    },
    iconName: {
      options: Object.keys(icons),
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof ToggleButton>;

const Template: ComponentStory<typeof ToggleButton> = (args) => <ToggleButton {...args} />;

const DefaultArgs = {
  iconName: "me-salva-mini",
  size: SizesEnum.Medium,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Small = Template.bind({});
Small.args = {
  ...DefaultArgs,
  size: SizesEnum.Small,
};
