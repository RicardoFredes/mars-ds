import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Text from "./text.component";
import { TextSizes } from "./text.types";

export default {
  title: "Typographics/Text",
  component: Text,
  argTypes: {
    size: {
      options: Object.values(TextSizes),
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

const DefaultArgs = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  size: TextSizes.Medium,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Small = Template.bind({});
Small.args = {
  ...DefaultArgs,
  size: TextSizes.Small,
};

export const Medium = Template.bind({});
Medium.args = {
  ...DefaultArgs,
  size: TextSizes.Medium,
};
