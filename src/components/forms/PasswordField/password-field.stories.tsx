import type { ComponentMeta, ComponentStory } from "@storybook/react";
import PasswordField from "./";

export default {
  title: "Forms/PasswordField",
  component: PasswordField,
  argTypes: {},
} as ComponentMeta<typeof PasswordField>;

const Template: ComponentStory<typeof PasswordField> = (args) => <PasswordField {...args} />;

const DefaultArgs = {
  label: "Senha",
  disabled: false,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Filled = Template.bind({});
Filled.args = {
  ...DefaultArgs,
  value: "senha-super-secreta",
};
