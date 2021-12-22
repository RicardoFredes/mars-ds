import type { ComponentMeta, ComponentStory } from "@storybook/react";

import RadioList from "./radio-list.component";

const OPTIONS = [
  { label: "1x sem Juros", value: 1 },
  { label: "2x sem Juros", value: 2 },
  { label: "3x sem Juros", value: 3 },
  { label: "4x sem Juros", value: 4 },
  { label: "5x sem Juros", value: 5 },
];

export default {
  title: "Forms/RadioList",
  component: RadioList,
  argTypes: {
    name: {
      control: { type: "text" },
    },
    options: {
      control: {},
    },
  },
} as ComponentMeta<typeof RadioList>;

const Template: ComponentStory<typeof RadioList> = (args) => <RadioList {...args} />;

const DefaultArgs = {
  name: "radios",
  options: OPTIONS,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Checked = Template.bind({});
Checked.args = { ...DefaultArgs, name: "radios-checked", defaultOption: OPTIONS[1] };
