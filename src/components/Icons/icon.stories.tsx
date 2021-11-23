import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Sizes } from "../../types";
import Icon from "./icon.components";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    color: {
      control: { type: 'color' }
    },
    size: {
      options: Sizes,
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "brand",
  size: Sizes.Small,
  color: '#ed4343'
};
