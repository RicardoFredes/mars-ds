import type { LogoProps } from "@/components/basics/Logo/logo.types";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { LogoColorsEnum } from "@/components/basics/Logo/logo.types";
import { SizesEnum } from "@/types";
import Logo from "./";
import variants from "./variants";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    variant: {
      description: "The variant of our logo",
      control: { type: "radio" },
      options: Object.keys(variants),
      defaultValue: "full",
    },
    color: {
      description: "The color used for the logo, following our brand guidelines",
      control: { type: "radio" },
      options: LogoColorsEnum,
      defaultValue: LogoColorsEnum.Primary,
    },
    size: {
      description: "The size of the logo",
      control: { type: "radio" },
      options: SizesEnum,
      defaultValue: SizesEnum.Medium,
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = ({ ...args }: LogoProps) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {
  variant: "full",
  color: LogoColorsEnum.Primary,
  size: SizesEnum.Medium,
};
