import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Heading from "./heading.component";
import { HeadingSizes } from "./heading.types";

export default {
  title: "Typographic/Heading",
  component: Heading,
  argTypes: {
    level: {
      options: [1, 2, 3, 4, 5, 6],
      control: {
        type: "select",
      },
    },
    size: {
      options: HeadingSizes,
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Heading>;

const Template: ComponentStory<typeof Heading> = (args) => <Heading {...args} />;

const DefaultArgs = {
  level: 1,
  children: "Heading",
  size: HeadingSizes.Medium,
};

export const XSmall = Template.bind({});
XSmall.args = {
  ...DefaultArgs,
  size: HeadingSizes.XSmalll
};

export const Small = Template.bind({});
Small.args = {
  ...DefaultArgs,
  size: HeadingSizes.Small
};

export const Medium = Template.bind({});
Medium.args = {
  ...DefaultArgs,
  size: HeadingSizes.Medium
};

export const Large = Template.bind({});
Large.args = {
  ...DefaultArgs,
  size: HeadingSizes.Large
};

export const XLarge = Template.bind({});
XLarge.args = {
  ...DefaultArgs,
  size: HeadingSizes.XLarge
};

export const XXLarge = Template.bind({});
XXLarge.args = {
  ...DefaultArgs,
  size: HeadingSizes.XXLarge
};
