import type { ComponentMeta, ComponentStory } from "@storybook/react";

import icons from "@/components/basics/Icon";

import Button from "./button.component";
import { ButtonSizes, ButtonVariants } from "./button.types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ButtonVariants,
      control: { type: "select" },
    },
    size: {
      options: ButtonSizes,
      control: { type: "select" },
    },
    name: {
      options: Object.keys(icons),
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const TemplateList: ComponentStory<typeof Button> = (args) => {
  const variants = Object.values(ButtonVariants);
  return (
    <div>
      {variants.map((variant, key) => (
        <Button key={key} {...args} variant={variant} style={{ marginBottom: 16, marginRight: 16 }}>
          {variant} button
        </Button>
      ))}
    </div>
  );
};

const DefaultArgs = {
  variant: ButtonVariants.Primary,
  size: ButtonSizes.Medium,
  children: "Quero ser aprovado!",
  disabled: false,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const MediumSize = TemplateList.bind({});
MediumSize.args = {
  ...DefaultArgs,
};

export const SmallSize = TemplateList.bind({});
SmallSize.args = {
  ...DefaultArgs,
  size: ButtonSizes.Small,
};

export const Disabled = TemplateList.bind({});
Disabled.args = {
  ...DefaultArgs,
  disabled: true,
};

export const Icon = TemplateList.bind({});
Icon.args = {
  ...DefaultArgs,
  iconName: "me-salva-mini",
};

export const IconSmallSize = TemplateList.bind({});
IconSmallSize.args = {
  ...DefaultArgs,
  iconName: "me-salva-mini",
  size: ButtonSizes.Small,
};
