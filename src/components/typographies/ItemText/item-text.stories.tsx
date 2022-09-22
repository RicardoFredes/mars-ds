import type { ComponentMeta, ComponentStory } from "@storybook/react";

import ItemText from "./item-text.component";

export default {
  title: "Typographics/ItemText",
  component: ItemText,
  argTypes: {
    as: {
      description: "A tag na qual o elemento vai se transformar",
      control: { type: "text" },
      defaultValue: "",
    },
    html: {
      description: "O conteúdo do elemento em HTML",
      control: { type: "text" },
      defaultValue: "",
    },
  },
} as ComponentMeta<typeof ItemText>;

const Template: ComponentStory<typeof ItemText> = (args) => <ItemText {...args} />;

const DefaultArgs = {
  children: "ItemText",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const WithHtml = Template.bind({});
WithHtml.args = { html: "A prova será dia <u>20/05/2022</u>" };
