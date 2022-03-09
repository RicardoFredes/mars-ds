import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Link from "./link.component";

export default {
  title: "Components/Link",
  component: Link,
  argTypes: {},
} as ComponentMeta<typeof Link>;

const Template: ComponentStory<typeof Link> = (args) => <Link {...args} />;

const DefaultArgs = {
  children: "Baixar apostila ENEM!",
  href: "#",
  target: "_blank",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
