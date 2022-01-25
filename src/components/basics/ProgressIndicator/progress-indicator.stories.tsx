import type { ComponentMeta, ComponentStory } from "@storybook/react";

import ProgressIndicator from ".";

export default {
  title: "Components/ProgressIndicator",
  component: ProgressIndicator,
  argTypes: {
    fetching: {
      control: {
        type: "boolean",
      },
    },
    fetched: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof ProgressIndicator>;

const Template: ComponentStory<typeof ProgressIndicator> = (args) => (
  <ProgressIndicator {...args} />
);

const DefaultArgs = {
  fetching: false,
  fetched: false,
};

export const Fetching = Template.bind({});
Fetching.args = { ...DefaultArgs, fetching: true };

export const Fetched = Template.bind({});
Fetched.args = { ...DefaultArgs, fetched: true };
