import type { ComponentMeta, ComponentStory } from "@storybook/react";
import CreditCard from "./";

export default {
  title: "Components/CreditCard",
  component: CreditCard,
  argTypes: {
    cardName: {
      control: { type: "text" },
    },
    cardNumbers: {
      control: { type: "text" },
    },
    variant: {
      control: { type: "text" },
    },
    iconName: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof CreditCard>;

const Template: ComponentStory<typeof CreditCard> = (args) => <CreditCard {...args} />;

const DefaultArgs = {
  cardName: "Marllon Pereira",
  cardNumbers: "1234 1324 3214 4321",
  variant: "primary",
  iconName: "mastercard",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Secondary = Template.bind({});
Secondary.args = {
  ...DefaultArgs,
  variant: "secondary",
};
