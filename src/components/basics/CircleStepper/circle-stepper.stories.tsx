import type { ComponentMeta, ComponentStory } from "@storybook/react";

import CircleStepper from "./circle-stepper.component";

export default {
  title: "Components/Stepper/CircleStepper",
  component: CircleStepper,
  argtypes: {
    steps: {
      control: { type: "array" },
    },
    position: {
      control: { type: "number" },
    },
    hideInfo: {
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof CircleStepper>;

const Template: ComponentStory<typeof CircleStepper> = (args) => (
  <CircleStepper style={{ maxWidth: 320 }} {...args} />
);

const DefaultArgs = {
  steps: ["Identificação", "Adicionais", "Pagamento", "Endereço de Cobrança", "Resumo"],
  position: 1,
  hideInfo: false,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const WithouthInfo = Template.bind({});
WithouthInfo.args = { ...DefaultArgs, hideInfo: true };
