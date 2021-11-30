import type { ComponentMeta, ComponentStory } from "@storybook/react";
import icons from "../Icon/lib";
import DropdownMenuItem from "./dropdown-menu-item.component";

export default {
  title: "Components/DropdownMenuItem",
  component: DropdownMenuItem,
  argTypes: {
    iconName: {
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

export const WithIcon = Template.bind({});
WithIcon.args = {
  children: "Item de Menu",
  iconName: "me-salva-mini",
};
