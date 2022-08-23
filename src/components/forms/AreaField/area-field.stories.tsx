import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { commonStoreComponentProps } from "../../../services/stories";
import AreaField from "./area-field.component";

export default {
  title: "Forms/AreaField",
  component: AreaField,
  argTypes: {
    name: {
      description: "The name of the area field",
      control: { type: "text" },
      defaultValue: "",
    },
    label: {
      description: "The label of the area field",
      control: { type: "text" },
      defaultValue: "",
    },
    value: {
      description: "The value of the area field",
      control: { type: "text" },
      defaultValue: "",
    },
    disabled: {
      description: "Disable the area field",
      control: { type: "boolean" },
      defaultValue: false,
    },
    info: {
      description: "The text info of the area field",
      control: { type: "text" },
      defaultValue: "",
    },
    error: {
      description: "The error of the area field: string or boolean",
      control: { type: "text" },
      defaultValue: "",
    },
    success: {
      description: "Success the area field",
      control: { type: "boolean" },
      defaultValue: false,
    },
    maxLength: {
      description: "The max length accept for area field",
      control: { type: "number" },
      defaultValue: undefined,
    },
    minLength: {
      description: "The min length required for area field",
      control: { type: "number" },
      defaultValue: undefined,
    },
    required: {
      description: "Required filled area field",
      control: { type: "boolean" },
      defaultValue: false,
    },
    ...commonStoreComponentProps,
  },
} as ComponentMeta<typeof AreaField>;

const Template: ComponentStory<typeof AreaField> = (args) => <AreaField {...args} />;

const DefaultArgs = {
  name: "message",
  id: "message-textarea",
  label: "Justificativa",
  disabled: false,
  value:
    "Você já enviou essa redação para a nossa plataforma e os nossos corretores deram o máximo de atenção a ela. Como o treino é a principal chave para a escrita, nossa dica é que, ao invés de apenas reenviar o mesmo texto, você coloque em prática os comentários dos nossos corretores para atingir cada vez uma nota mais alta!",
  required: false,
  error: "",
  info: "",
  success: false,
  maxLength: undefined,
  minLength: undefined,
  showCounter: false,
};

export const Default = Template.bind({});
Default.args = { ...DefaultArgs, value: "" };

export const Disabled = Template.bind({});
Disabled.args = {
  ...DefaultArgs,
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  ...DefaultArgs,
  error: "Sua mensagem deve conter ao menos 50 caracteres",
  value: "Fiquei com uma dúvida no exercício",
  minLength: 50,
  showCounter: true,
};

export const Info = Template.bind({});
Info.args = {
  ...DefaultArgs,
  label: "Sobre",
  info: "Descreva a sua personalidade e o que gosta de fazer no tempo livre",
};

export const Success = Template.bind({});
Success.args = {
  ...DefaultArgs,
  success: true,
};

export const WithCounter = Template.bind({});
WithCounter.args = {
  ...DefaultArgs,
  maxLength: 340,
  showCounter: true,
};
