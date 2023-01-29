import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { commonStoreComponentProps } from "@/services/stories";

import Tabs from "./tabs.component";

export default {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    full: {
      control: { type: "boolean" },
      defaultValue: false,
      description: "Faz com que as tabs ocupem toda a largura",
    },
    align: {
      control: { type: "text" },
      defaultValue: "left",
      description: "Modifica o posicionamento das tabs",
    },
    textColorActive: {
      control: {
        type: "text",
      },
      description:
        'Altera a cor de texto da tab ativa (Preferencialmente utilizar as cores tokens do Design System encontrada <a href="?path=/story/tokens-colors--default" target="_blank">aqui</a>',
      defaultValue: "var(--color-text-primary)",
    },
    backgroundColorActive: {
      control: {
        type: "text",
      },
      description:
        'Altera a cor de background da tab ativa (Preferencialmente utilizar as cores tokens do Design System encontrada <a href="?path=/story/tokens-colors--default" target="_blank">aqui</a>',
      defaultValue: "var(--color-primary-500)",
    },
    defaultTabIndex: {
      control: { type: "number" },
      defaultValue: 0,
      description: "A tab que virá aberta. O padrão é 0 que representa a primeira",
    },
    tabs: {
      description: "Lista de valores que contém a tab e o children",
    },
    ...commonStoreComponentProps,
  },
} as ComponentMeta<typeof Tabs>;

const Template: ComponentStory<typeof Tabs> = (args) => <Tabs {...args} />;

const DefaultArgs = {
  full: false,
  defaultTabIndex: 0,
  align: "left",
  textColorActive: "var(--color-text-primary)",
  backgroundColorActive: "var(--color-primary-500)",
  tabs: [
    {
      label: "Perfil",
      iconName: "user",
      children: "(1) Conteúdo do perfil",
    },
    {
      label: "Pagamentos",
      iconName: "dollar-sign",
      children: "(2) Conteúdo dos pagamentos",
    },
    {
      label: "Notificações",
      iconName: "bell",
      children: "(3) Conteúdo das notificações",
    },
    {
      label: "Link externo",
      iconName: "external-link",
      href: "https://mesalva.com",
      target: "_blank",
    },
  ],
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Full = Template.bind({});
Full.args = { ...DefaultArgs, full: true };

export const ThirdTabOpen = Template.bind({});
ThirdTabOpen.args = { ...DefaultArgs, defaultTabIndex: 2 };
