import type { LogoProps } from "./";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Logo from "./logo.component";
import { LogoNames, LogoVariants } from "./logo.types";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    name: {
      description: "The variant of our logo",
      control: { type: "radio" },
      options: LogoNames,
      defaultValue: LogoNames.Full,
    },
    variant: {
      description: "The color used for the logo, following our brand guidelines",
      control: { type: "radio" },
      options: LogoVariants,
      defaultValue: LogoVariants.Primary,
    },
    height: {
      description: "The size of the logo",
      control: { type: "number" },
      defaultValue: 40,
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = ({ ...args }: LogoProps) => <Logo {...args} />;

export const Default = Template.bind({});
