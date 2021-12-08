import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Radio from "./";

export default {
  title: "Forms/RadioList/RadioItem",
  component: Radio,
  argTypes: {
    label: {
      control: { type: "text" },
    },
    name: {
      control: { type: "text" },
    },
    id: {
      control: { type: "text" },
    },
    disabled: {
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

const DefaultArgs = {
  label: "Primeiro Radio",
  name: "radio",
  id: "radio",
  disabled: false,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Checked = Template.bind({});
Checked.args = {
  ...DefaultArgs,
  defaultChecked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...DefaultArgs,
  disabled: true,
};
