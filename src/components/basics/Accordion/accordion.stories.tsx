import type { ComponentMeta, ComponentStory } from "@storybook/react";
import { Text } from "@/index";
import Accordion from "./";

export default {
  title: "Components/Accordion",
  component: Accordion,
  argTypes: {},
} as ComponentMeta<typeof Accordion>;

const Template: ComponentStory<typeof Accordion> = (args) => (
  <Accordion {...args} style={{ maxWidth: 320 }} />
);

const DefaultArgs = {
  title: "Título",
  children: (
    <Text>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est eligendi ratione quos numquam!
      Qui quos id reiciendis eum rerum laboriosam?
    </Text>
  ),
};

export const Default = Template.bind({});
Default.args = DefaultArgs;
