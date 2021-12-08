import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Radio from "./";

export default {
  title: "Forms/Radio",
  component: Radio,
  argTypes: {},
} as ComponentMeta<typeof Radio>;

const Template: ComponentStory<typeof Radio> = (args) => <Radio {...args} />;

const DefaultArgs = {
  children: "Não esqueça de atualizar o componente!",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
