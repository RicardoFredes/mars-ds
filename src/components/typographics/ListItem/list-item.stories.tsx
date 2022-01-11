import icons from "@/components/basics/Icon/lib";
import Tokens from "@/tokens";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import ListItem from "./";

export default {
  title: "Typographics/ListItem",
  component: ListItem,
  argTypes: {
    bulletIconName: {
      options: Object.keys(icons),
      control: { type: "select" },
    },
    bulletColor: {
      control: { type: "color" },
    },
  },
} as ComponentMeta<typeof ListItem>;

const Template: ComponentStory<typeof ListItem> = (args) => <ListItem {...args} />;

const DefaultArgs = {
  children: "4 correções de redação padrão ao mês",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Bullet = Template.bind({});
Bullet.args = { ...DefaultArgs, bulletIconName: "checkmark", bulletColor: Tokens.ColorSuccess500 };
