import type { ComponentMeta, ComponentStory } from "@storybook/react";

import icons from "@/libs/icons";

import { IconSizes } from "../Icon/icon.types";
import Link from "./link.component";
import { LinkVariants } from "./link.types";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {
    children: {
      description: "The link text",
    },
    href: {
      description: "The anchor link",
    },
    target: {
      description: "The mode to open link",
      control: "select",
      options: ["_blank", "_self"],
    },
    variant: {
      description: "The style variants",
      control: "select",
      options: Object.values(LinkVariants),
      defaultValue: LinkVariants.Primary,
    },
    iconName: {
      description: "The same name of the icons lib",
      options: Object.keys(icons),
      control: { type: "select" },
    },
    iconSize: {
      description: "The same size of the <Icon>",
      options: Object.values(IconSizes),
      control: { type: "select" },
      defaultValue: IconSizes.Medium,
    },
    className: {
      description: "The same classnames lib",
      control: { type: "text" },
    },
    props: {
      description: "All the props accept in AnchorHTML type",
      control: { type: "object" },
    },
  },
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

const DefaultArgs = {
  children: "Baixar apostila ENEM!",
  href: "#",
  target: "_blank",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Secondary = Template.bind({});
Secondary.args = { ...DefaultArgs, variant: "secondary" };

export const Icon = Template.bind({});
Icon.args = { ...DefaultArgs, iconName: "download" };
