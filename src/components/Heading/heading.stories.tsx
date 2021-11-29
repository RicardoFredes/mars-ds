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

export const Medium = Template.bind({});
Medium.args = DefaultArgs;
