import { ComponentMeta, ComponentStory } from "@storybook/react";
import Input from "./input.component";

export default {
  title: "Components/Input",
  component: Input,
  argTypes: {
  },
} as ComponentMeta<typeof Input>;

const Template: ComponentStory<typeof Input> = (args) => <Input {...args} />;

const DefaultArgs = {
  placeholder: "Digite o seu nome",
  name: "title",
  type: "text",
  label: "Nome",
  disabled: false,
  error: '',
  defaultValue: ''
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Error = Template.bind({});
Error.args = {
  ...DefaultArgs,
  error: 'O nome deve ter mais de três letras',
  defaultValue: 'Abc'
};
