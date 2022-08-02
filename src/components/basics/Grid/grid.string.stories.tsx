import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Grid from "./grid.component";
import { getGridStory } from "./grid.helpers";

export default {
  title: "Components/Grid",
  parameters: {
    docs: {
      description: {
        component:
          "Grid Responsivo. Grid é uma malha formada pela interseção de um conjunto de linhas horizontais e um conjunto de linhas verticais – um dos conjuntos define colunas e outro linhas. O parâmetro `columns` pode receber diferentes formatos de valores. Nesse exemplo, passamos uma `string`, sendo assim, o layout deverá manter três colunas - uma fração | 200px | uma fração - independentemente do tamanho de tela. Dessa forma é possível criar um layout adaptativo aos diferentes tamanhos de telas, respeitando a regra: `mobile first`. Em outras palavras, o grid monta o layout da menor tela para a maior: `xs`, `sm`, `md`, `lg`, `xl`. Na falta de algum valor, o `columns` assume o valor atribuído à uma dimensão de tela menor, sendo 1 o valor padrão.",
      },
    },
  },
  component: Grid,
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
        type: "text",
      },
      defaultValue: "1fr 200px 1fr",
      description: "Medida de colunas que distribui o conteúdo na página",
    },
    gap: {
      control: {
        type: "number",
      },
      defaultValue: 10,
      description: "Espaçamento entre linhas e colunas",
    },
    growing: {
      control: {
        type: "boolean",
      },
      defaultValue: true,
      description: "Opção que nivela o tamanho das colunas independentemente do seu conteúdo",
    },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => {
  return getGridStory(args);
};

const DefaultArgs = {
  as: "div",
  columns: "1fr 200px 1fr",
  gap: 10,
  growing: true,
};

export const StringColumns = Template.bind({});
StringColumns.args = DefaultArgs;
