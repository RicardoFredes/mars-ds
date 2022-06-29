import type { ComponentMeta, ComponentStory } from "@storybook/react";

import icons from "@/components/basics/Icon/lib";
import { LabelThemes, LabelVariants } from "@/components/basics/Label";
import { commonStoreComponentProps } from "@/services/stories";

import ItemButton from "./item-button.component";

export default {
  title: "Components/ItemButton",
  component: ItemButton,
  argTypes: {
    caption: { control: { type: "text" } },
    title: { control: { type: "text" } },
    subtitle: { control: { type: "text" } },
    iconName: { options: Object.keys(icons), control: { type: "select" } },
    label: { control: { type: "text" } },
    labelVariant: { options: LabelVariants, control: { type: "select" } },
    labelTheme: { options: LabelThemes, control: { type: "select" } },
    iconColor: { control: { type: "color" } },
    ...commonStoreComponentProps,
  },
} as ComponentMeta<typeof ItemButton>;

const Template: ComponentStory<typeof ItemButton> = (args) => (
  <ItemButton style={{ maxWidth: 320 }} {...args} />
);

export const Default = Template.bind({});
Default.args = {
  title: "Pix",
  subtitle: "R$ 297,90",
  label: "-15%",
  iconName: "pix",
  labelTheme: LabelThemes.Ghost,
  labelVariant: LabelVariants.Success,
};

export const NoLabel = Template.bind({});
NoLabel.args = {
  iconName: "google",
  title: "Google Pay",
  subtitle: "Até 12x de R$ 28,23",
};

export const NoIcon = Template.bind({});
NoIcon.args = {
  title: "Biologia",
};

export const WithLink = Template.bind({});
WithLink.args = {
  caption: "Jornada #1",
  title: "Academia do Hábito",
  iconName: "academia-do-habito",
  href: "#",
  onClick: (event) => event.preventDefault(),
};

export const WithImage = Template.bind({});
WithImage.args = {
  title: "ENEM",
  image:
    "https://cdn.mesalva.com/uploads/image/MjAyMi0wNC0yOSAxNzoyMTo0NSArMDAwMDIyNDMyOQ%3D%3D%0A.svg",
  href: "#",
  onClick: (event) => event.preventDefault(),
};

export const WithObjectImage = Template.bind({});
WithObjectImage.args = {
  title: "ENEM",
  image: {
    src: "https://cdn.mesalva.com/uploads/image/MjAyMi0wNi0yNCAxNTo1NDoxMSArMDAwMDUyNTcyMQ%3D%3D%0A.svg",
    darkModeSrc:
      "https://cdn.mesalva.com/uploads/image/MjAyMi0wNi0yNCAxNTo1NDo1MiArMDAwMDc0Njk2Mw%3D%3D%0A.svg",
  },
  href: "#",
  onClick: (event) => event.preventDefault(),
};
