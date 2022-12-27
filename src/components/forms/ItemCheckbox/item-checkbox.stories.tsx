import type { ComponentMeta, ComponentStory } from "@storybook/react";

import ItemCheckbox from "./item-checkbox.component";

export default {
  title: "Forms/ItemCheckbox",
  component: ItemCheckbox,
  parameters: {
    docs: {
      source: {
        code: `{
          "component": "ItemCheckbox",
          "label": "Matemática"
        }`,
        language: "json",
        type: "code",
      },
    },
  },
  argTypes: {
    label: {
      description: "O texto do controle",
      control: { type: "text" },
    },
    html: {
      description: "Permite adicionar conteúdo HTML. Tem precedência sobre a label",
      control: { type: "text" },
    },
    onChange: {
      defaultValue: null,
      description: "A função a ser executada após a alteração de estado",
      control: {
        table: {
          disable: true,
        },
      },
    },
    checkRight: {
      description: "Posiciona a caixa de marcação à direita",
      defaultValue: false,
      control: { type: "boolean" },
    },
    full: {
      defaultValue: true,
      description:
        "Quando false o controle ocupa apenas o tamanho do seu conteúdo. Quando true ocupa todo o espaço disponível e gera uma quebra de linha",
      control: { type: "boolean" },
    },
    checked: {
      description: "Quando true a caixa é marcada",
      defaultValue: false,
      control: { type: "boolean" },
    },
    disabled: {
      description: "Desativa o elemento",
      defaultValue: false,
      control: { type: "boolean" },
    },
    iconLeft: {
      description:
        "O nome do ícone que será posicionado à esquerda. Quando vazio não adiciona nada",
      control: { type: "text" },
    },
    iconRight: {
      description: "O nome do ícone que será posicionado à direita. Quando vazio não adiciona nada",
      control: { type: "text" },
    },
    imgLeft: {
      description:
        "O link da imagem que será posicionada à esquerda. Quando vazio não adiciona nada. Ex.: https://cdn.mesalva.com/uploads/image/MjAyMi0xMi0yMyAyMTo0MDo0MCArMDAwMDMyNzU2NA%3D%3D%0A.png",
      control: { type: "text" },
    },
    imgRight: {
      description:
        "O link da imagem que será posicionada à direita. Quando vazio não adiciona nada. Ex.: https://cdn.mesalva.com/uploads/image/MjAyMi0xMi0yMyAyMTo0MDo0MCArMDAwMDMyNzU2NA%3D%3D%0A.png",
      control: { type: "text" },
    },
    imgWidth: {
      description: 'A largura da imagem, o padrão é 24px. Ex.: "32px", "128px", "4rem".',
      control: { type: "text" },
    },
    imgHeight: {
      description: 'A altura da imagem, o padrão é 24px. Ex.: "32px", "128px", "4rem".',
      control: { type: "text" },
    },
    iconLeftColor: {
      description:
        "A cor do ícone posicionado à esquerda. Ex.: #FAF ou var(--color-matematica-500)",
      control: { type: "text" },
    },
    iconRightColor: {
      description: "A cor do ícone posicionado à direita. Ex.: #FAF ou var(--color-matematica-500)",
      control: { type: "text" },
    },
    className: {
      description: "As classes a serem adicionadas, separadas por espaço.",
      defaultValue: "",
      control: { type: "text" },
    },
    style: {
      description:
        'O estilo a ser adicionado, em formato de objeto. Ex.: { maxWidth: "200px", backgroundColor: "yellowgreen" }',
      control: { type: "object" },
    },
  },
} as ComponentMeta<typeof ItemCheckbox>;

const Template: ComponentStory<typeof ItemCheckbox> = (args) => <ItemCheckbox {...args} />;
const TemplateMultiple: ComponentStory<typeof ItemCheckbox> = (args) => (
  <>
    <ItemCheckbox {...args} label="Matemática" />
    <ItemCheckbox {...args} label="Física" />
    <ItemCheckbox {...args} label="Geografia" />
  </>
);

const DefaultArgs = {
  label: "Matemática",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

const WithHTMLArgs = {
  ...DefaultArgs,
  label: "",
  html: "<b>Matemática</b>",
};

export const WithHTML = Template.bind({});
WithHTML.args = WithHTMLArgs;

const CheckOnTheRightArgs = {
  ...DefaultArgs,
  checkRight: true,
};

export const CheckOnTheRight = Template.bind({});
CheckOnTheRight.args = CheckOnTheRightArgs;

const DisabledArgs = {
  ...DefaultArgs,
  disabled: true,
};

export const Disabled = Template.bind({});
Disabled.args = DisabledArgs;

const FullArgs = {
  ...DefaultArgs,
  full: true,
  className: "mb-md",
};

export const Full = TemplateMultiple.bind({});
Full.args = FullArgs;

const SideBySideArgs = {
  ...DefaultArgs,
  full: false,
  className: "mr-md",
};

export const SideBySide = TemplateMultiple.bind({});
SideBySide.args = SideBySideArgs;

const DefaultCheckedArgs = {
  ...DefaultArgs,
  checked: true,
};

export const DefaultChecked = Template.bind({});
DefaultChecked.args = DefaultCheckedArgs;

const WithIconLeftArgs = {
  ...DefaultArgs,
  iconLeft: "matematica",
  iconLeftColor: "var(--color-matematica-500)",
};

export const WithIconLeft = Template.bind({});
WithIconLeft.args = WithIconLeftArgs;

const WithIconRightArgs = {
  ...DefaultArgs,
  iconRight: "humanas",
  iconRightColor: "var(--color-humanas-500)",
};

export const WithIconRight = Template.bind({});
WithIconRight.args = WithIconRightArgs;

const WithImageLeftArgs = {
  ...DefaultArgs,
  imgLeft:
    "https://cdn.mesalva.com/uploads/image/MjAyMi0wNS0wMyAyMjowMjozNiArMDAwMDgxNDQzNQ%3D%3D%0A.svg",
  imgWidth: "4rem",
  imgHeight: "4rem",
};

export const WithImageLeft = Template.bind({});
WithImageLeft.args = WithImageLeftArgs;

const WithImageRightArgs = {
  ...DefaultArgs,
  label: "Plano ENEM",
  full: false,
  imgRight:
    "https://cdn.mesalva.com/uploads/image/MjAyMi0xMC0zMSAxNzozMDowNiArMDAwMDYyNDA1OQ%3D%3D%0A.png",
  imgWidth: "8rem",
  imgHeight: "8rem",
};

export const WithImageRight = Template.bind({});
WithImageRight.args = WithImageRightArgs;

const LongTextArgs = {
  ...DefaultArgs,
  label:
    "Você concorda com os Termos de Uso, suas cláusulas e condições, conforme abaixo detalhadas.",
};

export const LongText = Template.bind({});
LongText.args = LongTextArgs;
