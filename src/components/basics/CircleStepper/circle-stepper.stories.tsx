import type { ComponentMeta, ComponentStory } from "@storybook/react";
import CircleStepper from "./";

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
  },
} as ComponentMeta<typeof CircleStepper>;

const Template: ComponentStory<typeof CircleStepper> = (args) => (
  <CircleStepper style={{ maxWidth: 320 }} {...args} />
);

const DefaultArgs = {
  steps: ["Identificação", "Adicionais", "Pagamento", "Endereço de Cobrança", "Resumo"],
  position: 1,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
