import type { IconProps } from "@/components/basics/Icon/icon.types";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { SizesEnum } from "@/types";
import { TextSizes } from "@/components/typographics/Text/text.types";

import Icon from "./";
import Text from "@/components/typographics/Text";
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
      options: SizesEnum,
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = ({ color, ...args }: IconProps) => (
  <Icon style={{ color }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  name: "me-salva-mini",
  size: SizesEnum.Medium,
};

export const List: ComponentStory<typeof Icon> = ({ color, ...args }: Omit<IconProps, "name">) => {
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
          <Icon name={name} style={{ padding: 8, color }} {...args} />
          <Text size={TextSizes.Small}>{name}</Text>
        </div>
      ))}
    </div>
  );
};

List.args = { size: SizesEnum.Large };
