import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { dictionary } from "@/components/primitives/FileInput";
import { commonStoreComponentProps } from "@/services/stories";

import AvatarField from "./avatar-field.component";
export default {
  title: "Forms/AvatarField",
  component: AvatarField,
  argTypes: {
    extensions: {
      description: "The allowed file extensions",
      control: "array",
    },
    maxSize: {
      description: "The max file size",
      type: { name: "number", required: false },
    },
    notifications: {
      description: "Notifications to be displayed on certain events",
      control: "object",
      defaultValue: {
        ...dictionary.notifications,
      },
    },
    ...commonStoreComponentProps,
  },
} as ComponentMeta<typeof AvatarField>;

const Template: ComponentStory<typeof AvatarField> = (args) => <AvatarField {...args} />;

const DefaultArgs = {
  extensions: ["jpg", "jpeg", "png"],
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const CustomMaxFileSize = Template.bind({});
CustomMaxFileSize.args = { ...DefaultArgs, maxSize: 10 * 1024 * 1024 /* 10MB */ };
CustomMaxFileSize.story = {
  parameters: {
    loki: { skip: true },
  },
};

export const CustomNotifications = Template.bind({});
CustomNotifications.args = {
  ...DefaultArgs,
  maxSize: 1 * 1024 * 1024,
  notifications: {
    tooBig: "O arquivo é muito grande",
  },
};
CustomNotifications.story = {
  parameters: {
    loki: { skip: true },
  },
};
