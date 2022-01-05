import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { CardElevations } from "@/components/basics/Card/card.types";
import Notification from "./";
import { NotificationVariants } from "./Notification.types";

export default {
  title: "Components/Notification",
  component: Notification,
  argTypes: {
    variant: {
      options: NotificationVariants,
      control: { type: "select" },
    },
  },
} as ComponentMeta<typeof Notification>;

const Template: ComponentStory<typeof Notification> = (args) => <Notification {...args} />;

const DefaultArgs = {
  variant: NotificationVariants.Default,
  children: "Mensagem de aviso.",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Warning = Template.bind({});
Warning.args = {
  ...DefaultArgs,
  variant: NotificationVariants.Warning,
};

export const Success = Template.bind({});
Success.args = {
  ...DefaultArgs,
  variant: NotificationVariants.Success,
};
export const VariantError = Template.bind({});
VariantError.args = {
  ...DefaultArgs,
  variant: NotificationVariants.Error,
};
export const Info = Template.bind({});
Info.args = {
  ...DefaultArgs,
  variant: NotificationVariants.Info,
};
