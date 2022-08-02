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
          "Grid Responsivo. Grid é uma malha formada pela interseção de um conjunto de linhas horizontais e um conjunto de linhas verticais – um dos conjuntos define colunas e outro linhas. O parâmetro `columns` pode receber diferentes formatos de valores. Nesse exemplo, passamos um `object`, sendo assim, o layout deverá manter duas colunas para o tamanho de tela média (a partir de 768px). Dessa forma é possível criar um layout adaptativo aos diferentes tamanhos de telas, respeitando a regra: `mobile first`. Em outras palavras, o grid monta o layout da menor tela para a maior: `xs`, `sm`, `md`, `lg`, `xl`. Na falta de algum valor, o `columns` assume o valor atribuído à uma dimensão de tela menor, sendo 1 o valor padrão.",
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
        type: "object",
      },
      description:
        "Número de colunas que distribui o conteúdo na página em determinados tipos de telas (`xs`, `sm`, `md` e `lg`)",
      defaultValue: { md: 2 },
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
      description: "Opção que nivela o tamanho das colunas independentemente do seu conteúdo",
      defaultValue: true,
    },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => {
  return getGridStory(args);
};

const DefaultArgs = {
  as: "div",
  columns: { md: 2 },
  gap: 10,
  growing: true,
};

export const ObjectColumns = Template.bind({});
ObjectColumns.args = DefaultArgs;
