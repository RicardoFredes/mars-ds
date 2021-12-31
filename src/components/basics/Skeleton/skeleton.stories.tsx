import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Skeleton from "./";

export default {
  title: "Components/Skeleton",
  component: Skeleton,
  argTypes: {},
} as ComponentMeta<typeof Skeleton>;

const Template: ComponentStory<typeof Skeleton> = (args) => <Skeleton {...args} />;

const DefaultArgs = {
  active: true,
  children: "Texto a ser carregado de modo assíncrona",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
