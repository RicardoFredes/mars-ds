import type { ComponentMeta, ComponentStory } from "@storybook/react";

import ItemElement from "./item-element.component";
import { ItemElementVariants } from "./item-element.types";

export default {
  title: "Components/ItemElement",
  component: ItemElement,
  argTypes: {
    variant: {
      options: ItemElementVariants,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof ItemElement>;

const Template: ComponentStory<typeof ItemElement> = (args) => (
  <ItemElement {...args} style={{ maxWidth: 320 }} />
);

export const Default = Template.bind({});
Default.args = {
  children: "23791.22928 60009.362298 47000.046905 9 88070000020298",
  variant: ItemElementVariants.Default,
};

export const Inline = Template.bind({});
Inline.args = {
  children:
    "00020101021226820014br.gov.bcb.pix2560pix.stone.com.br/pix/v2/fd56b6f3-f38b-45e1-a5a9-3fb9946db9805204000053039865406202.985802BR5925MeSalva! Cursos e Consul6014RIO DE JANEIRO62290525f78e196ec78e4ca1875ef4a6e63043E9F",
  variant: ItemElementVariants.Inline,
};
