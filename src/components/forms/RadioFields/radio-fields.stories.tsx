import type { ComponentMeta, ComponentStory } from "@storybook/react";

import RadioFields from "./radio-fields.component";

const OPTIONS = [
  { label: "1x sem Juros", value: 1 },
  { label: "2x sem Juros", value: 2 },
  { label: "3x sem Juros", value: 3 },
  { label: "4x sem Juros", value: 4 },
  { label: "5x sem Juros", value: 5 },
];

export default {
  title: "Forms/RadioFields",
  component: RadioFields,
  argTypes: {
    name: {
      control: { type: "text" },
    },
    options: {
      control: {},
    },
  },
} as ComponentMeta<typeof RadioFields>;

const Template: ComponentStory<typeof RadioFields> = (args) => <RadioFields {...args} />;

const DefaultArgs = {
  name: "radio-fields",
  options: OPTIONS,
  disabled: false,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Checked = Template.bind({});
Checked.args = { ...DefaultArgs, name: "radio-fields-checked", defaultOption: OPTIONS[1] };

export const Disabled = Template.bind({});
Disabled.args = {
  ...DefaultArgs,
  name: "radio-fields-disabled",
  defaultOption: OPTIONS[1],
  disabled: true,
};
