import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Card, { CardElevations } from "../Card";
import Grid from "./grid.component";

export default {
  title: "Components/Grid",
  parameters: {
    docs: {
      description: {
        component:
          "Grid Responsivo. Grid é uma malha formada pela interseção de um conjunto de linhas horizontais e um conjunto de linhas verticais – um dos conjuntos define colunas e outro linhas. O parâmetro `growing` recebe um valor booleano de `true` ou `false`. Nesse exemplo, passamos `false`, sendo assim, caso o conteúdo de uma das colunas seja maior que o outro, essa coluna será maior quanto o parâmetro `growing` está `false`, caso `true` as colunas terão o mesmo tamanho. Dessa forma é possível criar um layout adaptativo aos diferentes tamanhos de telas, respeitando a regra: `mobile first`. Em outras palavras, o grid monta o layout da menor tela para a maior: `xs`, `sm`, `md`, `lg`, `xl`. Na falta de algum valor, o `columns` assume o valor atribuído à uma dimensão de tela menor, sendo 1 o valor padrão.",
      },
      source: {
        code: `{
  "component": "Grid",
  "gap": 10, 
  "columns": 2,
  "growing": false,
  "children": [
    {
      "component": "Card",
      "elevation": "lw",
      "children": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of thics, very popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet.., comes from a line in section 1.10.32."
    },
    {
      "component": "Card",
      "elevation": "lw",
      "children": "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using Content here, content here, making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites still in their infancy.Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like)."
    }
  ]
}`,
        language: "json",
        type: "code",
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
      defaultValue: false,
    },
    reversedLastElement: {
      options: ["xs", "sm"],
      control: { type: "select" },
      description: "Opção que reverte o posicionamento do último elemento em mobile.",
    },
  },
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
  <Grid {...args}>
    <Card elevation={CardElevations.Low}>
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
      been the industrys standard dummy text ever since the 1500s, when an unknown printer took a
      galley of type and scrambled it to make a type specimen book. It has survived not only five
      centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It
      was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum
      passages, and more recently with desktop publishing software like Aldus PageMaker including
      versions of Lorem Ipsum. Contrary to popular belief, Lorem Ipsum is not simply random text. It
      has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
      Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of
      the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the
      cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum
      comes from sections 1.10.32 and 1.10.33 of de Finibus Bonorum et Malorum (The Extremes of Good
      and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very
      popular during the Renaissance. The first line of Lorem Ipsum, Lorem ipsum dolor sit amet..,
      comes from a line in section 1.10.32.
    </Card>
    <Card elevation={CardElevations.Low}>
      It is a long established fact that a reader will be distracted by the readable content of a
      page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less
      normal distribution of letters, as opposed to using Content here, content here, making it look
      like readable English. Many desktop publishing packages and web page editors now use Lorem
      Ipsum as their default model text, and a search for lorem ipsum will uncover many web sites
      still in their infancy. Various versions have evolved over the years, sometimes by accident,
      sometimes on purpose (injected humour and the like).
    </Card>
  </Grid>
);

const DefaultArgs = {
  as: "div",
  columns: 2,
  gap: 10,
  growing: false,
};

export const GrowingExample = Template.bind({});
GrowingExample.args = DefaultArgs;
