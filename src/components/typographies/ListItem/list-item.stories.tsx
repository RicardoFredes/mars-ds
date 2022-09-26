import type { ComponentMeta, ComponentStory } from "@storybook/react";

import icons from "@/components/basics/Icon/lib";
import Tokens from "@/tokens";

import ListItem from "./list-item.component";

export default {
  title: "Typographies/ListItem",
  component: ListItem,
  argTypes: {
    bulletIconName: {
      description: "O ícone do item da lista",
      options: Object.keys(icons),
      control: { type: "select" },
    },
    bulletColor: {
      description: "a cor do ícone do item da lista",
      control: { type: "color" },
    },
    html: {
      description: "O conteúdo do elemento em HTML",
      control: { type: "text" },
      defaultValue: "",
    },
    text: {
      description: "O conteúdo do elemento",
      control: { type: "text" },
      defaultValue: "",
    },
  },
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

const DefaultArgs = {
  children: "4 correções de redação padrão ao mês",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Bullet = Template.bind({});
Bullet.args = { ...DefaultArgs, bulletIconName: "checkmark", bulletColor: Tokens.ColorSuccess500 };

export const WithHtml = Template.bind({});
WithHtml.args = { ...DefaultArgs, html: "A prova esta marcada para o dia <u>20/05/2022</u>" };
