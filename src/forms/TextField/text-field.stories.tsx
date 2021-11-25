import { ComponentMeta, ComponentStory } from "@storybook/react";
import TextField from "./text-field.component";

export default {
  title: "Form/TextField",
  component: TextField,
  argTypes: {
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

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
