import type { ComponentMeta, ComponentStory } from "@storybook/react";

import TextBase from "./text-base.component";
import { TextBaseSizes } from "./text-base.types";

export default {
  title: "Typographics/TextBase",
  component: TextBase,
  argTypes: {
    size: {
      options: Object.values(TextBaseSizes),
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof TextBase>;

const Template: ComponentStory<typeof TextBase> = (args) => <TextBase {...args} />;

const DefaultArgs = {
  children:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  size: TextBaseSizes.Medium,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Small = Template.bind({});
Small.args = {
  ...DefaultArgs,
  size: TextBaseSizes.Small,
};

export const Medium = Template.bind({});
Medium.args = {
  ...DefaultArgs,
  size: TextBaseSizes.Medium,
};
