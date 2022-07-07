import type { ConsoleListSubItemProps } from "./console-list-sub-item.types";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import ConsoleSubItem from "./console-list-sub-item.component";

export default {
  title: "Components/Console/ConsoleListSubItem",
  component: ConsoleSubItem,
  argTypes: {
    title: {
      description: "The title to be shown inside the component",
    },
    isAnswered: {
      description: "Whether or not the student has answered the question",
      control: "boolean",
      defaultValue: false,
    },
    isCorrect: {
      description: "Whether or not the question is correct",
      control: "boolean",
      defaultValue: false,
    },
    isActive: {
      description: "Whether or not to style the component as if it's hovered/active ",
      control: "boolean",
      defaultValue: false,
    },
    showAnswer: {
      description:
        "Whether or not to show a icon on the right side of the component, indicating if the student has answered the question and if it was correct or wrong",
      control: "boolean",
      defaultValue: false,
    },
    as: {
      description: "Transforms the underlying component into a custom component",
      defaultValue: "a",
    },
  },
} as ComponentMeta<typeof ConsoleSubItem>;

const Template: ComponentStory<typeof ConsoleSubItem> = (args) => <ConsoleSubItem {...args} />;

const DefaultArgs: ConsoleListSubItemProps = {
  title: "Item de console",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
Default.parameters = {
  docs: {
    description: {
      story: "Default component, without any additional flags",
    },
  },
};

export const Active = Template.bind({});
Active.args = { ...DefaultArgs, isActive: true };
Active.parameters = {
  docs: {
    description: {
      story: "The component is selected by default",
    },
  },
};

export const Unanswered = Template.bind({});
Unanswered.args = { ...DefaultArgs, showAnswer: true, isAnswered: false };
Unanswered.parameters = {
  docs: {
    description: {
      story:
        "The student hasn't answered the question, but the component was set to show the answer result",
    },
  },
};

export const Answered = Template.bind({});
Answered.args = { ...DefaultArgs, isAnswered: true };
Answered.parameters = {
  docs: {
    description: {
      story: "The student has answered the question, but it's result is not shown",
    },
  },
};

export const AnsweredActive = Template.bind({});
AnsweredActive.args = { ...DefaultArgs, isActive: true, isAnswered: true };
AnsweredActive.parameters = {
  docs: {
    description: {
      story: "The student hasn't answered the question, and the component is selected by default",
    },
  },
};

export const AnsweredWrong = Template.bind({});
AnsweredWrong.args = { ...DefaultArgs, showAnswer: true, isAnswered: true };
AnsweredWrong.parameters = {
  docs: {
    description: {
      story: "The student has answered the question, and the answer is wrong",
    },
  },
};

export const AnsweredWrongActive = Template.bind({});
AnsweredWrongActive.args = { ...DefaultArgs, isActive: true, showAnswer: true, isAnswered: true };
AnsweredWrongActive.parameters = {
  docs: {
    description: {
      story:
        "The student has answered the question, the answer is wrong, and the component is selected by default",
    },
  },
};

export const AnsweredCorrect = Template.bind({});
AnsweredCorrect.args = { ...DefaultArgs, showAnswer: true, isAnswered: true, isCorrect: true };
AnsweredCorrect.parameters = {
  docs: {
    description: {
      story: "The student has answered the question, and the answer is correct",
    },
  },
};

export const AnsweredCorrectActive = Template.bind({});
AnsweredCorrectActive.args = {
  ...DefaultArgs,
  isActive: true,
  showAnswer: true,
  isAnswered: true,
  isCorrect: true,
};
AnsweredCorrectActive.parameters = {
  docs: {
    description: {
      story:
        "The student has answered the question, the answer is correct, and the component is selected by default",
    },
  },
};
