import type { ComponentMeta, ComponentStory } from "@storybook/react";
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

const Template: ComponentStory<typeof PasswordStrongField> = (args) => (
  <PasswordStrongField {...args} style={{ maxWidth: 320, margin: "0 auto" }} />
);

const DefaultArgs = {
  label: "Senha",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

export const MinCaracterPassed = Template.bind({});
MinCaracterPassed.args = {
  ...DefaultArgs,
  value: "12345678901",
};

export const CapitalLettersPassed = Template.bind({});
CapitalLettersPassed.args = {
  ...DefaultArgs,
  value: "Maíusculas",
};

export const SpecialCaracterPassed = Template.bind({});
SpecialCaracterPassed.args = {
  ...DefaultArgs,
  value: "c@r@cter",
};

export const AllPassed = Template.bind({});
AllPassed.args = {
  ...DefaultArgs,
  value: "TodosPassar@m",
};
