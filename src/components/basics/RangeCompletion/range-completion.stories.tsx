import type { ComponentMeta, ComponentStory } from "@storybook/react";

import icons from "@/components/basics/Icon/lib";

import { IconSizes } from "../Icon";
import RangeCompletion from "./range-completion.component";

export default {
  title: "Components/RangeCompletion",
  component: RangeCompletion,
  argTypes: {
    label: {
      description: "Text to the left of the icons",
      control: {
        type: "text",
      },
    },
    iconName: {
      options: Object.keys(icons),
      control: {
        type: "select",
      },
      description: "The same icon name used in Icon component",
      defaultValue: "circle",
    },
    iconSize: {
      description: "The icon size",
      options: Object.values(IconSizes),
      defaultValue: IconSizes.Small,
      control: {
        type: "select",
      },
    },
    total: {
      control: { type: "number" },
      defaultValue: 5,
      description: "The total amount of elements",
    },
    value: {
      control: { type: "number" },
      defaultValue: 0,
      description: "The amount checked elements",
    },
  },
} as ComponentMeta<typeof RangeCompletion>;

const Template: ComponentStory<typeof RangeCompletion> = (args) => <RangeCompletion {...args} />;

const DefaultArgs = {
  value: 2,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Icon = Template.bind({});
Icon.args = {
  ...DefaultArgs,
  label: "Avaliação:",
  iconName: "star",
};

export const Values = Template.bind({});
Values.args = {
  ...DefaultArgs,
  value: 6,
  total: 10,
};
