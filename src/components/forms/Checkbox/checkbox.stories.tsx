import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Checkbox from "./checkbox.component";

export default {
  title: "Form/Checkbox",
  component: Checkbox,
  argTypes: {},
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => <Checkbox {...args} />;

const DefaultArgs = {
  label: "Concordo com os termos de uso",
  defaultChecked: false,
  disabled: false,
  id: "checkbox",
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
  defaultChecked: true,
  disabled: true,
};
