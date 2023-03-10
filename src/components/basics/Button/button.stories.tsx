import type { ComponentMeta, ComponentStory } from "@storybook/react";

import icons from "@/components/basics/Icon/lib";

import { ICONS } from "@/configs/icons.config";
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
    isRounded: {
      control: { type: "boolean" },
      description: "Modifica o arredondamento do botão.",
    },
    color: {
      control: { type: "text" },
      description: "Define a cor do texto do botão. Ex.: var(--color-text-primary)",
      defaultValue: "var(--color-text-primary)",
    },
    hoverColor: {
      control: { type: "text" },
      description:
        "Define a cor do texto ao passar o mouse sob o botão. Ex.: var(--color-text-primary)",
      defaultValue: undefined,
    },
    backgroundColor: {
      control: { type: "text" },
      description: "Define a cor de fundo do botão. Ex.: #F19E59",
      defaultValue: "#F19E59",
    },
    hoverBackgroundColor: {
      control: { type: "text" },
      description: "Define a cor de fundo ao passar o mouse sob o botão. Ex.: #F2B876",
      defaultValue: "#F2B876",
    },
    borderColor: {
      control: { type: "text" },
      description: "Define a cor da borda do botão. Ex.: #FF00FF",
      defaultValue: undefined,
    },
    hoverBorderColor: {
      control: { type: "text" },
      description: "Define a cor da borda ao passar o mouse sob o botão. Ex.: #FF00FF",
      defaultValue: undefined,
    },
    borderWidth: {
      control: { type: "text" },
      description: "Define a espessura da borda do botão",
      defaultValue: undefined,
    },
  },
  parameters: {
    // TODO: Fix visual regression
    loki: { skip: true },
  },
} as ComponentMeta<typeof Button>;

const ICON_NAME = ICONS.STORIES.DEFAULT;

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
  iconName: ICON_NAME,
};

export const IconSmallSize = TemplateList.bind({});
IconSmallSize.args = {
  ...DefaultArgs,
  iconName: ICON_NAME,
  size: ButtonSizes.Small,
};

export const Anchor = TemplateList.bind({});
Anchor.args = {
  ...DefaultArgs,
  onClick: (e) => e.preventDefault(),
  href: "https://www.google.com",
};

export const IconRight = TemplateList.bind({});
IconRight.args = {
  ...DefaultArgs,
  iconName: ICON_NAME,
  isRtl: true,
};

export const Rounded = TemplateList.bind({});
Rounded.args = {
  ...DefaultArgs,
  isRounded: true,
};
