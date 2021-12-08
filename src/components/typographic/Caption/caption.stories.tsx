import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Caption from "./";

export default {
  title: "Typographic/Caption",
  component: Caption,
} as ComponentMeta<typeof Caption>;

const Template: ComponentStory<typeof Caption> = (args) => <Caption {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "Caption",
};
