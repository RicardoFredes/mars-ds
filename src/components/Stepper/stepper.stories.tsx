import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Stepper from "./stepper.component";

export default {
  title: "Components/Stepper",
  component: Stepper,
  argTypes: {
    steps: {
      control: { type: "input" },
    },
    currentPosition: {
      control: { type: "number" },
    },
  },
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args} />;

const DefaultArgs = {
  steps: ["Identificação", "Adicionais", "Pagamento", "Endereço", "Resumo"],
  currentPosition: 3,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
