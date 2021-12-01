import type { ComponentMeta, ComponentStory } from "@storybook/react";
import SelectField from "./select-field.component";

export default {
  title: "Form/SelectField",
  component: SelectField,
  argTypes: {},
} as ComponentMeta<typeof SelectField>;

const Template: ComponentStory<typeof SelectField> = (args) => <SelectField {...args} />;

const DefaultArgs = {
  label: "Modalidade de acesso",
  disabled: false,
  options: [
    { label: "Ampla Concorrência", value: 1 },
    { label: "Candidato Afrodescendente, Indígena ou Transsexual", value: 2 },
    { label: "Candidato com Deficiência", value: 3 },
    { label: "Candidato egresso de escola pública, carente", value: 4 },
    { label: "Candidato egresso de escola pública", value: 5 },
  ],
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
