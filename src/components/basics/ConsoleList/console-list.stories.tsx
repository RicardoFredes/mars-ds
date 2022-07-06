import type { ComponentMeta, ComponentStory } from "@storybook/react";

import type { ConsoleListProps } from "@/components/basics/ConsoleList/console-list.types";

import ConsoleList from "./console-list.component";

export default {
  title: "Components/Console/ConsoleList",
  component: ConsoleList,
  argTypes: {},
  parameters: {
    loki: { skip: true },
  },
} as ComponentMeta<typeof ConsoleList>;

const Template: ComponentStory<typeof ConsoleList> = (args) => <ConsoleList {...args} />;

const DefaultArgs: Partial<ConsoleListProps> = {
  list: [
    {
      title: "Item 1",
      subtitle: "2 questões",
      iconName: "edit",
      list: [
        { title: "Item de console" },
        { title: "Item de console", isActive: true },
        { title: "Item de console", showAnswer: true },
        { title: "Item de console", showAnswer: true, isAnswered: true },
        { title: "Item de console", showAnswer: true, isAnswered: true, isCorrect: true },
      ],
    },
    {
      title: "Item 2",
      subtitle: "20min",
      iconName: "video",
    },
  ],
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
