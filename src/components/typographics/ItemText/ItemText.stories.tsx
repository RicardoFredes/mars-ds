import type { ComponentMeta, ComponentStory } from "@storybook/react";
import ItemText from "./";

export default {
  title: "Components/ItemText",
  component: ItemText,
  argTypes: {},
} as ComponentMeta<typeof ItemText>;

const Template: ComponentStory<typeof ItemText> = (args) => <ItemText {...args} />;

const DefaultArgs = {
  children: "Não esqueça de atualizar o componente!",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
