import type { ComponentMeta, ComponentStory } from "@storybook/react";

import DropdownMenu from "./dropdown-menu.component";

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

export const WithIcon = Template.bind({});
WithIcon.args = {
  list: Array(4).fill({ label: "Item de Menu", iconName: "me-salva-mini" }),
};

export const WithScroll = Template.bind({});
WithScroll.args = {
  list: Array(10).fill({ label: "Item de Menu" }),
};

