import type { ComponentMeta, ComponentStory } from "@storybook/react";
import List from ".";
import { ListItemProps } from "./list.types";

const mockedData = [
  ["4 correções de redação padrão ao mês", true],
  ["Acesso a Intensivo ENEM 2021", true],
  ["Acesso ao Extensivo ENEM 2022", true],
  ["Conteúdo completo para ENEM e vestibulares", true],
  ["Plano de estudos personalizado", true],
  ["Aulas ao vivo todos os dias", false],
  ["Plantões de dúvidas ao vivo", false],
  ["Simuladinhos semanais", false],
  ["Acesso por 12 meses + 3 meses de bônus = 15 meses de acesso", false],
];

export default {
  title: "Typographics/List",
  component: List,
  argTypes: {},
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => <List {...args} />;

const DefaultArgs = {
  list: mockedData.map(([text]) => ({ text })) as ListItemProps[],
  defaultBullet: { name: "checkmark" },
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Naked = Template.bind({});
Naked.args = {
  list: mockedData.map(([text]) => ({ text })) as ListItemProps[],
};

export const CustomBullets = Template.bind({});
CustomBullets.args = {
  ...DefaultArgs,
  defaultBullet: {
    name: "checkmark",
    style: { color: "#229A16" },
  },
  list: mockedData.map(([text, isIncluded]) => ({
    text,
    bullet: isIncluded
      ? null
      : {
          name: "close",
          style: { color: "#F94062" },
        },
  })) as ListItemProps[],
};
