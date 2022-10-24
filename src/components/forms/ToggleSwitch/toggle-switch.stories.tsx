import type { ComponentMeta, ComponentStory } from "@storybook/react";

import ToggleSwitch from "./toggle-switch.component";

export default {
  title: "Forms/ToggleSwitch",
  component: ToggleSwitch,
  argTypes: {
    onChange: {
      description: "This function return this internal checked status",
      control: { type: "function" },
      defaultValue: undefined,
      action: "onChange",
    },
  },
} as ComponentMeta<typeof ToggleSwitch>;

const Template: ComponentStory<typeof ToggleSwitch> = (args) => <ToggleSwitch {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Ativar as notificações de redações",
  defaultChecked: true,
  disabled: false,
  id: "toggle-switch",
};
