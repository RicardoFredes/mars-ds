import type { ConsoleListGroupProps } from "./console-list-group.types";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import ConsoleListGroup from "./console-list-group.component";

export default {
  title: "Components/Console/ConsoleListGroup",
  component: ConsoleListGroup,
  argTypes: {
    title: {
      description: "The title to be shown inside the component",
    },
    subtitle: {
      description: "The subtitle to be shown below the title",
    },
    iconName: {
      description: "The icon that is shown next to the title/subtitle",
    },
    LinkComponent: {
      description: "The component that will be used to render the `ConsoleListSubItem`'s",
    },
    isOpen: {
      description: "Whether or not to render the component expanded by default",
      control: "boolean",
      defaultValue: false,
    },
    showAnswer: {
      description:
        "Whether or not to render children `ConsoleListSubItem`'s with the `showAnswer` prop set to true",
      control: "boolean",
      defaultValue: false,
    },
    list: {
      description: "The list of `ConsoleListSubItem`'s to render",
    },
  },
} as ComponentMeta<typeof ConsoleListGroup>;

const Template: ComponentStory<typeof ConsoleListGroup> = (args) => <ConsoleListGroup {...args} />;

const DefaultArgs: ConsoleListGroupProps = {
  title: "Exercícios de compreensão sobre soma",
  subtitle: "9 exercícios",
  LinkComponent: "a",
  iconName: "edit",
  list: [
    { title: "Exercício 1" },
    { title: "Exercício 2", isActive: true },
    { title: "Exercício 3", showAnswer: true, isAnswered: false },
    { title: "Exercício 4", isAnswered: true },
    { title: "Exercício 5", isActive: true, isAnswered: true },
    { title: "Exercício 6", showAnswer: true, isAnswered: true },
    { title: "Exercício 7", isActive: true, showAnswer: true, isAnswered: true },
    { title: "Exercício 8", showAnswer: true, isAnswered: true, isCorrect: true },
    { title: "Exercício 9", isActive: true, showAnswer: true, isAnswered: true, isCorrect: true },
  ],
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
Default.parameters = {
  docs: {
    description: {
      story: "The tipical usage of this component",
    },
  },
};

export const OpenDefault = Template.bind({});
OpenDefault.args = { ...DefaultArgs, isOpen: true };
OpenDefault.parameters = {
  docs: {
    description: {
      story: "The tipical usage of this component, it is rendered as open by default",
    },
  },
};
