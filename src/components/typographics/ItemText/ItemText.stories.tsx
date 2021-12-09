import type { ComponentMeta, ComponentStory } from "@storybook/react";
import ItemText from ".";

export default {
  title: "Typographics/ItemText",
  component: ItemText,
  argTypes: {},
} as ComponentMeta<typeof ItemText>;

const Template: ComponentStory<typeof ItemText> = (args) => <ItemText {...args} />;

const DefaultArgs = {
  children: "ItemText",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
