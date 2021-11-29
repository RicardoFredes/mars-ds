import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Elevations } from "@/types";
import Card from "./card.component";
import Text from "../typographic/Text/text.component";
import Heading from "../typographic/Heading/heading.component";
import { HeadingSizes } from "../typographic/Heading/heading.types";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    elevation: {
      // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
      options: { Default: undefined, ...Elevations },
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = ({ children, title, ...args }) => (
  <div style={{ padding: 50, background: "#f1f1f1" }}>
    <Card {...args}>
      <Heading size={HeadingSizes.Small}>{title}</Heading>
      <Text>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Text>
    </Card>
  </div>
);

export const Default = Template.bind({});
Default.args = {
  // @ts-expect-error Need to create a default type to Elevations
  elevation: undefined,
  title: "Card default",
};

export const Low = Template.bind({});
Low.args = {
  elevation: Elevations.Low,
  title: "Card with low elevation",
};

export const Medium = Template.bind({});
Medium.args = {
  elevation: Elevations.Medium,
  title: "Card with medium elevation",
};

export const High = Template.bind({});
High.args = {
  elevation: Elevations.High,
  title: "Card with high elevation",
};
