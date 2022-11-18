import type { ComponentMeta, ComponentStory } from "@storybook/react";

import IncrementField from "./increment-field.component";
import { formatMinutesAsXhYmin } from "./increment-field.helper";

export default {
  title: "Forms/IncrementField",
  component: IncrementField,
  argTypes: {
    defaultValue: {
      control: { type: "number" },
      description: "O valor inicial",
      defaultValue: 0,
    },
    step: {
      control: { type: "number" },
      description: "De quanto em quanto é incrementado/decrementado por vez",
      defaultValue: 1,
    },
    min: {
      control: { type: "number" },
      description: "O valor mínimo que é possível atingir ao decrementar",
      defaultValue: 0,
    },
    max: {
      control: { type: "number" },
      description: "O valor máximo que é possível atingir ao incrementar",
      defaultValue: 24,
    },
    formatValue: {
      description: "A função responsável por formatar o valor para exibição",
    },
    onChange: {
      description:
        "A função que é chamada após o valor ser alterado. No primeiro parâmetro recebe o valor e no segundo o valor formatado",
    },
  },
  parameters: {
    docs: {
      source: {
        code: `{
          "component": "IncrementField",
          "defaultValue": 0,
          "step": 1,
          "min": 0,
          "max": 24,
        }`,
        language: "json",
        type: "code",
      },
    },
  },
} as ComponentMeta<typeof IncrementField>;

const Template: ComponentStory<typeof IncrementField> = (args) => <IncrementField {...args} />;

const DefaultArgs = {
  defaultValue: 0,
  step: 1,
  min: 0,
  max: 24,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Fifteen_Minutes_Increment = Template.bind({});
Fifteen_Minutes_Increment.args = {
  ...DefaultArgs,
  defaultValue: 150,
  step: 15,
  min: 0,
  max: 1440,
  formatValue: formatMinutesAsXhYmin,
};
