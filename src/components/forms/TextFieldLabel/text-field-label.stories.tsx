import type { ComponentMeta, ComponentStory } from "@storybook/react";
import type { FocusEvent } from "react";

import { useState } from "react";

import {
  LabelSubjectVariants,
  LabelThemes,
  LabelVariants,
} from "@/components/basics/Label/label.types";

import TextFieldLabel from "./text-field-label.component";

export default {
  title: "Forms/TextFieldLabel",
  component: TextFieldLabel,
  argTypes: {
    theme: {
      options: Object.values(LabelThemes),
      control: { type: "select" },
    },
    variant: {
      options: Object.values(LabelVariants),
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof TextFieldLabel>;

const Template: ComponentStory<typeof TextFieldLabel> = (args) => {
  const [error, setError] = useState(args.error || false);

  const onBlur = (event: FocusEvent<HTMLInputElement, Element>) => {
    const { value } = event.target;
    if (value.length === 0) setError("O preenchimento do nome é obrigatório");
    else if (value.length <= 3) setError("O nome deve ter mais de três letras");
    else setError("");
  };

  return <TextFieldLabel {...args} error={error} onBlur={onBlur} />;
};

const DefaultArgs = {
  name: "name",
  type: "text",
  label: "Nome",
  disabled: false,
  error: "",
  value: "",
  theme: LabelThemes.Solid,
  variant: LabelVariants.Primary,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const LeftIcon = Template.bind({});
LeftIcon.args = {
  ...DefaultArgs,
  leftIconButton: {
    name: "me-salva-mini",
  },
};

export const RightIcon = Template.bind({});
RightIcon.args = {
  ...DefaultArgs,
  rightIconButton: {
    name: "me-salva-mini",
  },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...DefaultArgs,
  value: "Marllon Pereira",
  disabled: true,
};

export const Error = Template.bind({});
Error.args = {
  ...DefaultArgs,
  error: "O nome deve ter mais de três letras",
  value: "Abc",
};

export const Info = Template.bind({});
Info.args = {
  ...DefaultArgs,
  label: "Nome completo",
  info: "Digite o nome conforme o que consta na sua carteira de identidade",
};

export const Success = Template.bind({});
Success.args = {
  ...DefaultArgs,
  success: true,
  value: "Ricardo Fredes",
};

export const MaskPattern: ComponentStory<typeof TextFieldLabel> = (args) => (
  <TextFieldLabel {...args} />
);
MaskPattern.args = {
  ...DefaultArgs,
  label: "Telefone",
  mask: ["(99) 9999-9999", "(99) 99999-9999"],
  info: "O telefone deve conter 10 ou 11 dígitos",
};
