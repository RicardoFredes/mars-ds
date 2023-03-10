import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Grid from "./grid.component";
import { getGridStory } from "./grid.helpers";

export default {
  title: "Components/Grid",
  component: Grid,
  parameters: {
    docs: {
      description: {
        component:
          "Grid Responsivo. Grid é uma malha formada pela interseção de um conjunto de linhas horizontais e um conjunto de linhas verticais – um dos conjuntos define colunas e outro linhas. O parâmetro `columns` pode receber diferentes formatos de valores. Nesse exemplo, passamos um `array`, sendo assim, o layout deverá manter três colunas - duas frações | quatro frações | 200px - independentemente do tamanho de tela. Dessa forma é possível criar um layout adaptativo aos diferentes tamanhos de telas, respeitando a regra: `mobile first`. Em outras palavras, o grid monta o layout da menor tela para a maior: `xs`, `sm`, `md`, `lg`, `xl`. Na falta de algum valor, o `columns` assume o valor atribuído à uma dimensão de tela menor, sendo 1 o valor padrão.",
      },
      source: {
        code: `{
  "component": "Grid",
  "columns": [2, 4, "200px"], 
  "gap": 10, 
  "growing": true, 
  "children": [
    {
      "component": "Card",
      "elevation": "lw",
      "children": "Column 1"
    },
    {
      "component": "Card",
      "elevation": "lw",
      "children": "Column 2"
    },
    {
      "component": "Card",
      "elevation": "lw",
      "children": "Column 3"
    },
    {
      "component": "Card",
      "elevation": "lw",
      "children": "Column 4"
    },
    {
      "component": "Card",
      "elevation": "lw",
      "children": "Column 5"
    },
    {
      "component": "Card",
      "elevation": "lw",
      "children": "Column 6"
    },
    {
      "component": "Card",
      "elevation": "lw",
      "children": "Column 7"
    },
    {
      "component": "Card",
      "elevation": "lw",
      "children": "Column 8"
    },
    {
      "component": "Card",
      "elevation": "lw",
      "children": "Column 9"
    },
    {
      "component": "Card",
      "elevation": "lw",
      "children": "Column 10"
    },
    {
      "component": "Card",
      "elevation": "lw",
      "children": "Column 11"
    },
    {
      "component": "Card",
      "elevation": "lw",
      "children": "Column 12"
    }
  ]
}`,
        language: "json",
        type: "code",
      },
    },
  },
  argTypes: {
    as: {
      control: {
        type: "text",
      },
      defaultValue: "div",
      description: "Permite trocar a tag HTML, por exemplo: `section` ao invés de `div`",
    },
    columns: {
      control: {
        type: "array",
      },
      defaultValue: [2, 4, "200px"],
      description: "Número de colunas que distribui o conteúdo na página em ordem",
    },
    gap: {
      control: {
        type: "number",
      },
      description: "Espaçamento entre linhas e colunas",
      defaultValue: 10,
    },
    growing: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
      description: "Opção que nivela o tamanho das colunas independentemente do seu conteúdo",
    },
    reversedLastElement: {
      options: ["xs", "sm"],
      control: { type: "select" },
      description: "Opção que reverte o posicionamento do último elemento em mobile.",
    },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => {
  return getGridStory(args);
};

const DefaultArgs = {
  as: "div",
  columns: [2, 4, "200px"],
  gap: 10,
  growing: true,
};

export const ArrayColumns = Template.bind({});
ArrayColumns.args = DefaultArgs;
