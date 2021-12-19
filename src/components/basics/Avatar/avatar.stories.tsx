import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Avatar from "./";

export default {
  title: "Components/Avatar",
  component: Avatar,
  argTypes: {},
} as ComponentMeta<typeof Avatar>;

const Template: ComponentStory<typeof Avatar> = (args) => <Avatar {...args} />;

const DefaultArgs = {
  children: "Não esqueça de atualizar o componente!",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
