import type { ComponentMeta, ComponentStory } from "@storybook/react";

import icons from "@/components/basics/Icon/lib";

import { ICONS } from "@/configs/icons.config";
import DropdownMenuItem from "./dropdown-menu-item.component";
import { DropdownMenuItemSizes } from "./dropdown-menu-item.types";

export default {
  title: "Components/DropdownMenuItem",
  component: DropdownMenuItem,
  argTypes: {
    leftIconName: {
      options: Object.keys(icons),
      control: { type: "select" },
    },
    rightIconName: {
      options: Object.keys(icons),
      control: { type: "select" },
    },
    size: {
      options: Object.values(DropdownMenuItemSizes),
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof DropdownMenuItem>;

const ICON_NAME = ICONS.STORIES.DEFAULT;
const Template: ComponentStory<typeof DropdownMenuItem> = (args) => <DropdownMenuItem {...args} />;

const DefaultArgs = {
  children: "Item de Menu",
  size: DropdownMenuItemSizes.Medium,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const LeftIcon = Template.bind({});
LeftIcon.args = { ...DefaultArgs, leftIconName: ICON_NAME };

export const RightIcon = Template.bind({});
RightIcon.args = { ...DefaultArgs, rightIconName: ICON_NAME };

export const Small = Template.bind({});
Small.args = { ...DefaultArgs, leftIconName: "trash", size: DropdownMenuItemSizes.Small };
