import type { ComponentMeta, ComponentStory } from "@storybook/react";
import SubjectLabel from "./subject-label.component";
import { LabelSubjectVariants } from "../Label/label.types";

export default {
  title: "Components/SubjectLabel",
  component: SubjectLabel,
  argTypes: {
    variant: {
      options: LabelSubjectVariants,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof SubjectLabel>;

const Template: ComponentStory<typeof SubjectLabel> = (args) => <SubjectLabel {...args} />;

const MatematicaArgs = {
  variant: LabelSubjectVariants.Matematica,
  children: "Label",
};

export const Matematica = Template.bind({});
Matematica.args = MatematicaArgs;

export const Medicina = Template.bind({});
Medicina.args = {
  ...MatematicaArgs,
  variant: LabelSubjectVariants.Medicina,
};

export const Linguagens = Template.bind({});
Linguagens.args = {
  ...MatematicaArgs,
  variant: LabelSubjectVariants.Linguagens,
};

export const Humanas = Template.bind({});
Humanas.args = {
  ...MatematicaArgs,
  variant: LabelSubjectVariants.Humanas,
};

export const Natureza = Template.bind({});
Natureza.args = {
  ...MatematicaArgs,
  variant: LabelSubjectVariants.Natureza,
};

export const Redacao = Template.bind({});
Redacao.args = {
  ...MatematicaArgs,
  variant: LabelSubjectVariants.Redacao,
};
