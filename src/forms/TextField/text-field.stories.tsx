import { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import TextField from "./text-field.component";

export default {
  title: "Form/TextField",
  component: TextField,
  argTypes: {
  },
} as ComponentMeta<typeof TextField>;

const Template: ComponentStory<typeof TextField> = (args) => {
  const [error, setError] = useState(args.error)

  const onBlur = event => {
    const {value} = event.target
    if (value.length === 0) setError('O preenchimento do nome é obrigatório')
    else if (value.length <= 3) setError('O nome deve ter mais de três letras')
    else setError('')
  }

  return <TextField {...args} error={error} onBlur={onBlur} />
};

const DefaultArgs = {
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

export const Info = Template.bind({})
Info.args = {
  ...DefaultArgs,
  label: 'Nome completo',
  info: "Digite o nome conforme o que consta na sua carteira de identidade",
}