import { ComponentMeta, ComponentStory } from "@storybook/react";
import { Elevations } from "../../types";
import Card from "./card.component";

export default {
  title: "Components/Card",
  component: Card,
  argTypes: {
    elevation: {
      options: Elevations,
      control: { type: "radio" },
    },
  },
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => <Card {...args} />;

export const ElevationZero = Template.bind({});
ElevationZero.args = {
  elevation: Elevations.Zero,
  children: "Card without elevation",
  title: "Teste?",
};

export const ElevationOne = Template.bind({});
ElevationOne.args = {
  elevation: Elevations.One,
  children: "Card with elevation One",
};
