import type { ComponentMeta, ComponentStory } from "@storybook/react";

import DropdownMenu from "./";

export default {
  title: "Components/DropdownMenu",
  component: DropdownMenu,
  argTypes: {},
} as ComponentMeta<typeof DropdownMenu>;

const Template: ComponentStory<typeof DropdownMenu> = (args) => <DropdownMenu {...args} />;

export const Default = Template.bind({});
Default.args = {
  list: Array(4).fill({ label: "Item de Menu" }),
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  list: Array(4).fill({ label: "Item de Menu", leftIconName: "me-salva-mini" }),
};

export const Scroller = Template.bind({});
Scroller.args = {
  list: Array(10).fill({ label: "Item de Menu" }),
};
