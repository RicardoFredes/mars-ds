import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { ButtonSizesEnum, ButtonVariantsEnum } from "./button.types";
import Button from ".";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: ButtonVariantsEnum,
      control: { type: "select" },
    },
    size: {
      options: ButtonSizesEnum,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

const TemplateList: ComponentStory<typeof Button> = (args) => {
  const variants = Object.values(ButtonVariantsEnum);
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
  variant: ButtonVariantsEnum.Primary,
  size: ButtonSizesEnum.Medium,
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
  size: ButtonSizesEnum.Small,
};

export const Disabled = TemplateList.bind({});
Disabled.args = {
  ...DefaultArgs,
  disabled: true,
};
