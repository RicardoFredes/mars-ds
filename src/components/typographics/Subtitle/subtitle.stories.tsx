import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Subtitle from ".";
import { SubtitlesSizes } from "./subtitle.types";

export default {
  title: "Typographics/Subtitle",
  component: Subtitle,
  argTypes: {
    level: {
      options: [1, 2, 3, 4, 5, 6],
      control: {
        type: "select",
      },
    },
    size: {
      options: SubtitlesSizes,
      control: {
        type: "select",
      },
    },
  },
} as ComponentMeta<typeof Subtitle>;

const Template: ComponentStory<typeof Subtitle> = (args) => <Subtitle {...args} />;

const DefaultArgs = {
  level: 1,
  children: "Subtitle",
  size: SubtitlesSizes.Medium,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Small = Template.bind({});
Small.args = {
  ...DefaultArgs,
  size: SubtitlesSizes.Small,
};
