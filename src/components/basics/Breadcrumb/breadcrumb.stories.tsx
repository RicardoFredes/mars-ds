import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Breadcrumb from "./";
import { mockBreadcrumbListExpand, mockDefaultBreadcrumblist } from "./breadcrumb.fixture";

export default {
  title: "Components/Breadcrumb",
  component: Breadcrumb,
  argTypes: {},
} as ComponentMeta<typeof Breadcrumb>;

const Template: ComponentStory<typeof Breadcrumb> = (args) => <Breadcrumb {...args} />;

const DefaultArgs = {
  list: mockDefaultBreadcrumblist,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Expanded = Template.bind({});
Expanded.args = {
  list: mockBreadcrumbListExpand,
};
