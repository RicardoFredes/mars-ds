import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Card, { CardElevations } from "../Card";

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
  "columns": {
    "md": 2
  }, 
  "gap": 10, 
  "growing": true, 
  "reserverdLastElement": "xs", 
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
      defaultValue: { md: 2 },
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
      defaultValue: "xs",
      control: { type: "select" },
      description: "Opção que reverte o posicionamento do último elemento em mobile.",
    },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <Card elevation={CardElevations.Low}>Column 1</Card>
    <Card elevation={CardElevations.Low}>Column 2</Card>
  </Grid>
);

const DefaultArgs = {
  as: "div",
  columns: { md: 2 },
  gap: 10,
  growing: true,
};

export const ReversedColumns = Template.bind({});
ReversedColumns.args = DefaultArgs;
