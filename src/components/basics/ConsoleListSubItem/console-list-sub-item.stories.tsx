import type { ConsoleListSubItemProps } from "./console-list-sub-item.types";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import ConsoleSubItem from "./console-list-sub-item.component";

export default {
  title: "Components/Console/ConsoleListSubItem",
  component: ConsoleSubItem,
  argTypes: {
    title: { control: "text" },
    isAnswered: { control: "boolean", defaultValue: false },
    isCorrect: { control: "boolean", defaultValue: false },
    isActive: { control: "boolean", defaultValue: false },
    showAnswer: { control: "boolean", defaultValue: false },
  },
} as ComponentMeta<typeof ConsoleSubItem>;

const Template: ComponentStory<typeof ConsoleSubItem> = (args) => <ConsoleSubItem {...args} />;

const DefaultArgs: ConsoleListSubItemProps = {
  title: "Item de console",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
