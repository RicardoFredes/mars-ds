import type { ComponentMeta, ComponentStory } from "@storybook/react";

import SelectField from ".";
import { optionsMocked } from "./select-field.fixtures";

export default {
  title: "Forms/SelectField",
  component: SelectField,
  argTypes: {
    className: {
      description: "The class name of the component receives the same 'classnames' props",
      control: { type: "object" },
    },
    style: {
      description: "The style of the component receives the same 'style' props",
      control: { type: "object" },
    },
    label: {
      description: "The label of the select field",
      control: { type: "text" },
      defaultValue: "",
    },
    enableFilter: {
      description: "Enable the search filter",
      control: { type: "boolean" },
      defaultValue: false,
    },
    disabled: {
      description: "Disable the select field",
      control: { type: "boolean" },
      defaultValue: false,
    },
    defaultOption: {
      description: "The default option",
      control: { type: "object" },
      defaultValue: undefined,
    },
    onSelect: {
      description: "The callback when an option is selected returns the selected option",
      control: { type: "function" },
      defaultValue: undefined,
      action: "onSelect",
    },
    options: {
      description: "The options of the select field: Array<{ label: string; value: any }>",
      control: { type: "array" },
      defaultValue: undefined,
    },
  },
} as ComponentMeta<typeof SelectField>;

const Template: ComponentStory<typeof SelectField> = (args) => <SelectField {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "Modalidade de acesso",
  enableFilter: false,
  disabled: false,
  options: [
    { label: "Ampla Concorrência", value: 1 },
    { label: "Candidato Afrodescendente, Indígena ou Transsexual", value: 2 },
    { label: "Candidato com Deficiência", value: 3 },
    { label: "Candidato egresso de escola pública, carente", value: 4 },
    { label: "Candidato egresso de escola pública", value: 5 },
  ],
};

export const Filter = Template.bind({});
Filter.args = { disabled: false, enableFilter: true, options: optionsMocked, label: "Cursos" };

export const OptionSelected = Template.bind({});
OptionSelected.args = {
  disabled: false,
  enableFilter: true,
  options: optionsMocked,
  label: "Cursos",
  defaultOption: { label: "Design de Produto", value: 27 },
};
