import type { ComponentMeta, ComponentStory } from "@storybook/react";

import SectionBase from "./section-base.component";

export default {
  title: "Layouts/SectionBase",
  component: SectionBase,
  argTypes: {},
} as ComponentMeta<typeof SectionBase>;

const Template: ComponentStory<typeof SectionBase> = (args) => <SectionBase {...args} />;

const DefaultArgs = {
  children: "Não esqueça de atualizar o componente!",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
