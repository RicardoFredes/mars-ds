import type { ComponentMeta, ComponentStory } from "@storybook/react";

import CircleProgress from "./circle-progress.component";

export default {
  title: "Components/Stepper/CircleProgress",
  component: CircleProgress,
  parameters: {
    docs: {
      source: {
        code: `{
          "component": "CircleProgress",
          "percent": 40,
          "color": "var(--color-medicina-500)"
        }`,
        language: "json",
        type: "code",
      },
    },
  },
  argTypes: {
    percent: {
      control: { type: "number" },
      description: "O valor da porcentagem. Ex.: 33",
    },
    color: {
      control: { type: "text" },
      description:
        "A cor da porcentagem e da parte preenchida do círculo. O padrão é var(--color-success-700). Ex.: var(--color-humanas-500), #FAF, ou rgba(127, 0, 0, 0.75)",
    },
  },
} as ComponentMeta<typeof CircleProgress>;

const Template: ComponentStory<typeof CircleProgress> = (args) => (
  <CircleProgress style={{ maxWidth: 320 }} {...args} />
);

const DefaultArgs = {
  percent: 33.3333333333,
  color: "var(--color-success-700)",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;

const CustomColorArgs = {
  ...DefaultArgs,
  color: "var(--color-medicina-500)",
};

export const CustomColor = Template.bind({});
CustomColor.args = CustomColorArgs;
