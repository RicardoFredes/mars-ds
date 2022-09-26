import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Subtitle from "./subtitle.component";
import { SubtitleSizes } from "./subtitle.types";

export default {
  title: "Typographies/Subtitle",
  component: Subtitle,
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
      description: "o tamanho do elemento",
      options: Object.values(SubtitleSizes),
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
} as ComponentMeta<typeof Subtitle>;

const Template: ComponentStory<typeof Subtitle> = (args) => <Subtitle {...args} />;

const DefaultArgs = {
  level: undefined,
  children: "Subtitle",
  html: undefined,
  size: undefined,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const WithHtml = Template.bind({});
WithHtml.args = { html: "<i>#PartiuEstudar</i>", children: undefined };

export const Size_Small = Template.bind({});
Size_Small.args = { ...DefaultArgs, size: SubtitleSizes.Small };

export const Size_Medium = Template.bind({});
Size_Medium.args = { ...DefaultArgs, size: SubtitleSizes.Medium };
