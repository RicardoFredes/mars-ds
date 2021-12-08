import type { ComponentMeta, ComponentStory } from "@storybook/react";
import ToggleSwitch from "./";

export default {
  title: "Forms/ToggleSwitch",
  component: ToggleSwitch,
  argTypes: {},
} as ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Ativar as notificações de redações",
  defaultChecked: true,
  disabled: false,
  id: "toggle-switch",
};
