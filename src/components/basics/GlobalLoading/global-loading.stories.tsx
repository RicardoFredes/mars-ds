import type { ComponentMeta, ComponentStory } from "@storybook/react";

import GlobalLoading from "./global-loading.component";
import { defaultPhrases } from "./global-loading.helpers";

export default {
  title: "Components/GlobalLoading",
  component: GlobalLoading,
  argTypes: {
    isLoading: { control: { type: "boolean" } },
  },
} as ComponentMeta<typeof GlobalLoading>;

const Template: ComponentStory<typeof GlobalLoading> = (args) => <GlobalLoading {...args} />;

const DefaultArgs = {
  phrases: defaultPhrases,
  isLoading: true,
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
