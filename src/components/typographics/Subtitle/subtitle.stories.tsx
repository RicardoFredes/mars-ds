import type { ComponentMeta, ComponentStory } from "@storybook/react";
import Subtitle, { SubtitleSizes } from ".";

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
      options: SubtitleSizes,
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
  size: SubtitleSizes.Medium,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Small = Template.bind({});
Small.args = {
  ...DefaultArgs,
  size: SubtitleSizes.Small,
};
