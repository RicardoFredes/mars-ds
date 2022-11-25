import type { ComponentMeta, ComponentStory } from "@storybook/react";

import NavigationBarItem from "./navigation-bar-item.component";

export default {
  title: "Components/NavigationBarItem",
  component: NavigationBarItem,
  argTypes: {},
} as ComponentMeta<typeof NavigationBarItem>;

const Template: ComponentStory<typeof NavigationBarItem> = (args) => (
  <NavigationBarItem {...args} />
);

const DefaultArgs = {
  iconName: "comment",
  type: "button",
  text: "Comentar",
  showText: true,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const WithoutText = Template.bind({});
WithoutText.args = { ...DefaultArgs, showText: false };

export const Dropdown: ComponentStory<typeof NavigationBarItem> = (args) => (
  <div className="flex justify-content-center" style={{ paddingTop: 200 }}>
    <NavigationBarItem {...args} />
  </div>
);

Dropdown.args = {
  ...DefaultArgs,
  type: "dropdown",
  list: [
    {
      label: "Download PDF 1",
      leftIconName: "attach",
      href: "/1.pdf",
      target: "_blank",
    },
    {
      label: "Download PDF 2",
      leftIconName: "attach",
      href: "/2.pdf",
      target: "_blank",
    },
    {
      label: "Download PDF 3",
      leftIconName: "attach",
      href: "/3.pdf",
      target: "_blank",
    },
  ],
};
