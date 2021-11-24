import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Sizes } from "../../types";
import Icon from "./icon.components";
import icons from "./lib";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    color: {
      control: { type: 'color' }
    },
    name: {
      options: Object.keys(icons),
      control: {type: 'select'}
    },
    size: {
      options: Sizes,
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ color, ...args }) => <Icon style={{ color }} {...args} />;

export const Default = Template.bind({});
Default.args = {
  name: "me-salva-mini",
  size: Sizes.Medium
};
