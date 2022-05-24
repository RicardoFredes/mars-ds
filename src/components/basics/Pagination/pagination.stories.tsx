import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import Pagination from "./pagination.component";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    current: {
      description: "The current page",
      control: { type: "number" },
      defaultValue: 1,
    },
    total: {
      description: "The total number of pages",
      control: { type: "number" },
      defaultValue: 5,
    },
    siblingCount: {
      description: "The number of pages to show before and after the current page",
      control: { type: "number" },
      defaultValue: 2,
    },
    onSelectPage: {
      description: "The callback when page is selected",
      control: { type: "function" },
      action: action("onSelectPage"),
      defaultValue: undefined,
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

const DefaultArgs = {
  total: 5,
  siblingCount: 2,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
