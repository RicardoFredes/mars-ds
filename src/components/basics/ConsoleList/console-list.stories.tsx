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
      isAnswered: true,
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
    {
      title: "Item 3",
      subtitle: "20min",
      iconName: "video",
      isAnswered: true,
    },
    {
      title: "Item 4",
      subtitle: "20min",
      iconName: "video",
    },
    {
      title: "Item 5",
      subtitle: "20min",
      iconName: "video",
      isAnswered: true,
    },
    {
      title: "Item 6",
      subtitle: "20min",
      iconName: "video",
      isActive: true,
    },
  ],
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
