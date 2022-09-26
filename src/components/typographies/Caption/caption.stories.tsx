import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Caption from "./caption.component";

export default {
  title: "Typographies/Caption",
  component: Caption,
  argTypes: {
    as: {
      control: {
        type: "text",
      },
      defaultValue: "span",
      description: "Permite trocar a tag p, por exemplo: `h1` ao invés de `span`",
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
WithHtml.args = { ...DefaultArgs, children: "", html: "O aluno <b>João</b> foi aprovado!" };
