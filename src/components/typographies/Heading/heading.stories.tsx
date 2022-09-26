import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Heading from "./heading.component";
import { HeadingSizes } from "./heading.types";

export default {
  title: "Typographies/Heading",
  component: Heading,
  argTypes: {
    as: {
      control: {
        type: "text",
      },
      defaultValue: "",
      description: "Permite trocar a tag h1, por exemplo: `h3` ao invés de `h1`",
    },
    level: {
      options: [1, 2, 3, 4, 5, 6],
      defaultValue: 1,
      description: "Permite trocar a tag h1 por outros níveis: de 1 a 6",
      control: {
        type: "select",
      },
    },
    size: {
      options: Object.values(HeadingSizes),
      control: {
        type: "select",
      },
    },
    html: {
      description: "O conteúdo do elemento em HTML",
      control: { type: "text" },
      defaultValue: "",
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

const DefaultArgs = {
  level: undefined,
  children: "Heading",
  size: undefined,
  html: undefined,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const WithHtml = Template.bind({});
WithHtml.args = { ...DefaultArgs, html: "<i>#PartiuEstudar</i>" };

export const Size_XSmall = Template.bind({});
Size_XSmall.args = { ...DefaultArgs, size: HeadingSizes.XSmall };

export const Size_Small = Template.bind({});
Size_Small.args = { ...DefaultArgs, size: HeadingSizes.Small };

export const Size_Medium = Template.bind({});
Size_Medium.args = { ...DefaultArgs, size: HeadingSizes.Medium };

export const Size_Large = Template.bind({});
Size_Large.args = { ...DefaultArgs, size: HeadingSizes.Large };
