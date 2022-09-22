import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Caption from "./caption.component";

export default {
  title: "Typographics/Caption",
  component: Caption,
  argTypes: {
    as: {
      description: "A tag na qual o elemento vai se transformar",
      control: { type: "text" },
      defaultValue: "",
    },
    children: {
      description: "O conteúdo do elemento em texto",
      control: { type: "text" },
      defaultValue: "",
    },
    html: {
      description: "O conteúdo do elemento em HTML",
      control: { type: "text" },
      defaultValue: "",
    },
  },
} as ComponentMeta<typeof Caption>;

const Template: ComponentStory<typeof Caption> = (args) => <Caption {...args} />;

const DefaultArgs = {
  children: "Caption",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const WithHtml = Template.bind({});
WithHtml.args = { html: "O aluno <b>João</b> foi aprovado!" };
