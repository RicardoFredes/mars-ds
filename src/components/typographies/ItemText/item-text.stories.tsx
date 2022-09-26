import type { ComponentMeta, ComponentStory } from "@storybook/react";

import ItemText from "./item-text.component";

export default {
  title: "Typographies/ItemText",
  component: ItemText,
  argTypes: {
    as: {
      control: {
        type: "text",
      },
      defaultValue: "div",
      description: "Permite trocar a tag div, por exemplo: `p` ao invés de `div`",
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
  html: undefined,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const WithHtml = Template.bind({});
WithHtml.args = { ...DefaultArgs, html: "A prova será dia <u>20/05/2022</u>", children: undefined };
