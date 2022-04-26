import type { ComponentMeta, ComponentStory } from "@storybook/react";

import GuestButtons from "./guest-buttons.component";

export default {
  title: "Components/GuestButtons",
  component: GuestButtons,
  argTypes: {},
} as ComponentMeta<typeof GuestButtons>;

const Template: ComponentStory<typeof GuestButtons> = (args) => (
  <div style={{ maxWidth: 420 }}>
    <GuestButtons {...args} />{" "}
  </div>
);

export const Default = Template.bind({});
