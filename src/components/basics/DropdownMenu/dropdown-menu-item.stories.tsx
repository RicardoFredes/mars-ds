import type { ComponentMeta, ComponentStory } from "@storybook/react";
import icons from "../Icon/lib";
import DropdownMenuItem from "./dropdown-menu-item.component";

export default {
  title: "Components/DropdownMenu/DropdownMenuItem",
  component: DropdownMenuItem,
  argTypes: {
    leftIconName: {
      options: Object.keys(icons),
      control: { type: "select" },
    },
    rightIconName: {
      options: Object.keys(icons),
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof DropdownMenuItem>;

const Template: ComponentStory<typeof DropdownMenuItem> = (args) => <DropdownMenuItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Item de Menu",
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  children: "Item de Menu",
  leftIconName: "me-salva-mini",
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  children: "Item de Menu",
  rightIconName: "me-salva-mini",
};
