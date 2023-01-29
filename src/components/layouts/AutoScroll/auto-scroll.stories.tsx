import type { ComponentMeta, ComponentStory } from "@storybook/react";

import AutoScroll from "./auto-scroll.component";

export default {
  title: "Components/AutoScroll",
  component: AutoScroll,
  argTypes: {},
} as ComponentMeta<typeof AutoScroll>;

const Template: ComponentStory<typeof AutoScroll> = (args) => <AutoScroll {...args} />;

const DefaultArgs = {
  children: "Não esqueça de atualizar o componente!",
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
