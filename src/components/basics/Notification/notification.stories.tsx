import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Button from "@/components/basics/Button";

import Notification from "./notification.component";
import { NotificationVariants } from "./notification.types";

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
  content: "Mensagem de aviso.",
  durationInMs: 0,
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

const ButtonTemplate: ComponentStory<typeof Notification> = (args) => (
  <Button onClick={() => Notification.open(args)} label="Abrir Notificação" />
);

export const OpenNotification = ButtonTemplate.bind({});
OpenNotification.args = {
  ...DefaultArgs,
  durationInMs: 5000,
};
