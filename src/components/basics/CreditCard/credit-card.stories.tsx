import type { ComponentMeta, ComponentStory } from "@storybook/react";
import CreditCard, { CreditCardVariants } from "./";

export default {
  title: "Components/CreditCard",
  component: CreditCard,
  argTypes: {
    cardHolder: {
      control: { type: "text" },
    },
    cardNumber: {
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
  cardHolder: "Marllon Pereira",
  cardNumber: "1234 1324 3214 4321",
  variant: CreditCardVariants.Primary,
  iconName: "mastercard",
  style: { maxWidth: 280 },
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Secondary = Template.bind({});
Secondary.args = {
  ...DefaultArgs,
  iconName: "visa",
  variant: CreditCardVariants.Secondary,
};
