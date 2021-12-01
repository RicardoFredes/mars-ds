import { Sizes } from "@/types";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import CircleStepper from "./circle-stepper.component";

export default {
  title: "Components/CircleStepper",
  component: CircleStepper,
  argtypes: {
    totalSteps: {
      control: { type: "number" },
    },
    position: {
      control: { type: "number" },
    },
  },
} as ComponentMeta<typeof CircleStepper>;

const Template: ComponentStory<typeof CircleStepper> = (args) => <CircleStepper {...args} />;

const DefaultArgs = {
  totalSteps: 6,
  position: 5,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
