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
  tabs: [
    {
      label: "Perfil",
      iconName: "profile",
      children: "(1) Conteúdo do perfil",
    },
    {
      label: "Pagamentos",
      iconName: "receipt",
      children: "(2) Conteúdo dos pagamentos",
    },
    {
      label: "Notificações",
      iconName: "notifications",
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
