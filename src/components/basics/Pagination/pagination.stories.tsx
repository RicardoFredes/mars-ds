import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Pagination from "./pagination.component";

export default {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    numPages: {
      control: { type: "number" },
    },
    siblingCount: {
      control: { type: "number" },
    },
  },
} as ComponentMeta<typeof Pagination>;

const Template: ComponentStory<typeof Pagination> = (args) => <Pagination {...args} />;

const DefaultArgs = {
  numPages: 5,
  siblingCount: 2,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
