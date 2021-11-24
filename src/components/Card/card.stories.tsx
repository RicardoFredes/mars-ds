import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Elevations } from "./card.types";
import Card from "./card.component";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    elevation: {
      options: { Default: undefined, ...Elevations },
      control: { type: 'select' },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
  <div style={{ padding: 50, background: '#f1f1f1' }}>
    <Card {...args} />
  </div>
);

export const Default = Template.bind({});
Default.args = {
  elevation: undefined,
  children: "Card default",
};

export const Low = Template.bind({});
Low.args = {
  elevation: Elevations.Low,
  children: "Card with low elevation",
};

export const Medium = Template.bind({});
Medium.args = {
  elevation: Elevations.Medium,
  children: "Card with medium elevation",
};

export const High = Template.bind({});
High.args = {
  elevation: Elevations.High,
  children: "Card with high elevation",
};
