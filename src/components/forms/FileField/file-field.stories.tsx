import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { action } from "@storybook/addon-actions";

import { dictionary, FIVE_MB } from "@/components/primitives/FileInput";

import FileField from "./file-field.component";

export default {
  title: "Forms/FileField",
  component: FileField,
  argTypes: {
    name: {
      description: "The name of the file field",
      control: { type: "text" },
      defaultValue: undefined,
    },
    maxSize: {
      description: "The maximum size of the file",
      control: { type: "number" },
      defaultValue: FIVE_MB,
    },
    extensions: {
      description: "The extensions allowed for the file",
      control: { type: "array" },
      defaultValue: [],
    },
    placeholder: {
      description: "The placeholder of the file field",
      control: { type: "text" },
      defaultValue: dictionary.placeholder,
    },
    placeholderImage: {
      description: "The placeholder image of the file field",
      control: { type: "text" },
      defaultValue: dictionary.placeholderImage,
    },
    disabled: {
      description: "Whether the file field is disabled",
      control: { type: "boolean" },
      defaultValue: false,
    },
    notifications: {
      description: "The notifications of the file field",
      control: { type: "object" },
      defaultValue: dictionary.notifications,
    },
    onSelectFile: {
      description: "The callback when the file is selected",
      control: { type: "function" },
      action: action("onSelectFile"),
    },
    onUploadFile: {
      description: "The callback when the file is uploaded",
      control: { type: "function" },
      action: action("onUploadFile"),
    },
  },
} as ComponentMeta<typeof FileField>;

const Template: ComponentStory<typeof FileField> = (args) => <FileField {...args} />;

const DefaultArgs = {
  name: "file-name",
  maxSize: FIVE_MB,
  extensions: ["jpg", "jpeg", "png", "gif"],
  placeholder: dictionary.placeholder,
  placeholderImage: dictionary.placeholderImage,
  notifications: dictionary.notifications,
  disabled: false,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const Disabled = Template.bind({});
Disabled.args = { ...DefaultArgs, disabled: true };
