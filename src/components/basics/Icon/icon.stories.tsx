import type { ComponentMeta, ComponentStory } from "@storybook/react";

import type { IconProps } from "@/components/basics/Icon";
import Icon, { IconSizes } from "@/components/basics/Icon";
import Text, { TextSizes } from "@/components/typographies/Text";

import { ICONS } from "@/configs/icons.config";
import icons from "./lib";

export default {
  title: "Components/Icon",
  component: Icon,
  argTypes: {
    color: {
      control: { type: "color" },
    },
    name: {
      options: Object.keys(icons),
      control: { type: "select" },
    },
    size: {
      options: Object.values(IconSizes),
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args: IconProps) => <Icon {...args} />;

const ICON_NAME = ICONS.STORIES.DEFAULT;

export const Default = Template.bind({});
Default.args = {
  name: ICON_NAME,
  size: "md",
};

export const List: ComponentStory<typeof Icon> = (args: Omit<IconProps, "name">) => {
  const style = {
    display: "grid",
    gap: 24,
    maxWidth: 960,
    margin: "auto",
    gridTemplateColumns: "repeat(6, 1fr)",
  };
  return (
    <div style={style}>
      {Object.keys(icons).map((name) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
          key={name}
        >
          <Icon name={name} style={{ padding: 8 }} {...args} />
          <Text size={TextSizes.Small}>{name}</Text>
        </div>
      ))}
    </div>
  );
};

List.args = { size: IconSizes.Large };
