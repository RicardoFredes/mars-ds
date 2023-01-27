import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Calendar from "@/components/basics/Calendar";

export default {
  title: "Components/Calendar",
  component: Calendar,
  parameters: {
    docs: {
      description: {
        component:
          "O componente de Calendário é responsável por representar de forma horizontal o período informado em dias para os seus atributos. Podendo representar uma semana apenas, ou um mês inteiro.",
      },
      source: {
        code: `{
  "component": "Calendar",
  "title": "Semana 01", 
  "subtitle": "22 a 28 de Janeiro", 
  "next": {
    "href": "/week/2"
  },
  "previous": {
    "disabled": true
  }, 
  "weekList": ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
  "list": [
    {
      "number": "22",
      "colors": ["white", "red", "green"]
    },
    {
      "number": "23",
      "colors": ["purple", "red", "green"]
    },
    {
      "number": "24",
      "colors": ["red", "green"]
    },
    {
      "number": "25",
      "active": true,
      "colors": ["red", "green"]
    },
    {
      "number": "26",
      "disabled": true
    },
    {
      "number": "27",
      "disabled": true
    },
    {
      "number": "28",
      "disabled": true
    }
  ]
}`,
        language: "json",
        type: "code",
      },
    },
  },
  argTypes: {
    next: {
      description:
        "Atributo para adicionar informações na seta que avança o calendário, que podem ser: `href`, `disabled` e uma função `onClick`.",
      control: { type: "object" },
    },
    previous: {
      description:
        "Atributo para adicionar informações na seta que retrocede o calendário, que podem ser: `href`, `disabled` e uma função `onClick`.",
      control: { type: "object" },
    },
    title: {
      description:
        "Atributo para adicionar um texto no meio das setas, pode ser uma informação de semana ou mesmo o mês corrente.",
      control: { type: "text" },
    },
    subtitle: {
      description:
        "Atributo para adicionar um texto informativo como o período em que o calendário vai abrangir.",
      control: { type: "text" },
    },
    weekList: {
      description:
        "Atributo para adicionar os dias da semana que o calendário deve demonstrar. Por padrão, o dia começa na `segunda-feira` com contração `Seg` e segue até `domingo` com a contração `Dom`.",
      defaultValue: ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"],
      control: { type: "array" },
    },
    list: {
      description:
        "Atributo para adicionar uma lista com os dias a representar, essa lista aceita os atributos: `number` como texto, `active`: true/false, `disabled`: true/false, `colors` como um array das cores das matérias do dia, `href` e uma função `onClick`",
      control: { type: "array" },
    },
  },
} as ComponentMeta<typeof Calendar>;

const Template: ComponentStory<typeof Calendar> = (args) => <Calendar {...args} />;

const DefaultArgs = {
  next: {
    href: "/week/2",
  },
  previous: {
    disabled: true,
  },
  title: "Semana 01",
  subtitle: "22 a 28 de Janeiro",
  weekList: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"],
  list: [
    {
      number: "22",
      colors: ["white", "red", "green"],
    },
    {
      number: "23",
      colors: ["purple", "red", "green"],
    },
    {
      number: "24",
      colors: ["red", "green"],
    },
    {
      number: "25",
      active: true,
      colors: ["red", "green"],
    },
    {
      number: "26",
      disabled: true,
    },
    {
      number: "27",
      disabled: true,
    },
    {
      number: "28",
      disabled: true,
    },
  ],
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
