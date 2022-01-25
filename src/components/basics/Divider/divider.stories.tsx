import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Divider from "./divider.component";

export default {
  title: "Components/Divider",
  component: Divider,
  argTypes: {
    vertical: {
      control: {
        type: "boolean",
      },
    },
  },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <div
    style={{ backgroundColor: "var(--color-background-primary)", width: 384, height: 384 }}
    className="flex justify-content-center align-items-center"
  >
    <Divider {...args} />
  </div>
);

const DefaultArgs = {
  vertical: false,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
