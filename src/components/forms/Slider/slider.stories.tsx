import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Slider from "./slider.component";

const numberControl = { control: { type: "number" } };

export default {
  title: "Form/Slider",
  component: Slider,
  argTypes: {
    max: numberControl,
    min: numberControl,
    defaultValue: numberControl,
    step: numberControl,
    formatter: {},
  },
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
  <Slider {...args} style={{ maxWidth: 320 }} />
);

const DefaultArgs = {
  max: 120,
  min: 9,
  step: 0.05,
  formatter: (value: number) => currencyFormatter("R$", value),
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

function currencyFormatter(currency: string, value: number) {
  return `${currency} ${value.toFixed(2).replace(".", ",")}`;
}
