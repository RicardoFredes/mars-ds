import type { LogoProps } from "@/components/basics/Logo/logo.types";
import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { LogoNameEnums, LogoVariantsEnum } from "@/components/basics/Logo/logo.types";
import Logo from "./";

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {
    name: {
      description: "The variant of our logo",
      control: { type: "radio" },
      options: LogoNameEnums,
      defaultValue: LogoNameEnums.Full,
    },
    variant: {
      description: "The color used for the logo, following our brand guidelines",
      control: { type: "radio" },
      options: LogoVariantsEnum,
      defaultValue: LogoVariantsEnum.Primary,
    },
    height: {
      description: "The size of the logo",
      control: { type: "number" },
      defaultValue: 40,
    },
  },
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = ({ ...args }: LogoProps) => (
  <div
    style={{
      padding: 24,
      backgroundColor: args.variant === LogoVariantsEnum.Neutral ? "gray" : undefined,
    }}
  >
    <Logo {...args} />
  </div>
);

export const Default = Template.bind({});