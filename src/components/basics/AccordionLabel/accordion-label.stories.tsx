import type { ComponentMeta, ComponentStory } from "@storybook/react";

import DropdownMenuItem from "@/components/basics/DropdownMenuItem";
import Tokens from "@/tokens";

import AccordionLabel from "./accordion-label.component";

export default {
  title: "Components/Accordion/AccordionLabel",
  component: AccordionLabel,
  argTypes: {
    title: {
      control: { type: "text" },
    },
    label: {},
    colorLabel: {
      control: { type: "color" },
    },
  },
} as ComponentMeta<typeof AccordionLabel>;

const Template: ComponentStory<typeof AccordionLabel> = (args) => (
  <AccordionLabel style={{ maxWidth: 450 }} {...args} />
);

const DefaultArgs = {
  title: "4 correções de redação básicas extras",
  label: "+ 29,90",
  colorLabel: Tokens.ColorTextPrimary,
  children: (
    <div>
      <DropdownMenuItem leftIconName="trash">Remover Item</DropdownMenuItem>
    </div>
  ),
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const DefaultOpen = Template.bind({});
DefaultOpen.args = {
  ...DefaultArgs,
  defaultOpen: true,
};
