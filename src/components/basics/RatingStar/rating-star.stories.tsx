import Heading from "@/components/typographics/Heading";
import Subtitle from "@/components/typographics/Subtitle";
import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { useState } from "react";
import RatingStar from "./";
import { RatingStarProps } from "./rating-star.types";

export default {
  title: "Components/RatingStar",
  component: RatingStar,
  argTypes: {
    maxValue: {
      control: { type: "number" },
    },
    defaultValue: {
      control: { type: "number" },
    },
  },
} as ComponentMeta<typeof RatingStar>;

const Template: ComponentStory<typeof RatingStar> = (args) => <RatingStar {...args} />;

const DefaultArgs = {
  maxValue: 5,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  ...DefaultArgs,
  defaultValue: 3,
};

const ExampleRating = (props: RatingStarProps) => {
  const [state, setState] = useState(0);

  const handleSelect = (rate: number) => {
    setState(rate);
    if (rate <= 1) {
      alert("A votação foi baixa (1 estrela)");
    }
  };

  return (
    <>
      <Heading>Dê uma nota para o MeSalva!</Heading>
      <RatingStar {...props} onSelect={handleSelect} />
      <Subtitle>O valor de nota foi: {state}</Subtitle>
    </>
  );
};

const ExampleRatingTemplate: ComponentStory<typeof RatingStar> = (args) => (
  <ExampleRating {...args} />
);

export const DefaultExampleRating = ExampleRatingTemplate.bind({});
