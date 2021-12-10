import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ElevationEnum } from "@/types";
import Card from "./";
import Text from "@/components/typographics/Text";
import Heading from "@/components/typographics/Heading";
import { HeadingSizes } from "@/components/typographics/Heading/heading.types";
import type { CardProps } from "./card.types";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    elevation: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      options: { Default: undefined, ...ElevationEnum },
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({ title, ...args }: CardProps) => (
  <Card {...args} style={{ maxWidth: 400 }}>
    <Heading size={HeadingSizes.Small}>{title}</Heading>
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
      laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
      voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
      non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </Text>
  </Card>
);

export const Default = Template.bind({});
Default.args = {
  elevation: undefined,
  title: "Card default",
};

export const Low = Template.bind({});
Low.args = {
  elevation: ElevationEnum.Low,
  title: "Card with low elevation",
};

export const Medium = Template.bind({});
Medium.args = {
  elevation: ElevationEnum.Medium,
  title: "Card with medium elevation",
};

export const High = Template.bind({});
High.args = {
  elevation: ElevationEnum.High,
  title: "Card with high elevation",
};
