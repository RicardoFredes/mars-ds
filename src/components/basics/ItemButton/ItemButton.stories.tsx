import type { ComponentMeta, ComponentStory } from "@storybook/react";
import icons from "@/components/basics/Icon/lib";
import { LabelThemes, LabelVariants } from "@/components/basics/Label";
import ItemButton from "./";

export default {
  title: "Components/ItemButton",
  component: ItemButton,
  argTypes: {
    title: { control: { type: "text" } },
    subtitle: { control: { type: "text" } },
    iconName: { options: Object.keys(icons), control: { type: "select" } },
    label: { control: { type: "text" } },
    labelVariant: { options: LabelVariants, control: { type: "select" } },
    labelTheme: { options: LabelThemes, control: { type: "select" } },
    iconColor: { control: { type: "color" } },
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
