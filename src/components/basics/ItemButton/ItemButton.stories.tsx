import type { ComponentMeta, ComponentStory } from "@storybook/react";
import icons from "../Icon/lib";
import { LabelTheme, LabelVariants } from "../Label/label.types";
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
    labelTheme: { options: LabelTheme, control: { type: "select" } },
    iconColor: { control: { type: "color" } },
  },
} as ComponentMeta<typeof ItemButton>;

const Template: ComponentStory<typeof ItemButton> = (args) => (
  <ItemButton style={{ maxWidth: 320 }} {...args} />
);

const DefaultArgs = {
  title: "Pix",
  subtitle: "R$ 297,90",
  label: "-15%",
  iconName: "pix",
  labelTheme: LabelTheme.Ghost,
  labelVariant: LabelVariants.Success,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
