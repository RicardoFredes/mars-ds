import type { ComponentMeta, ComponentStory } from "@storybook/react";
import type { RatingStarProps } from "./rating-star.types";

import { useState } from "react";

import { IconSizes } from "@/components/basics/Icon";
import icons from "@/components/basics/Icon/lib";
import Heading from "@/components/typographies/Heading";

import RatingStar from "./rating-star.component";

export default {
  title: "Components/RatingStar",
  component: RatingStar,
  argTypes: {
    iconName: {
      options: Object.keys(icons),
      control: {
        type: "select",
      },
      description: "The same icon name used in Icon component",
      defaultValue: "star",
    },
    label: {
      control: { type: "text" },
      description: "Text to the left of the icons",
    },
    total: {
      control: { type: "number" },
      defaultValue: 5,
      description: "The total amount of elements",
    },
    value: {
      control: { type: "number" },
      defaultValue: 0,
      description: "The amount checked elements",
    },
    iconSize: {
      description: "The icon size",
      options: Object.values(IconSizes),
      defaultValue: IconSizes.Medium,
      control: {
        type: "select",
      },
    },
    disabled: {
      description: "Disable rating star",
      defaultValue: false,
      control: { type: "boolean" },
    },
    isLoading: {
      description: "The loading state",
      defaultValue: false,
      control: { type: "boolean" },
    },
  },
} as ComponentMeta<typeof RatingStar>;

const Template: ComponentStory<typeof RatingStar> = (args) => <RatingStar {...args} />;

const DefaultArgs = {
  total: 5,
  label: "Avaliação:",
  iconSize: IconSizes.Medium,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const WithDefaultValue = Template.bind({});
WithDefaultValue.args = {
  ...DefaultArgs,
  value: 3,
};

const ExampleRating = (props: RatingStarProps) => {
  const [state, setState] = useState(0);

  const handleSelect = (rate: number) => {
    setState(rate);
  };

  return (
    <>
      <Heading>Dê uma nota para o MeSalva!</Heading>
      <RatingStar {...props} onSelect={handleSelect} />
      <Heading size="sm">O valor de nota foi: {state}</Heading>
    </>
  );
};

const ExampleRatingTemplate: ComponentStory<typeof RatingStar> = (args) => (
  <ExampleRating {...args} />
);

export const DefaultExampleRating = ExampleRatingTemplate.bind({});
