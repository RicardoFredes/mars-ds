import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Label from "./label.component";
import { LabelThemes, LabelVariants } from "./label.types";

enum LocalLabelTheme {
  Ghost = "ghost",
  Solid = "solid",
}
export default {
  title: "Components/Label",
  component: Label,
  argTypes: {
    variant: {
      options: Object.values(LabelVariants),
      control: { type: "select" },
    },
    theme: {
      options: Object.values(LocalLabelTheme),
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Label>;

const Template: ComponentStory<typeof Label> = (args) => <Label {...args} />;

const DefaultArgs = {
  variant: LabelVariants.Default,
  theme: LabelThemes.Ghost,
  children: "Label",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Primary = Template.bind({});
Primary.args = {
  ...DefaultArgs,
  variant: LabelVariants.Primary,
};

export const Info = Template.bind({});
Info.args = {
  ...DefaultArgs,
  variant: LabelVariants.Info,
};

export const Success = Template.bind({});
Success.args = {
  ...DefaultArgs,
  variant: LabelVariants.Success,
};

export const Warning = Template.bind({});
Warning.args = {
  ...DefaultArgs,
  variant: LabelVariants.Warning,
};

export const Error = Template.bind({});
Error.args = {
  ...DefaultArgs,
  variant: LabelVariants.Error,
};
