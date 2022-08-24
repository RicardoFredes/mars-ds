import type { ComponentMeta, ComponentStory } from "@storybook/react";

import icons from "@/components/basics/Icon/lib";

import Button from "./button.component";
import { ButtonSizes, ButtonVariants } from "./button.types";

export default {
  title: "Components/Button",
  component: Button,
  argTypes: {
    variant: {
      options: Object.values(ButtonVariants),
      control: { type: "select" },
    },
    size: {
      options: Object.values(ButtonSizes),
      control: { type: "select" },
      description: "Altera o tamanho do botão",
    },
    iconName: {
      options: Object.keys(icons),
      control: { type: "select" },
      description: "Seleção de ícones para o botão",
    },
    href: {
      control: { type: "text" },
      description: "Converte o componente renderizado para um link em vez de um botão",
    },
    isRtl: {
      control: { type: "boolean" },
      description: "Modifica o posicionamento do ícone para o lado direito.",
    },
  },
  parameters: {
    // TODO: Fix visual regression
    loki: { skip: true },
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

export const Anchor = TemplateList.bind({});
Anchor.args = {
  ...DefaultArgs,
  onClick: (e) => e.preventDefault(),
  href: "https://www.mesalva.com",
};

export const IconRight = TemplateList.bind({});
IconRight.args = {
  ...DefaultArgs,
  iconName: "me-salva-mini",
  isRtl: true,
};
