import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import PasswordStrongField from ".";

export default {
  title: "Forms/PasswordStrongField",
  component: PasswordStrongField,
  argTypes: {
    label: {
      control: { type: "text" },
    },
  },
} as ComponentMeta<typeof PasswordStrongField>;

const onValidAction = (isValid: boolean) => {
  const handle = action("onValid", { clearOnStoryChange: true });
  return handle({ isValid });
};

const Template: ComponentStory<typeof PasswordStrongField> = (args) => (
  <PasswordStrongField {...args} onValid={onValidAction} />
);

const DefaultArgs = {
  label: "Senha",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const MinCaracterPassed = Template.bind({});
MinCaracterPassed.args = {
  ...DefaultArgs,
  defaultValue: "12345678901",
};

export const CapitalLettersPassed = Template.bind({});
CapitalLettersPassed.args = {
  ...DefaultArgs,
  defaultValue: "Maíusculas",
};

export const SpecialCaracterPassed = Template.bind({});
SpecialCaracterPassed.args = {
  ...DefaultArgs,
  defaultValue: "c@r@cter",
};

export const AllPassed = Template.bind({});
AllPassed.args = {
  ...DefaultArgs,
  defaultValue: "Tod0sPassar@m",
};
