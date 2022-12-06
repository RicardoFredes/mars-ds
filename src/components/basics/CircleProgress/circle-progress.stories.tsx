import type { ComponentMeta, ComponentStory } from "@storybook/react";

import CircleProgress from "./circle-progress.component";

export default {
  title: "Components/Stepper/CircleProgress",
  component: CircleProgress,
  parameters: {
    docs: {
      source: {
        code: `{
          "component": "CircleProgress",
          "position": "4",
          "steps": ["Identificação", "Adicionais", "Pagamento", "Endereço de Cobrança", "Resumo"],
          "color": "var(--color-medicina-500)",
          "showInfo": false
        }`,
        language: "json",
        type: "code",
      },
    },
  },
  argTypes: {
    position: {
      control: { type: "number" },
      description:
        'O número indicando a posição do passo. Ex.: Se colocar 2 e a array "steps" tiver 3 elementos "67%" será exibido',
    },
    steps: {
      control: { type: "array" },
      description:
        'Uma array onde cada elemento é o texto que será exibido.: Ex.: ["Identificação", "Adicionais", "Pagamento", "Endereço de Cobrança", "Resumo"]',
    },
    showInfo: {
      control: { type: "boolean" },
      description: "Se deve mostrar o texto do passo atual e próximo. O padrão é true",
    },
    color: {
      control: { type: "text" },
      description:
        "A cor da porcentagem e da parte preenchida do círculo. O padrão é var(--color-success-700). Ex.: var(--color-humanas-500), #FAF, ou rgba(127, 0, 0, 0.75)",
    },
  },
} as ComponentMeta<typeof CircleProgress>;

const Template: ComponentStory<typeof CircleProgress> = (args) => (
  <CircleProgress style={{ maxWidth: 320 }} {...args} />
);

const DefaultArgs = {
  position: 4,
  steps: ["Identificação", "Adicionais", "Pagamento", "Endereço de Cobrança", "Resumo"],
  showInfo: true,
  color: "var(--color-success-700)",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

const CustomColorArgs = {
  ...DefaultArgs,
  color: "var(--color-medicina-500)",
};

export const CustomColor = Template.bind({});
CustomColor.args = CustomColorArgs;

const HidingInfoArgs = {
  ...DefaultArgs,
  showInfo: false,
};

export const HidingInfo = Template.bind({});
HidingInfo.args = HidingInfoArgs;
