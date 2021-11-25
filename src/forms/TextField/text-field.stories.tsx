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
  value: '',
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Error = Template.bind({});
Error.args = {
  ...DefaultArgs,
  error: 'O nome deve ter mais de três letras',
  value: 'Abc',
};

export const Sucess = Template.bind({});
Sucess.args = {
  ...DefaultArgs,
  sucess: true,
  value: 'Ricardo Fredes',
};

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  ...DefaultArgs,
  leftIconButton: {
    name: 'me-salva-mini'
  },
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  ...DefaultArgs,
  rightIconButton: {
    name: 'me-salva-mini'
  },
};
