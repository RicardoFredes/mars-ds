import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Stepper from "./";

export default {
  title: "Components/Stepper",
  component: Stepper,
  argTypes: {
    steps: {
      control: { type: "input" },
    },
    position: {
      control: { type: "number" },
    },
  },
} as ComponentMeta<typeof Stepper>;

const Template: ComponentStory<typeof Stepper> = (args) => <Stepper {...args} />;

const DefaultArgs = {
  steps: ["Identificação", "Adicionais", "Pagamento", "Endereço", "Resumo"],
  position: 3,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
