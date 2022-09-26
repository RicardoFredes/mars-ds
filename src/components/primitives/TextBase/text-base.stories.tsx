import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { commonStoreComponentProps } from "@/services/stories";

import TextBase from "./text-base.component";

const text =
  "O Método de estudos é flexível, já o resultado é um só: aprovação! São mais de 1.500 estudantes aprovados só em 2022.";
const html =
  "O Método de estudos é flexível, já o resultado é um só: <strong>aprovação!</strong><br>São mais de <strong>1.500</strong> estudantes aprovados só em 2022.";

export default {
  title: "Typographies/Primitive/TextBase",
  component: TextBase,
  parameters: {
    docs: {
      description: {
        component:
          "O componente TextBase é de uso EXCLUSIVO para compor os outros componentes de tipografia. Além disso, o componente permite que as propriedades sejam repassadas dentro do children. Por exemplo: Veja o Complex",
      },
    },
  },
  argTypes: {
    as: {
      control: {
        type: "text",
      },
      defaultValue: "p",
      description: "Permite trocar a tag p, por exemplo: `h1` ao invés de `p`",
    },
    html: {
      description:
        "Recebe valores em html, no entanto um tratamento é feito para evitar códigos maliciosos",
    },
    children: {
      description: "Pode receber um objeto contendo as propriedades do `TextBase`",
    },
    ...commonStoreComponentProps,
  },
} as ComponentMeta<typeof TextBase>;

const Template: ComponentStory<typeof TextBase> = (args) => <TextBase {...args} />;

const DefaultArgs = { children: text };

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const HTML = Template.bind({});
HTML.args = { html };

export const As = Template.bind({});
As.args = { children: text, as: "i" };

// eslint-disable-next-line react/no-children-prop
export const Complex = () => <TextBase children={{ html, as: "p" }} />;
