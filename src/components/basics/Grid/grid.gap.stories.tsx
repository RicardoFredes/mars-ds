import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Grid from "./grid.component";
import { getGridStory } from "./grid.helpers";

export default {
  title: "Components/Grid",
  parameters: {
    docs: {
      description: {
        component:
          "Grid Responsivo. Grid é uma malha formada pela interseção de um conjunto de linhas horizontais e um conjunto de linhas verticais – um dos conjuntos define colunas e outro linhas. O parâmetro `gap` pode receber um `number` ou `text`. Nesse exemplo, passamos um `number`, sendo assim, o espaçamento entre linhas e colunas será maior ou menor a medida que esse valor aumente ou diminua. Dessa forma é possível criar um layout adaptativo aos diferentes tamanhos de telas, respeitando a regra: `mobile first`. Em outras palavras, o grid monta o layout da menor tela para a maior: `xs`, `sm`, `md`, `lg`, `xl`. Na falta de algum valor, o `columns` assume o valor atribuído à uma dimensão de tela menor, sendo 1 o valor padrão.",
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
        type: "number",
      },
      description: "Número de colunas que distribui o conteúdo na página",
      defaultValue: 2,
    },
    gap: {
      control: {
        type: "number",
      },
      description: "Espaçamento entre linhas e colunas",
      defaultValue: 24,
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
  columns: 2,
  gap: 24,
  growing: true,
};

export const GapExample = Template.bind({});
GapExample.args = DefaultArgs;
